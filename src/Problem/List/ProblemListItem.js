import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import paths from 'Problem/paths';

const Item = ({ id, title, description }) => (
  <Card>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
      <Link to={paths.details(id)}>
        <Button variant="primary">Go to details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export const ItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Item.propTypes = ItemPropTypes;

export default Item;
