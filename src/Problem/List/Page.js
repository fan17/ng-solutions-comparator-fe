import React from 'react';
import LayoutPage from 'Layout/Page';
import DataProvider from 'Problem/List/DataProvider';
import ProblemList from 'Problem/List/ProblemList';
import Loader from 'Layout/Loader';

const ProblemIndexPage = () => (
  <LayoutPage title="Problem List">
    <DataProvider>
      {({ loading, ...rest }) =>
        loading ? <Loader /> : <ProblemList {...rest} />
      }
    </DataProvider>
  </LayoutPage>
);

export default ProblemIndexPage;
