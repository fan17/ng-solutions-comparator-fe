import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'Layout/Header';
import Apollo from 'Apollo/Apollo';
import { ProblemIndexMainRoute } from 'Problem/List/Route';
import { ProblemDetailsMainRoute } from 'Problem/Details/Route';

const App = () => (
  <Apollo>
    <BrowserRouter>
      <Header />
      <main>
        <ProblemIndexMainRoute />
        <ProblemDetailsMainRoute />
      </main>
    </BrowserRouter>
  </Apollo>
);

export default App;
