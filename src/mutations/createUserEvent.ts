import { gql } from '@apollo/client';

const CREATE_USER_EVENT = gql`
  mutation CreateUserEvent($input: CreateUserEventInput!) {
    createUserEvent(input: $input) {
      document {
        event
        status
      }
    }
  }
`;

export default CREATE_USER_EVENT;
