import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LayoutPage from 'Layout/Page';
import paths from 'Problem/paths';
import ProblemDetails from 'Problem/Details/ProblemDetails';
import DataProvider from 'Problem/Details/DataProvider';
import Loader from 'Layout/Loader';
import SolutionItem from 'Solution/SolutionItem';
import ClapDataProvider from 'Solution/Clap/DataProvider';
import Comment from 'Comment/Comment';

const Page = ({ id }) => {
  const renderComment = comment => (
    <Comment
      id={comment.id}
      author={comment.author}
      description={comment.description}
    />
  );

  const renderSolutionItem = solution => (
    <ClapDataProvider id={solution.id}>
      {({ clap }) => (
        <SolutionItem
          id={solution.id}
          author={solution.author}
          meta={solution.meta}
          claps={solution.claps}
          clap={() => clap(id)}
          comments={solution.comments}
          renderComment={renderComment}
        />
      )}
    </ClapDataProvider>
  );

  return (
    <LayoutPage title="Problem Details">
      <>
        <Link to={paths.index()}>
          <Button variant="primary">Go to list</Button>
        </Link>
        <div style={{ marginTop: '2rem' }}>
          <DataProvider id={id}>
            {({ loading, title, description, comments, solutions }) =>
              loading ? (
                <Loader />
              ) : (
                <ProblemDetails
                  id={id}
                  title={title}
                  description={description}
                  comments={comments}
                  renderComment={renderComment}
                  solutions={solutions}
                  renderSolutionItem={renderSolutionItem}
                />
              )
            }
          </DataProvider>
        </div>
      </>
    </LayoutPage>
  );
};

Page.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Page;
