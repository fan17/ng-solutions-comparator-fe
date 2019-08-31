import React from 'react';
import PropTypes from 'prop-types';
import Clap from 'Layout/Clap';
import DataProvider from './DataProvider';

const VoteForSolution = ({ id, count }) => (
  <DataProvider>
    {({ voteFor }) => <Clap action={() => voteFor(id)} count={count} />}
  </DataProvider>
);

VoteForSolution.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default VoteForSolution;
