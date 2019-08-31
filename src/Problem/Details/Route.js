import React from 'react';
import { Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import ProblemDetailsPage from 'Problem/Details/Page';
import ProblemDetailsDataProvider from 'Problem/Details/DataProvider';
import { PATH_DETAILS } from 'Problem/paths';

const MainHelper = ({
  match: {
    params: { id },
  },
}) => (
  <ProblemDetailsDataProvider id={id}>
    {data => <ProblemDetailsPage {...data} />}
  </ProblemDetailsDataProvider>
);

MainHelper.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export const Main = () => (
  <Route
    path={PATH_DETAILS}
    exact
    render={props => <MainHelper {...props} />}
  />
);
