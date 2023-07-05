import { Tooltip } from 'antd';
import { appName, semanticVersion } from 'config/data';
import routes from 'config/routes';
import { CgFeed, CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { RiFilePaper2Line } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TfiWrite } from 'react-icons/tfi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sections = [
  {
    name: 'Menu',
    children: [
      {
        name: 'Dashboard',
        logo: <RxDashboard />,
        route: routes.DASHBOARD,
      },
      {
        name: 'Feed',
        logo: <CgFeed />,
        route: routes.FEED,
      },
      {
        name: 'Blogs',
        logo: <TfiWrite />,
        route: routes.BLOGS,
      },
      {
        name: 'Docs',
        logo: <RiFilePaper2Line />,
        route: routes.DOCS,
      },
    ],
  },
  {
    children: [
      {
        name: 'Profile',
        logo: <CgProfile />,
        route: routes.PROFILE,
      },
      {
        name: 'Settings',
        logo: <FiSettings />,
        route: routes.SETTINGS,
      },
    ],
  },
];

function SideNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen w-[20vw] border-r border-gray-800">
      <div className="flex justify-center items-center h-[8vh]">
        <button
          type="button"
          className="flex items-center justify-center m-2 px-2 h-full w-full"
          onClick={() => navigate(routes.DASHBOARD)}
        >
          <img
            src="/logo.png"
            alt="sbg"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold pt-2">{appName}</span>
            <span className="text-white text-xs bg-blue-500 w-max self-end px-1 rounded-lg">
              {semanticVersion}
            </span>
          </div>
        </button>
      </div>

      <div className="flex flex-col border border-gray-800 m-4 rounded-lg h-full justify-between p-2">
        {sections.map(({ name, children }, idx) => {
          return (
            <div key={idx} className="flex flex-col space-y-2">
              <span className="text-sm text-gray-500 px-4">{name}</span>
              {children.map(({ name: childName, route, logo }, index) => {
                return (
                  <Tooltip title="Services" placement="right" key={index}>
                    <Link
                      className={`flex items-center h-8 p-4 mx-2 rounded-lg space-x-2 ${
                        // location.pathname === route && 'bg-red-600'
                        location.pathname.startsWith(route) &&
                        'bg-[#192A42] text-[#1673fe]'
                      }`}
                      to={route}
                    >
                      <span>{logo}</span>
                      <span>{childName}</span>
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
