import React from 'react';
import { Route } from 'react-router-dom';
import DataProvider from 'Problem/Index/DataProvider';
import Page from 'Problem/Index/Page';
import { PATH_INDEX } from 'Problem/paths';

export const Main = () => (
  <Route
    path={PATH_INDEX}
    exact
    render={() => <DataProvider>{data => <Page {...data} />}</DataProvider>}
  />
);
