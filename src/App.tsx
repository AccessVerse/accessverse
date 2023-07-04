import routes from 'config/routes';
import Blog from 'pages/Blog';
import Dashboard from 'pages/Dashboard';
import Docs from 'pages/Docs';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import Settings from 'pages/Settings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.DASHBOARD} element={<Dashboard />} />
        <Route path={routes.PROFILE} element={<Profile />} />
        <Route path={routes.SETTINGS} element={<Settings />} />
        <Route path={routes.BLOG} element={<Blog />} />
        <Route path={routes.DOCS} element={<Docs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
