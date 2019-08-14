import React from 'react';
import PropTypes from 'prop-types';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export const client = new ApolloClient({
  uri: 'https://faker.graphqleditor.com/fan17/ng-solutions-comparator/graphql',
});

const Apollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

Apollo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Apollo;
