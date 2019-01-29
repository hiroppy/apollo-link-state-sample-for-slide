import * as React from 'react';
import { GET_REPO, GetRepoQuery } from '../schemas';

export const Id: React.FC = () => (
  <GetRepoQuery query={GET_REPO}>
    {({ loading, error, data }) => {
      if (loading) return '✍️ Loading...';
      if (error) return `Error! ${error.message}`;

      return data && <span>{data.repository.id}</span>;
    }}
  </GetRepoQuery>
);
