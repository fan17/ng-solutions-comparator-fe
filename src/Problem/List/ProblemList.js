import React from 'react';
import PropTypes from 'prop-types';
import Item, { ItemPropTypes } from 'Problem/List/Item';

const ProblemsList = ({ problems }) => (
  <>
    {problems.map(({ id, title, description }) => (
      <div key={id} style={{ marginBottom: '2rem' }}>
        <Item id={id} title={title} description={description} />
      </div>
    ))}
  </>
);

ProblemsList.propTypes = {
  problems: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes).isRequired)
    .isRequired,
};
export default ProblemsList;
