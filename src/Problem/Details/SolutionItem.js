import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Solution, { SolutionPropTypes } from 'Problem/Solution';
import ClapForSolution from 'Problem/Solution/Clap';

const SolutionItem = ({ id, author: { name: authorName }, meta, claps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const totalClapsCount = claps.reduce(
    (prev, { clapsCount }) => prev + clapsCount,
    0,
  );

  return (
    <Card>
      <Card.Header onClick={toggle}>
        {authorName}
        <ClapForSolution id={id} count={totalClapsCount} />
      </Card.Header>
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
  claps: PropTypes.arrayOf(
    PropTypes.shape({
      clapsCount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
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
