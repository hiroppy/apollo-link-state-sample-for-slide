import { IResolvers } from 'graphql-tools';
import { GET_COUNTER } from './schemas';

export const resolvers: IResolvers = {
  Mutation: {
    updateCounter: (_, variables, { cache }) => {
      const query = GET_COUNTER;
      const prev = cache.readQuery({ query });
      const data = { current: prev.counter.current++ };

      cache.writeData({ query, data });

      return null;
    }
  }
};
