import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Login from '../container/Login';
import Register from '../container/Register';

const MainLayout = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}
