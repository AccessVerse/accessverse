import { Button } from 'antd';
import Layout from 'components/common/Layout';
import { demoBlogs } from 'config/data';
import routes from 'config/routes';
import { Link, useNavigate } from 'react-router-dom';

function Blogs() {
  const navigate = useNavigate();

  return (
    <Layout page="Blogs">
      <div className="flex flex-col h-full">
        {/* create account and other actions */}
        <div className="flex justify-end w-full p-4">
          <Button
            className="cpbutton"
            onClick={() => navigate(routes.NEW_BLOG)}
          >
            Create Blog
          </Button>
        </div>

        <div className="flex flex-col p-4 space-y-4 cscrollbar">
          {demoBlogs.map(({ name, author, date, wordCount }, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-gray-400 rounded-lg p-4 space-y-2"
            >
              <h1 className="text-lg">{name}</h1>
              <div className="flex justify-between items-center">
                <span className="text-base text-gray-400">By: {author}</span>
                <span className="text-sm text-gray-500">
                  Word Count: {wordCount}
                </span>
              </div>
              <span className="text-sm text-gray-500">Created on: {date}</span>

              <Link to={routes.BLOG(`${idx}`)}>
                <Button className="cpbutton w-max" size="small">
                  Read more...
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
