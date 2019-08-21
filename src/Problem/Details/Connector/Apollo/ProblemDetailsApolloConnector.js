import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import ProblemDetailsQuery from 'Problem/Details/Connector/Apollo/ProblemDetailsQuery';

const ProblemDetailsApolloConnector = ({ id, children }) => {
  const { data, loading } = useQuery(ProblemDetailsQuery, {
    variables: { id },
  });

  let result = {
    loading,
  };

  if (data.problem) {
    const problem = {
      ...data.problem,
      solutions: [
        {
          author: 'AJ',
          meta: {
            type: 'codepen',
            user: 'andrzej-jdrzejczak',
            hash: 'NVYXWg',
          },
        },
      ],
    };

    result = { ...result, ...problem };
  }

  return children(result);
};

ProblemDetailsApolloConnector.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default ProblemDetailsApolloConnector;
