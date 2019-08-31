import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Codepen from 'react-codepen-embed';
import Card from 'react-bootstrap/Card';

const SolutionItem = ({ author, meta: { hash, user } }) => {
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

export const SolutionItemPropTypes = {
  author: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    type: PropTypes.oneOf(['codepen']).isRequired,
    hash: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};
SolutionItem.propTypes = SolutionItemPropTypes;

export default SolutionItem;
