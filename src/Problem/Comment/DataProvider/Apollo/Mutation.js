import gql from 'graphql-tag';

const query = gql`
  mutation CommentProblem($problemId: ID!, $description: String!) {
    commentProblem(
      comment: { problemId: $problemId, description: $description }
    ) {
      id
      description
    }
  }
`;

export default query;
