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

  if (data.problem) {
    const problem = {
      ...data.problem,
      solutions: [
        {
          id: 'cwew4f3wd3',
          author: 'AJ',
          meta: {
            type: 'codepen',
            user: 'andrzej-jdrzejczak',
            hash: 'NVYXWg',
          },
          votesCount: 100,
        },
        {
          id: 'asdad33d3',
          author: 'AJ',
          meta: {
            type: 'codepen',
            user: 'andrzej-jdrzejczak',
            hash: 'NVYXWg',
          },
          votesCount: 0,
        },
      ],
    };

    result = { ...result, ...problem };
  }

  return children(result);
};

Apollo.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Apollo;
