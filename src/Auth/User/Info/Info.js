import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ name, photo }) => (
  <>
    {name}
    {photo && <img src={photo} alt={name} />}
  </>
);

Info.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

Info.defaultProps = {
  photo: null,
};

export default Info;
