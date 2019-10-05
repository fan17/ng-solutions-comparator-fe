import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import paths from 'Problem/paths';
import { CommentPropTypes } from 'Comment/Comment';

const Item = ({ id, title, description, comments, renderComment }) => {
  const [commentsAreVisible, setCommentsVisibility] = useState(false);
  const showComments = () => setCommentsVisibility(true);
  const hideComments = () => setCommentsVisibility(false);

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Link to={paths.details(id)}>
          <Button variant="primary">Go to details</Button>
        </Link>
        {comments && !commentsAreVisible && (
          <Button variant="outline-dark" onClick={showComments}>
            Show comments ({comments.length})
          </Button>
        )}
        {comments && commentsAreVisible && (
          <>
            <Button variant="outline-dark" onClick={hideComments}>
              Hide comments
            </Button>
            {comments.map(comment => renderComment(comment))}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export const ItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)),
  renderComment: PropTypes.func.isRequired,
};

Item.defaultProps = {
  comments: null,
};

Item.propTypes = ItemPropTypes;

export default Item;
