import React from 'react';
import PropTypes from 'prop-types';

const ProblemsList = ({ problems, renderListItem }) => (
  <>
    {problems.map(problem => (
      <div key={problem.id} style={{ marginBottom: '2rem' }}>
        {renderListItem(problem)}
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
  renderListItem: PropTypes.func.isRequired,
};
export default ProblemsList;
