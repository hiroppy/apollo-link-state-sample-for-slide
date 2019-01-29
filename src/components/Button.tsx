import * as React from 'react';
import { GET_REPO, ADD_STAR, GetRepoQuery, AddStarMutation } from '../schemas';

const buttonStyle = {
  background: '#000',
  borderRadius: 3,
  padding: '4px 12px'
};

export const Button: React.FC = () => (
  <GetRepoQuery query={GET_REPO}>
    {({ loading, error, data }) =>
      data && data.repository ? (
        <AddStarMutation mutation={ADD_STAR} variables={{ id: data.repository.id }}>
          {(addStar, { loading, error }) => {
            if (error) return `Error! ${error.message}`;

            return (
              <button onClick={() => addStar()} disabled={loading} style={buttonStyle}>
                {loading ? '💌' : '🌟'}
              </button>
            );
          }}
        </AddStarMutation>
      ) : null
    }
  </GetRepoQuery>
);
