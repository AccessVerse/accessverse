import { gql } from '@apollo/client';

const UPDATE_EVENT_ATTENDEE = gql`
  mutation UpdateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
      document {
        id
        name
        description
        maxLimit
      }
    }
  }
`;

export default UPDATE_EVENT_ATTENDEE;
