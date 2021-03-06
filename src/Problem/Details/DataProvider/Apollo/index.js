import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Query from 'Problem/Details/DataProvider/Apollo/Query';

const Apollo = ({ id, children }) => {
  const { data, loading } = useQuery(Query, {
    variables: { id },
  });

  let result = {
    loading,
  };

  if (data && data.problem) {
    result = {
      ...result,
      ...data.problem,
    };
  }

  return children(result);
};

Apollo.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Apollo;
