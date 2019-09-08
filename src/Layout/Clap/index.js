import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Clap = ({ clap, count }) => (
  <div>
    <Button type="button" onClick={clap}>
      Clap
    </Button>
    {count} claps
  </div>
);

Clap.propTypes = {
  clap: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Clap;
