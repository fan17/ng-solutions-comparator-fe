import gql from 'graphql-tag';

const query = gql`
  query ProblemIndexQuery {
    problems {
      id
      title
      description
      comments {
        id
        author {
          name
        }
        description
      }
    }
  }
`;

export default query;
