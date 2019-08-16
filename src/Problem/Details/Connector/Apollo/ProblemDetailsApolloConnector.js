import PropTypes from 'prop-types';

const ProblemDetailsApolloConnector = ({ children }) =>
  children({
    loading: false,
    id: 'a1',
    title: 'aaa',
    description: 'bbb',
  });

ProblemDetailsApolloConnector.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProblemDetailsApolloConnector;
