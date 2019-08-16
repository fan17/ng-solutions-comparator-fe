import React from 'react';
import ProblemIndexApolloConnector from './Index/Connector/Apollo/ProblemIndexApolloConnector';
import ProblemIndexPage from './Index/ProblemIndexPage';
import ProblemDetailsApolloConnector from './Details/Connector/Apollo/ProblemDetailsApolloConnector';
import ProblemDetailsPage from './Details/ProblemDetailsPage';
import { PATH_INDEX, PATH_DETAILS } from './paths';

const routes = [
  {
    path: PATH_INDEX,
    exact: true,
    main: () => (
      <ProblemIndexApolloConnector>
        {data => <ProblemIndexPage {...data} />}
      </ProblemIndexApolloConnector>
    ),
  },
  {
    path: PATH_DETAILS,
    exact: true,
    main: ({
      match: {
        params: { id },
      },
    }) => (
      <ProblemDetailsApolloConnector id={id}>
        {data => <ProblemDetailsPage {...data} />}
      </ProblemDetailsApolloConnector>
    ),
  },
];

export default routes;
