import gql from 'graphql-tag';

const query = gql`
  mutation ClapForSolution($id: ID!) {
    clapForSolution(solution: { id: $id }) {
      id
      claps {
        clapsCount
      }
    }
  }
`;

export default query;
