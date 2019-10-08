import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import useCommentsVisibility from 'Comment/useCommentsVisibilityHook';

const ProblemDetails = ({
  title,
  description,
  comments,
  renderComment,
  solutions,
  renderSolutionItem,
}) => {
  const {
    comments: commentsFromHook,
    button: toogleCommentButton,
  } = useCommentsVisibility(comments);
  return (
    <>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          {toogleCommentButton}
          {commentsFromHook.map(comment => (
            <div style={{ marginTop: '2rem' }} key={comment.id}>
              {renderComment(comment)}
            </div>
          ))}
        </Card.Body>
      </Card>
      {solutions &&
        solutions.map(solution => (
          <div style={{ marginTop: '2rem' }} key={solution.id}>
            {renderSolutionItem(solution)}
          </div>
        ))}
    </>
  );
};

ProblemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  renderSolutionItem: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  renderComment: PropTypes.func.isRequired,
};

export default ProblemDetails;
