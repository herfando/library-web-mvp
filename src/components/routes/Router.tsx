import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Login from '../container/Login';
import Register from '../container/Register';
import Home from '../container/Home';
import Navbar from '../container/Navbar';
import Footer from '../container/Footer';

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
