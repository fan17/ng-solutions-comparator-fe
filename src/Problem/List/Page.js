import React from 'react';
import LayoutPage from 'Layout/Page';
import DataProvider from 'Problem/List/DataProvider';
import ProblemList from 'Problem/List/ProblemList';
import Loader from 'Layout/Loader';
import ProblemListItem from 'Problem/List/ProblemListItem';
import Comment from 'Comment/Comment';

const ProblemIndexPage = () => {
  const renderComment = comment => (
    <Comment
      id={comment.id}
      author={comment.author}
      description={comment.description}
    />
  );

  const renderProblem = problem => (
    <ProblemListItem
      id={problem.id}
      title={problem.title}
      description={problem.description}
      comments={problem.comments}
      renderComment={renderComment}
    />
  );

  return (
    <LayoutPage title="Problem List">
      <DataProvider>
        {({ loading, problems }) =>
          loading ? (
            <Loader />
          ) : (
            <ProblemList problems={problems} renderProblem={renderProblem} />
          )
        }
      </DataProvider>
    </LayoutPage>
  );
};

export default ProblemIndexPage;
