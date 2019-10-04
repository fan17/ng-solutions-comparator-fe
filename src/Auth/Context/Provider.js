import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';

const SESSION_STORAGE_FIELD_NAME = 'loggedInUser';

const Provider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem(SESSION_STORAGE_FIELD_NAME)),
  );
  const login = userObj => {
    setUser(userObj);
    sessionStorage.setItem(SESSION_STORAGE_FIELD_NAME, JSON.stringify(userObj));
  };
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem(SESSION_STORAGE_FIELD_NAME);
  };

  const contextData = {
    isLoggedIn: user !== null,
    login,
    logout,
    user,
  };
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
