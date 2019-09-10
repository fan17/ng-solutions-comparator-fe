import React, { useContext } from 'react';
import AuthContext from 'Auth/Context';
import Header from './Header';

const HeaderContainer = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return <Header isLoggedIn={isLoggedIn} />;
};

export default HeaderContainer;
