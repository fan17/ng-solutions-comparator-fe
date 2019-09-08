import gql from 'graphql-tag';

const query = gql`
  query ProblemIndexQuery {
    problems {
      id
      title
      description
    }
  }
`;

export default query;
