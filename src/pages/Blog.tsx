import Layout from 'components/common/Layout';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();

  return (
    <Layout page={`Blog - ${id}`}>
      <div className="flex justify-center items-center h-full">Blog - {id}</div>
    </Layout>
  );
}

export default Blog;
