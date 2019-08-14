import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from 'routes';
import Footer from 'Layout/Footer';
import Header from 'Layout/Header';
import Apollo from 'Apollo/Apollo';

function App() {
  return (
    <Apollo>
      <BrowserRouter>
        <Header />
        <main>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={props => route.main(props)}
            />
          ))}
        </main>
        <Footer />
      </BrowserRouter>
    </Apollo>
  );
}

export default App;
