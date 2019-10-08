import React from 'react';
import PropTypes from 'prop-types';
import Codepen from 'react-codepen-embed';

const SolutiuonCode = ({ type, ...rest }) => {
  switch (type) {
    case 'codepen':
      return <Codepen {...rest} />;
    default:
      return null;
  }
};

export const SolutionPropTypes = PropTypes.shape({
  type: PropTypes.oneOf(['codepen']).isRequired,
}).isRequired;

SolutiuonCode.propTypes = SolutionPropTypes;

export default SolutiuonCode;
