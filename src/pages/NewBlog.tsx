import MDEditor, { ContextStore } from '@uiw/react-md-editor';
import { Button, Input } from 'antd';
import Layout from 'components/common/Layout';
import routes from 'config/routes';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type OnChange = (
  value?: string,
  event?: ChangeEvent<HTMLTextAreaElement>,
  state?: ContextStore
) => void;

const NewBlog = function NewEvent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // TODO: api call for the blog to submit
    // redirect to all blogs
    navigate(routes.BLOGS);
  };

  const [value, setValue] = useState(
    '**Get started with your AccessVerse Blog!!!**'
  );
  const [blogName, setBlogName] = useState('');

  // Create a new function that matches the expected type for onChange prop
  const handleEditorChange: OnChange = (newValue) => {
    setValue(newValue || ''); // Ensure that the value is not undefined
  };

  const handleBlogNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogName(e.target.value);
  };

  const handleFormSubmit = () => {
    // Call your API to submit the blog with 'value' and 'blogName' data
    handleSubmit();
  };

  return (
    <Layout page={`New Blog${blogName ? ` - ${blogName} (draft)` : ''}`}>
      {/* Ensure that the body and HTML tags have 100% height */}
      <div className="h-screen flex flex-col items-center p-2 overflow-y-auto cscrollbar">
        <span className="m-2">Create your Blog</span>

        <MDEditor
          value={value}
          onChange={handleEditorChange}
          className="w-full flex-1"
        />

        <div className="flex items-center mt-4 w-full space-x-2">
          <span className="mr-2">Blog Name:</span>
          <Input
            placeholder="Enter Blog name"
            value={blogName}
            onChange={handleBlogNameChange}
            style={{ flex: '1', minWidth: '200px', maxWidth: '500px' }}
          />

          <Button className="cpbutton" onClick={handleFormSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NewBlog;
