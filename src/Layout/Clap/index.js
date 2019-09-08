import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Clap = ({ action, count }) => {
  const handleClap = event => {
    event.stopPropagation();
    action();
  };
  return (
    <div>
      <Button type="button" onClick={handleClap}>
        Clap
      </Button>
      {count} claps
    </div>
  );
};

Clap.propTypes = {
  action: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Clap;
