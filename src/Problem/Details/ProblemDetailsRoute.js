import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import ProblemDetailsPage from 'Problem/Details/ProblemDetailsPage';
import ProblemDetailsDataProvider from 'Problem/Details/ProblemDetailsDataProvider';

const PATH = '/problem/:id';

export const getPath = id => PATH.replace(':id', id);

const ProblemDetailsRoute = ({
  match: {
    params: { id },
  },
}) => (
  <ProblemDetailsDataProvider id={id}>
    {data => <ProblemDetailsPage {...data} />}
  </ProblemDetailsDataProvider>
);

ProblemDetailsRoute.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default {
  path: PATH,
  exact: true,
  main: props => <ProblemDetailsRoute {...props} />,
};
