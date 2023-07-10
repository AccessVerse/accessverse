import Layout from 'components/common/Layout';
import { useParams } from 'react-router-dom';

function Event() {
  const { id } = useParams();

  return (
    <Layout page={`Event - ${id}`}>
      <div className="flex justify-center items-center h-full">
        Event - {id}
      </div>
    </Layout>
  );
}

export default Event;
