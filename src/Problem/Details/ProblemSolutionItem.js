import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Codepen from 'react-codepen-embed';
import Card from 'react-bootstrap/Card';

const ProblemSolutionItem = ({ author, meta: { hash, user } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <Card.Header onClick={toggle}>{author}</Card.Header>
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

export const ProblemSolutionItemPropTypes = {
  author: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    type: PropTypes.oneOf(['codepen']).isRequired,
    hash: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};
ProblemSolutionItem.propTypes = ProblemSolutionItemPropTypes;

export default ProblemSolutionItem;
