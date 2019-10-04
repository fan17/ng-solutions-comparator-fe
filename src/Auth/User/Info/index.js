import React, { useContext } from 'react';
import AuthContext from 'Auth/Context';
import Info from './Info';

const InfoContainer = () => {
  const {
    user: { name, imageUrl },
  } = useContext(AuthContext);
  return <Info name={name} photo={imageUrl} />;
};

export default InfoContainer;
