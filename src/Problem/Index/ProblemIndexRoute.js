import React from 'react';
import ProbleIndexDataProvider from 'Problem/Index/ProblemIndexDataProvider';
import ProblemIndexPage from 'Problem/Index/ProblemIndexPage';
import { PATH_INDEX } from 'Problem/paths';

export default {
  path: PATH_INDEX,
  exact: true,
  main: () => (
    <ProbleIndexDataProvider>
      {data => <ProblemIndexPage {...data} />}
    </ProbleIndexDataProvider>
  ),
};
