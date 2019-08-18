import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import ProblemIndexQuery from './ProblemIndexQuery';

const ProblemIndexApolloConnector = ({ children }) => {
  const { data, loading } = useQuery(ProblemIndexQuery);
  return children({ loading, problems: data.problems });
};

ProblemIndexApolloConnector.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProblemIndexApolloConnector;
