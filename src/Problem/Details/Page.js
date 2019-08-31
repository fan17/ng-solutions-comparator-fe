import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LayoutPage from 'Layout/Page';
import paths from 'Problem/paths';
import SolutionItem, {
  SolutionItemPropTypes,
} from 'Problem/Details/SolutionItem';

const Page = ({ loading, title, description, solutions }) => (
  <LayoutPage title="Problem Details">
    <Link to={paths.index()}>
      <Button variant="primary">Go to list</Button>
    </Link>
    {loading ? (
      'loading...'
    ) : (
      <>
        <div style={{ marginTop: '2rem' }}>
          <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>

          {solutions.map(solution => (
            <div style={{ marginTop: '2rem' }} key={JSON.stringify(solution)}>
              <SolutionItem
                {...solution}
                voteFor={id => {
                  console.log(`vote for ${id}`);
                }}
              />
            </div>
          ))}
        </div>
      </>
    )}
  </LayoutPage>
);

Page.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  solutions: PropTypes.arrayOf(
    PropTypes.shape(SolutionItemPropTypes.isRequired),
  ).isRequired,
};

Page.defaultProps = {
  title: null,
  description: null,
};

export default Page;
