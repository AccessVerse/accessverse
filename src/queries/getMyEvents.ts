import { gql } from '@apollo/client';

const GET_MY_EVENTS = gql`
  query {
    viewer {
      eventList(last: 10) {
        edges {
          node {
            id
            name
            description
            maxLimit
          }
        }
      }
    }
  }
`;

export default GET_MY_EVENTS;
