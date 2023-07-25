import { gql } from '@apollo/client';

const CREATE_EVENT = gql`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      document {
        id
        name
      }
      clientMutationId
    }
  }
`;
export default CREATE_EVENT;
