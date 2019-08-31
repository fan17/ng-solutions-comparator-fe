import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'Layout/Header';
import Apollo from 'Apollo/Apollo';
import { Main as ProblemIndexMainRoute } from 'Problem/Index/Route';
import { Main as ProblemDetailsMainRoute } from 'Problem/Details/Route';

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
