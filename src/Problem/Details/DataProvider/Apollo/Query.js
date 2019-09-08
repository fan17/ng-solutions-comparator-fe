import gql from 'graphql-tag';

const query = gql`
  query ProblemDetailsQuery($id: ID!) {
    problem(id: $id) {
      id
      title
      description
      author {
        name
      }
      solutions {
        id
        title
        description
        link
        author {
          name
        }
        claps {
          user {
            name
          }
          clapsCount
        }
      }
    }
  }
`;

export default query;
