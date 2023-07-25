import { Button } from 'antd';
import Layout from 'components/common/Layout';
import routes from 'config/routes';
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const navigate = useNavigate();

  return (
    <Layout page="Blogs">
      <div className="flex h-full">
        {/* create account and other actions */}
        <div className="flex justify-end w-full p-4">
          <Button
            className="cpbutton"
            onClick={() => navigate(routes.NEW_BLOG)}
          >
            Create Blog
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
