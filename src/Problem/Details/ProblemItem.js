import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProblemListItem = ({ id, title, description }) => (
  <Card>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export const ProblemListItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProblemListItem.propTypes = ProblemListItemPropTypes;

export default ProblemListItem;
