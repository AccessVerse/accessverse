import { gql } from '@apollo/client';

const GET_ALL_EVENTS = gql`
  query {
    eventIndex(last: 10) {
      edges {
        node {
          id
          name
          description
          venue
          dateTime
          attendees {
            user
            status
          }
          maxLimit
          creator {
            user {
              name
            }
          }
        }
      }
    }
  }
`;

export default GET_ALL_EVENTS;
