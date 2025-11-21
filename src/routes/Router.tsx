import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Login from '../components/container/user/01_Login';
import Register from '../components/container/user/02_Register';
import Home from '../components/container/user/03_Home';
import Navbar from '../components/container/user/00_Navbar';
import Footer from '../components/container/user/00_Footer';

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
