import { Button } from 'antd';
import routes from 'config/routes';
import { AiOutlineHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src="/src/assets/404.svg" alt="404" />

      <div className="flex flex-col justify-center items-center m-8">
        <p>Aww Snap... It&apos;s a 404!</p>
        <Button
          className="text-white my-4"
          onClick={() => navigate(routes.HOME)}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
