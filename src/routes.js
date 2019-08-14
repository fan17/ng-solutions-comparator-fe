import React from 'react';
import ProblemList from 'Problem/ProblemList';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <ProblemList />,
  },
];

export default routes;
