import PropTypes from 'prop-types';

const ProblemIndexApolloConnector = ({ children }) =>
  children({
    problems: [
      {
        id: 'a1',
        title: 'aaa',
        description: 'bbb',
      },
      {
        id: 'a2',
        title: 'aaa1',
        description: 'bbb1',
      },
      {
        id: 'a3',
        title: 'aaa2',
        description: 'bbb2',
      },
    ],
    loading: false,
  });

ProblemIndexApolloConnector.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProblemIndexApolloConnector;
