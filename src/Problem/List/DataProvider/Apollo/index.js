import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Query from './Query';

const Apollo = ({ children }) => {
  const { data, loading } = useQuery(Query);
  return children({ loading, problems: (data && data.problems) || [] });
};

Apollo.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Apollo;
