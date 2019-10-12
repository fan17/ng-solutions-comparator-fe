import { useMutation } from '@apollo/react-hooks';
import Mutation from './Mutation';

const useCommentSolution = () => {
  const [commentSolution, { loading, error }] = useMutation(Mutation);

  return {
    commentSolution: solutionId => description =>
      commentSolution({ variables: { solutionId, description } }),
    loading,
    error,
  };
};
export default useCommentSolution;
