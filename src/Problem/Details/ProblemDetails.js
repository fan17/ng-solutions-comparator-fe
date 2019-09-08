import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const ProblemDetails = ({
  title,
  description,
  solutions,
  renderSolutionItem,
}) => (
  <>
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
    {solutions.map(solution => (
      <div style={{ marginTop: '2rem' }} key={solution.id}>
        {renderSolutionItem(solution)}
      </div>
    ))}
  </>
);

ProblemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  renderSolutionItem: PropTypes.func.isRequired,
};

export default ProblemDetails;
