import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import ProblemDetailsPage from 'Problem/Details/Page';
import { PATH_DETAILS } from 'Problem/paths';

const RetrieveRouteParams = ({
  match: {
    params: { id },
  },
  children,
}) => children({ id });

RetrieveRouteParams.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  children: PropTypes.func.isRequired,
};

export const ProblemDetailsMainRoute = () => (
  <Route
    path={PATH_DETAILS}
    exact
    render={props => (
      <RetrieveRouteParams {...props}>
        {routeParams => <ProblemDetailsPage {...routeParams} />}
      </RetrieveRouteParams>
    )}
  />
);
