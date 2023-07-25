import Layout from 'components/common/Layout';
import { demoBlogs } from 'config/data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function fetchAndSet(
  id: number,
  setFunc: React.Dispatch<React.SetStateAction<BlogType | undefined>>
) {
  // @ts-ignore
  setFunc(demoBlogs[id]);
}

type BlogType = {
  name: string;
  wordCount: number;
  date: string;
  author: string;
  blogPara: string[];
};

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogType | undefined>();

  useEffect(() => {
    if (id) {
      fetchAndSet(+id, setBlog);
    }
  }, [id]);

  return (
    <Layout page={`${blog?.name}`}>
      <div className="flex flex-col p-4 space-y-2">
        {blog?.blogPara.map((paragraph, idx) => {
          return (
            <span key={idx} className="block">
              {paragraph}
            </span>
          );
        })}
      </div>
    </Layout>
  );
}

export default Blog;
