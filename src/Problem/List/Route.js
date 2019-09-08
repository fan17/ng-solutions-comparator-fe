import React from 'react';
import { Route } from 'react-router-dom';
import Page from 'Problem/List/Page';
import { PATH_INDEX } from 'Problem/paths';

export const ProblemIndexMainRoute = () => (
  <Route path={PATH_INDEX} exact component={Page} />
);
