import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogout } from 'react-google-login';

const Button = ({ onSuccess }) => (
  <GoogleLogout
    // todo
    clientId="253333500137-ge922dp8mh4531kdis56psoqnlp89j4b.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={onSuccess}
  />
);

Button.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default Button;
