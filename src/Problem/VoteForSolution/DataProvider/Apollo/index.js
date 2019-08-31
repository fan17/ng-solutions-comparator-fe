import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import Mutation from './Mutation';

const Apollo = ({ id, children }) => {
  const [voteFor, { loading }] = useMutation(Mutation, {
    variables: { id },
  });

  const result = {
    loading,
    voteFor,
  };

  return children(result);
};

Apollo.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Apollo;
