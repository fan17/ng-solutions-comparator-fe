import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Codepen from 'react-codepen-embed';
import Card from 'react-bootstrap/Card';
import VoteForSolution from 'Problem/VoteForSolution';

const SolutionItem = ({ id, author, meta: { hash, user }, votesCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <Card.Header onClick={toggle}>
        {author}
        <VoteForSolution id={id} count={votesCount} />
      </Card.Header>
      {isOpen ? (
        <Card.Body>
          <Card.Text>
            <Codepen hash={hash} user={user} />
          </Card.Text>
        </Card.Body>
      ) : null}
    </Card>
  );
};

export const SolutionItemPropTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    type: PropTypes.oneOf(['codepen']).isRequired,
    hash: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
  votesCount: PropTypes.number.isRequired,
};
SolutionItem.propTypes = SolutionItemPropTypes;

export default SolutionItem;
