import { Button } from 'antd';
import { appName } from 'config/data';
import routes from 'config/routes';
import { useNavigate } from 'react-router-dom';

function SideNav() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-[20vw] border-r border-gray-500">
      <div className="flex justify-start items-center h-[8vh]">
        <button
          type="button"
          className="flex items-center"
          onClick={() => navigate(routes.DASHBOARD)}
        >
          <img
            src="/logo.png"
            alt="sbg"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="text-2xl font-semibold">{appName}</span>
        </button>
      </div>

      <div className="flex flex-col border border-gray-500 m-4 rounded-lg h-full">
        <Button
          className="text-white"
          onClick={() => navigate(routes.DASHBOARD)}
        >
          Dashboard
        </Button>
        <Button className="text-white" onClick={() => navigate(routes.PROFILE)}>
          Profile
        </Button>
        <Button
          className="text-white"
          onClick={() => navigate(routes.SETTINGS)}
        >
          Settings
        </Button>
      </div>
    </div>
  );
}

export default SideNav;
