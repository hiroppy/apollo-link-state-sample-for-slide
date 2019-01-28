import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Buttons } from './buttons';
import { counter as Counter } from '../state';

const GET_CURRENT_COUNTER = gql`
  query {
    counter @client {
      current
    }
  }
`;

class GetCurrentCounterQuery extends Query<{ counter: typeof Counter }>{}

export const Top: React.FC = () => (
  <>
    <GetCurrentCounterQuery query={GET_CURRENT_COUNTER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        if (!data) return `Error! data is undefined`;

        return <p>{data.counter.current}</p>;
      }}
    </GetCurrentCounterQuery>
    <Buttons />
  </>
);
