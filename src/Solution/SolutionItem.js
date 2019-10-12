import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import AuthContext from 'Auth/Context';
import Solution, { SolutionPropTypes } from 'Solution/SolutionCode';
import Clap from 'Layout/Clap';
import useComments from 'Comment/useCommentsHook';

const SolutionItem = ({
  id,
  author: { name: authorName },
  meta,
  claps,
  clap,
  comments,
  renderComment,
}) => {
  const {
    comments: commentsFromHook,
    button: toogleCommentButton,
    visible: areCommentsVisible,
  } = useComments({ comments, onAdd: () => {} });

  const { isLoggedIn } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const totalClapsCount = claps.reduce(
    (prev, { clapsCount }) => prev + clapsCount,
    0,
  );

  const handleClap = event => {
    event.stopPropagation();
    clap(id);
  };

  return (
    <Card>
      <Card.Header onClick={toggle}>
        {authorName}
        <Clap
          clap={handleClap}
          count={totalClapsCount}
          disabled={!isLoggedIn}
        />
      </Card.Header>
      {isOpen ? (
        <Card.Body>
          <Solution {...meta} />
          {toogleCommentButton}
          {areCommentsVisible && <div>adasd</div>}
          {areCommentsVisible &&
            commentsFromHook.map(comment => (
              <div style={{ marginTop: '2rem' }} key={comment.id}>
                {renderComment(comment)}
              </div>
            ))}
        </Card.Body>
      ) : null}
    </Card>
  );
};

export const SolutionItemPropTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: SolutionPropTypes,
  claps: PropTypes.arrayOf(
    PropTypes.shape({
      clapsCount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  clap: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  renderComment: PropTypes.func.isRequired,
};
SolutionItem.propTypes = SolutionItemPropTypes;

SolutionItem.defaultProps = {
  meta: {
    type: 'codepen',
    hash: 'NVYXWg',
    user: 'andrzej-jdrzejczak',
  },
};

export default SolutionItem;
