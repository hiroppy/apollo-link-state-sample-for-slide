import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { counter } from './state';

export const GET_REPO = gql`
  query {
    repository(owner: "hiroppy", name: "apollo-link-state-sample-for-slide") {
      id
    }
  }
`;

export const ADD_STAR = gql`
  mutation AddStar($id: ID!) {
    addStar(input: { starrableId: $id }) {
      clientMutationId
    }
    updateCounter @client
  }
`;

export const GET_COUNTER = gql`
  query {
    counter @client {
      current
    }
  }
`;

export class GetCounterQuery extends Query<{ counter: typeof counter }> {}
export class GetRepoQuery extends Query<{ repository: { id: string } }> {}
export class AddStarMutation extends Mutation {}
