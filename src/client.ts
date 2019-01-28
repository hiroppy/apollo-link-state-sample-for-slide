import { ApolloClient, InMemoryCache, ApolloLink } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { initialState } from './state';
import { resolvers } from './resolvers';

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults: initialState,
  resolvers
});
const link = ApolloLink.from([stateLink]);

export const client = new ApolloClient({
  link,
  cache
});