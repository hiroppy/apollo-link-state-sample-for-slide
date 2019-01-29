import * as React from 'react';
import { GetCounterQuery, GET_COUNTER } from '../schemas';

export const Counter: React.FC = () => (
  <GetCounterQuery query={GET_COUNTER}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return data && <span>{data.counter.current}</span>;
    }}
  </GetCounterQuery>
);
