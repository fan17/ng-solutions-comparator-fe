import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Comment = ({ id, author: { name: authorName }, description }) => (
  <>
    <Card>
      <Card.Header>
        #{id} {authorName}
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </>
);

export const CommentPropTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

Comment.propTypes = CommentPropTypes;

export default Comment;
