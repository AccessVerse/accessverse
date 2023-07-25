import { Button } from 'antd';
import Layout from 'components/common/Layout';
import routes from 'config/routes';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout page="Dashboard">
      <div className="flex h-full">
        {/* create account and other actions */}
        <div className="flex justify-end w-full p-2">
          <Button
            className="cpbutton"
            onClick={() => navigate(routes.NEW_EVENT)}
          >
            Create Event
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
