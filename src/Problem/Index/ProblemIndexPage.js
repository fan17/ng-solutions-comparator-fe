import React from 'react';
import PropTypes from 'prop-types';
import ProblemListItem, {
  ProblemListItemPropTypes,
} from 'Problem/Index/ProblemItem';
import Page from 'Layout/Page';

const ProblemIndexPage = ({ loading, problems }) => (
  <Page title="Problem List">
    {loading
      ? 'loading...'
      : problems.map(({ id, title, description }) => (
          <div key={id} style={{ marginBottom: '2rem' }}>
            <ProblemListItem id={id} title={title} description={description} />
          </div>
        ))}
  </Page>
);

ProblemIndexPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  problems: PropTypes.arrayOf(
    PropTypes.shape(ProblemListItemPropTypes).isRequired,
  ).isRequired,
};
export default ProblemIndexPage;
