import React from 'react';
import PropTypes from 'prop-types';
import Page from 'Layout/Page';

const ProblemDetailsPage = ({ loading, title, description }) => (
  <Page title="Problem Details">
    {loading ? 'loading...' : title + description}
  </Page>
);

ProblemDetailsPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProblemDetailsPage;
