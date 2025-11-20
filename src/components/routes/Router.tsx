import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Login from '../container/user/Login';
import Register from '../container/user/Register';
import Home from '../container/user/Home';
import Navbar from '../container/user/Navbar';
import Footer from '../container/user/Footer';

const AuthLayout = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

const MainLayout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Layout login */}
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        {/* Layout setelah login */}
        <Route element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
