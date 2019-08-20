import gql from 'graphql-tag';

const query = gql`
  query ProblemDetailsQuery($id: ID!) {
    problem(id: $id) {
      id
      title
      description
    }
  }
`;

export default query;
