import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Clap = ({ clap, count, disabled }) => (
  <div>
    <Button type="button" onClick={clap} disabled={disabled}>
      Clap
    </Button>
    {count} claps
  </div>
);

Clap.propTypes = {
  clap: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

Clap.defaultProps = {
  disabled: false,
};

export default Clap;
