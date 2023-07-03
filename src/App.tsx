import routes from 'config/routes';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
