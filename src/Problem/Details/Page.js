import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LayoutPage from 'Layout/Page';
import paths from 'Problem/paths';
import ProblemDetails from 'Problem/Details/ProblemDetails';
import DataProvider from 'Problem/Details/DataProvider';
import Loader from 'Layout/Loader';
import SolutionItem from 'Problem/Details/SolutionItem';
import ClapDataProvider from 'Problem/Solution/Clap/DataProvider';

const Page = ({ id }) => {
  const renderSolutionItem = solution => (
    <ClapDataProvider id={solution.id}>
      {({ clap }) => <SolutionItem {...solution} clap={() => clap(id)} />}
    </ClapDataProvider>
  );

  const Details = (
    <DataProvider id={id}>
      {({ loading, ...rest }) =>
        loading ? (
          <Loader />
        ) : (
          <ProblemDetails {...rest} renderSolutionItem={renderSolutionItem} />
        )
      }
    </DataProvider>
  );

  return (
    <LayoutPage title="Problem Details">
      <>
        <Link to={paths.index()}>
          <Button variant="primary">Go to list</Button>
        </Link>
        <div style={{ marginTop: '2rem' }}>{Details}</div>
      </>
    </LayoutPage>
  );
};

Page.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Page;
