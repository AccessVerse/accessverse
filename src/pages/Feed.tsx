import { Button } from 'antd';
import Layout from 'components/common/Layout';

function Feed() {
  return (
    <Layout page="Feed">
      <div className="flex flex-col h-full">
        {/* create account and other actions */}
        <div className="flex justify-end items-center w-full p-4 space-x-2">
          <Button
            className="cpbutton"
            // onClick={() => navigate(routes.NEW_EVENT)}
          >
            Create Discussions
          </Button>

          <Button
            className="cpbutton"
            // onClick={() => navigate(routes.NEW_EVENT)}
          >
            Create Post
          </Button>
        </div>

        <div className="flex h-[80vh] justify-center items-center">
          <span className="text-lg">No Post or Discussions to show</span>
        </div>
      </div>
    </Layout>
  );
}

export default Feed;
