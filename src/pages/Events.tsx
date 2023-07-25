import { useMutation, useQuery } from '@apollo/client';
import Layout from 'components/common/Layout';
import routes from 'config/routes';
import { Key } from 'react';
import { useNavigate } from 'react-router-dom';

import client from '../apolloClient';
// import UPDATE_EVENT_ATTENDEE from 'src/mutations/updateEventAttendee';
// import CREATE_USER_EVENT from 'src/mutations/createUserEvent';
import CREATE_USER_EVENT from '../mutations/createUserEvent';
import GET_ALL_EVENTS from '../queries/getAllEvents';
// import client from 'src/apolloClient';
// import GET_ALL_EVENTS from 'src/queries/getAllEvents';

function Events() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_EVENTS, {
    client,
  });
  const [createUserEvent, { loading: createLoading, error: createError }] =
    useMutation(CREATE_USER_EVENT, {
      client,
    });
  // const [updateEvent, {loading: updateLoading, error: updateError}]= useMutation(UPDATE_EVENT_ATTENDEE,{
  //   client
  // });

  if (loading || createLoading) return <p>Loading...</p>;
  if (error || createError)
    return <p>Error: {error?.message || createError?.message}</p>;

  const events = data?.eventIndex?.edges || [];

  const handleJoinEvent = async (eventId: string | number, eventLimit: any) => {
    console.log(eventId);
    await createUserEvent({
      variables: {
        input: {
          content: {
            event: eventId,
            status: 1,
          },
        },
      },
    });

    // console.log('max limit: ',eventLimit);
    // const updateInput= {
    //   id: eventId,
    //   content: {
    //     maxLimit: eventLimit+1
    //   }
    // }
    // const res= await updateEvent({
    //   variables:{
    //     input: updateInput
    //   }
    // });
    // console.log('res= ',res);

    alert('Joined in successfully!');
    navigate(routes.DASHBOARD);
  };
  console.log('events= ', events);
  return (
    <Layout page="Events">
      <div className="flex justify-center items-center h-full">
        {events.map(({ node: event }: any, index: Key | null | undefined) => {
          return (
            <div key={index}>
              <div>{event.name}</div>
              <div>{event.description}</div>
              <button
                type="button"
                onClick={() => handleJoinEvent(event.id, event.maxLimit)}
              >
                Join event
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Events;
