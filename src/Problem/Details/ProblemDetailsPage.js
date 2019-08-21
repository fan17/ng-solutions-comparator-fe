import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Page from 'Layout/Page';
import paths from 'Problem/paths';
import ProblemSolutionItem, {
  ProblemSolutionItemPropTypes,
} from 'Problem/Details/ProblemSolutionItem';

const ProblemDetailsPage = ({ loading, title, description, solutions }) => (
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
          {solutions.map(solution => (
            <div style={{ marginTop: '2rem' }} key={JSON.stringify(solution)}>
              <ProblemSolutionItem {...solution} />
            </div>
          ))}
        </div>
      </>
    )}
  </Page>
);

ProblemDetailsPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  solutions: PropTypes.arrayOf(
    PropTypes.shape(ProblemSolutionItemPropTypes.isRequired),
  ).isRequired,
};

ProblemDetailsPage.defaultProps = {
  title: null,
  description: null,
};

export default ProblemDetailsPage;
