import React from 'react';
import PropTypes from 'prop-types';
import Clap from 'Layout/Clap';
import DataProvider from './DataProvider';

const ClapForSolution = ({ id, count }) => (
  <DataProvider id={id}>
    {({ clap }) => <Clap action={() => clap(id)} count={count} />}
  </DataProvider>
);

ClapForSolution.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ClapForSolution;
