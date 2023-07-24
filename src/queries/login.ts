import { gql } from '@apollo/client';

const LOGIN_QUERY = gql`
  query {
    viewer {
      id
      user {
        id
        name
      }
    }
  }
`;

export default LOGIN_QUERY;
