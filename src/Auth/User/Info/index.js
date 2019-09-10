import React, { useContext } from 'react';
import AuthContext from 'Auth/Context';
import Info from './Info';

const InfoContainer = () => {
  const {
    user: { name, photo },
  } = useContext(AuthContext);
  return <Info name={name} photo={photo} />;
};

export default InfoContainer;
