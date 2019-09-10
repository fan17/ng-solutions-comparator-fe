import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

const Button = ({ onSuccess, onFailure }) => (
  <GoogleLogin
    // todo
    clientId="253333500137-ge922dp8mh4531kdis56psoqnlp89j4b.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy="single_host_origin"
  />
);

Button.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default Button;
