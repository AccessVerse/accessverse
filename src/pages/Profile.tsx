import { useQuery } from '@apollo/client';
import Layout from 'components/common/Layout';

import client from '../apolloClient';
import GET_MY_EVENTS from '../queries/getMyEvents';
// import client from 'src/apolloClient';
// import GET_MY_EVENTS from 'src/queries/getMyEvents';

function Profile() {
  const user = JSON.parse(localStorage.getItem('accessverseUser') || '');
  // user = user && typeof user === 'string' ? JSON.parse(user) : 'guest user';

  const { data, loading, error } = useQuery(GET_MY_EVENTS, {
    client,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error?.message}</p>;

  const events = data?.viewer?.eventList?.edges || [];
  console.log('events: ', events);

  return (
    <Layout page="Profile">
      <div className="flex justify-center items-center h-full">
        <div>
          <p>{`Hey ${user?.viewer?.user?.name}`}</p>
          <p>{`Email: ${user?.viewer?.user?.email}`}</p>
        </div>
        <div className="flex justify-center items-center h-full">
          {/* @ts-ignore eslint-disable-next-line */}
          {events.map(({ node: event }, index: number) => {
            return (
              <div key={index}>
                <div>{event.name}</div>
                <div>{event.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
