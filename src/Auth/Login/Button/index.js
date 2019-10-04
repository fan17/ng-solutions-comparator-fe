import React, { useContext } from 'react';
import AuthContext from 'Auth/Context';
import Button from './Button';

const ButtonContainer = () => {
  const { login } = useContext(AuthContext);
  const handleSuccess = ({ profileObj }) => {
    login(profileObj);
  };
  const handleFailure = () => {};

  return <Button onSuccess={handleSuccess} onFailure={handleFailure} />;
};

export default ButtonContainer;
