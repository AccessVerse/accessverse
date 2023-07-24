import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      document {
        name
        email
        balance
      }
      clientMutationId
    }
  }
`;

export default CREATE_USER;
