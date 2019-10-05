import React from 'react';
import LayoutPage from 'Layout/Page';
import DataProvider from 'Problem/List/DataProvider';
import ProblemList from 'Problem/List/ProblemList';
import Loader from 'Layout/Loader';
import ProblemListItem from 'Problem/List/ProblemListItem';
import Comment from 'Comment/Comment';

const ProblemIndexPage = () => (
  <LayoutPage title="Problem List">
    <DataProvider>
      {({ loading, problems }) =>
        loading ? (
          <Loader />
        ) : (
          <ProblemList
            problems={problems}
            renderItem={problem => (
              <ProblemListItem
                {...problem}
                renderComment={comment => (
                  <Comment
                    author={comment.author}
                    description={comment.description}
                  />
                )}
              />
            )}
          />
        )
      }
    </DataProvider>
  </LayoutPage>
);

export default ProblemIndexPage;
