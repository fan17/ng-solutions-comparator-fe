import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const Page = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
