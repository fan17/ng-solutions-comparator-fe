import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import problemPaths from 'Problem/paths';
import AuthLoginButton from 'Auth/Login/Button';
import AuthLogoutButton from 'Auth/Logout/Button';
import AuthUserInfo from 'Auth/User/Info';

const Header = ({ isLoggedIn }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Link to={problemPaths.index()}>
        <Navbar.Brand>NG Solution Comparator</Navbar.Brand>
      </Link>
      <Nav className="mr-auto"></Nav>
      {isLoggedIn ? (
        <>
          <AuthUserInfo />
          <AuthLogoutButton />
        </>
      ) : (
        <AuthLoginButton />
      )}
    </Navbar>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
