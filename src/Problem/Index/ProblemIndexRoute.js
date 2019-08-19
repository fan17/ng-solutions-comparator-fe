import React from 'react';
import ProbleIndexDataProvider from 'Problem/Index/ProblemIndexDataProvider';
import ProblemIndexPage from 'Problem/Index/ProblemIndexPage';

const PATH = '/';

export const getPath = () => PATH;

export default {
  path: PATH,
  exact: true,
  main: () => (
    <ProbleIndexDataProvider>
      {data => <ProblemIndexPage {...data} />}
    </ProbleIndexDataProvider>
  ),
};
