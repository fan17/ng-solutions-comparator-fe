import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Page from 'Layout/Page';
import paths from 'Problem/paths';

const ProblemDetailsPage = ({ loading, title, description }) => (
  <Page title="Problem Details">
    {loading ? (
      'loading...'
    ) : (
      <>
        <Link to={paths.index()}>
          <Button variant="primary">Go to list</Button>
        </Link>
        <div style={{ marginTop: '2rem' }}>
          <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    )}
  </Page>
);

ProblemDetailsPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProblemDetailsPage.defaultProps = {
  title: null,
  description: null,
};

export default ProblemDetailsPage;
