import React, { useContext } from 'react';
import AuthContext from 'Auth/Context';
import Button from './Button';

const ButtonContainer = () => {
  const { logout } = useContext(AuthContext);
  const handleSuccess = () => {
    logout();
  };

  return <Button onSuccess={handleSuccess} />;
};

export default ButtonContainer;
