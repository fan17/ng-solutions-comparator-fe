import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Solution, { SolutionPropTypes } from 'Problem/Solution';

const SolutionItem = ({ author: { name: authorName }, meta }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <Card.Header onClick={toggle}>{authorName}</Card.Header>
      {isOpen ? (
        <Card.Body>
          <Solution {...meta} />
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
