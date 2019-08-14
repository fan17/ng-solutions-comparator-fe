import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from 'routes';
import Footer from 'Layout/Footer';
import Header from 'Layout/Header';

function App() {
  return (
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
  );
}

export default App;
