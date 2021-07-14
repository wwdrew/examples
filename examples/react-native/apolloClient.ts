import fetch from 'node-fetch';
import { from, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = from([
  new HttpLink({
    uri: 'http://myapi.test/graphql',
    credentials: 'same-origin',
    fetch: (...args) => {
      return fetch(...args);
    },
  }),
]);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;
