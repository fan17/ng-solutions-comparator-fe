import React from 'react';
import PropTypes from 'prop-types';
import Item, { ItemPropTypes } from 'Problem/Index/Item';
import LayoutPage from 'Layout/Page';

const ProblemIndexPage = ({ loading, problems }) => (
  <LayoutPage title="Problem List">
    {loading
      ? 'loading...'
      : problems.map(({ id, title, description }) => (
          <div key={id} style={{ marginBottom: '2rem' }}>
            <Item id={id} title={title} description={description} />
          </div>
        ))}
  </LayoutPage>
);

ProblemIndexPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  problems: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes).isRequired)
    .isRequired,
};
export default ProblemIndexPage;
