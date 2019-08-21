import React from 'react';
import PropTypes from 'prop-types';
import Codepen from 'react-codepen-embed';

const ProblemSolutionItem = ({ author, meta: { hash, user } }) => (
  <div>
    User: {author}
    <Codepen hash={hash} user={user} />
  </div>
);

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
