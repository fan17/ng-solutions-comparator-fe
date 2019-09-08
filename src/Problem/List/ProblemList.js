import React from 'react';
import PropTypes from 'prop-types';

const ProblemsList = ({ problems, renderItem }) => (
  <>
    {problems.map(problem => (
      <div key={problem.id} style={{ marginBottom: '2rem' }}>
        {renderItem(problem)}
      </div>
    ))}
  </>
);

ProblemsList.propTypes = {
  problems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  renderItem: PropTypes.func.isRequired,
};
export default ProblemsList;
