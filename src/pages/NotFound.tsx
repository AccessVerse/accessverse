import { Button } from 'antd';
import routes from 'config/routes';
import { AiOutlineHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container flex-col h-[100vh] cthemebg">
      <h1 className="text-4xl ctext font-bold">Page not found</h1>

      <Button
        className="container m-8 w-max ctransition"
        size="large"
        onClick={() => navigate(routes.HOME())}
        icon={<AiOutlineHome className="mr-2" />}
      >
        Back to home
      </Button>
    </div>
  );
}

export default NotFound;
