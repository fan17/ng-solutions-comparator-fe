import React from 'react';
import PropTypes from 'prop-types';

const ProblemsList = ({ problems, renderProblem }) => (
  <>
    {problems.map(problem => (
      <div key={problem.id} style={{ marginBottom: '2rem' }}>
        {renderProblem(problem)}
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
  renderProblem: PropTypes.func.isRequired,
};
export default ProblemsList;
