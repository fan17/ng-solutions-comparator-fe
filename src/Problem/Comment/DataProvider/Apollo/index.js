import { useMutation } from '@apollo/react-hooks';
import Mutation from './Mutation';

const useCommentProblem = () => {
  const [commentProblem, { loading, error }] = useMutation(Mutation);

  return {
    commentProblem: problemId => description =>
      commentProblem({ variables: { problemId, description } }),
    loading,
    error,
  };
};
export default useCommentProblem;
