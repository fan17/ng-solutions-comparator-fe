import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import paths from 'Problem/paths';
import { CommentPropTypes } from 'Comment/Comment';
import useCommentsVisibility from 'Comment/useCommentsVisibilityHook';

const Item = ({ id, title, description, comments, renderComment }) => {
  const {
    comments: commentsFromHook,
    button: toogleCommentButton,
  } = useCommentsVisibility(comments);

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Link to={paths.details(id)}>
          <Button variant="primary">Go to details</Button>
        </Link>
        {toogleCommentButton}
        {commentsFromHook.map(comment => (
          <div style={{ marginTop: '2rem' }} key={comment.id}>
            {renderComment(comment)}
          </div>
        ))}
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
