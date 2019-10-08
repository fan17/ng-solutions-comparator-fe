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
      comments {
        id
        author {
          name
        }
        description
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
        comments {
          id
          author {
            name
          }
          description
        }
      }
    }
  }
`;

export default query;
