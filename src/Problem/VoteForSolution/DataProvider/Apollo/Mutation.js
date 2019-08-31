import gql from 'graphql-tag';

const query = gql`
  mutation VoteForProblemSolution($id: ID!) {
    voteForProblemSolution(id: $id) {
      id
      votesCount
    }
  }
`;

export default query;
