import Layout from 'components/common/Layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function fetchAndSet(
  id: string,
  setFunc: React.Dispatch<React.SetStateAction<object>>
) {
  // some api to fetch the blog
  setFunc({});
}

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    if (id) {
      fetchAndSet(id, setBlog);
    }
  }, [id]);

  return (
    <Layout page={`Blog - ${id}`}>
      <div className="flex justify-center items-center h-full">Blog - {id}</div>
    </Layout>
  );
}

export default Blog;
