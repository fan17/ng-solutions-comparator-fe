import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import SolutionItem, {
  SolutionItemPropTypes,
} from 'Problem/Details/SolutionItem';

const ProblemDetails = ({ title, description, solutions }) => (
  <>
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
    {solutions.map(solution => (
      <div style={{ marginTop: '2rem' }} key={solution.id}>
        <SolutionItem {...solution} />
      </div>
    ))}
  </>
);

ProblemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(
    PropTypes.shape(SolutionItemPropTypes.isRequired),
  ).isRequired,
};

export default ProblemDetails;
