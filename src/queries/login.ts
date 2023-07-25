import { gql } from '@apollo/client';

const LOGIN_QUERY = gql`
  query {
    viewer {
      id
      user {
        id
        name
        email
      }
    }
  }
`;

export default LOGIN_QUERY;
