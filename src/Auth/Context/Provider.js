import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = userObj => setUser(userObj);
  const logout = () => setUser(null);

  return (
    <Context.Provider
      value={{
        user,
        isLoggedIn: user !== null,
        login,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
