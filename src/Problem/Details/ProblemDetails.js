import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import AuthContext from 'Auth/Context';
import useComments from 'Comment/useCommentsHook';
import useCommentProblem from 'Problem/Comment/DataProvider';

const ProblemDetails = ({
  id,
  title,
  description,
  comments,
  renderComment,
  solutions,
  renderSolutionItem,
}) => {
  const {
    commentProblem,
    loading: addingCommentInProgress,
    error: addingCommentError,
  } = useCommentProblem();
  const {
    comments: commentsFromHook,
    button: toogleCommentButton,
    visible: areCommentsVisible,
    newOne: newCommentItem,
  } = useComments({
    comments,
    onAdd: commentProblem(id),
    addingCommentInProgress,
    addingCommentError,
  });
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          {toogleCommentButton}
          {isLoggedIn && areCommentsVisible && (
            <div style={{ marginTop: '2rem' }}>{newCommentItem}</div>
          )}
          {areCommentsVisible &&
            commentsFromHook.map(comment => (
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
  id: PropTypes.string.isRequired,
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
