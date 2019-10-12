import gql from 'graphql-tag';

const query = gql`
  mutation CommentSolution($solutionId: ID!, $description: String!) {
    commentSolution(
      comment: { solutionId: $solutionId, description: $description }
    ) {
      id
      description
    }
  }
`;

export default query;
