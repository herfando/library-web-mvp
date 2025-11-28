import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Login from '../components/container/user/01_Login';
import Register from '../components/container/user/02_Register';
import Home from '../components/container/user/03_Home';
import Navbar from '../components/container/user/00_Navbar';
import Footer from '../components/container/user/00_Footer';
import Detail from '../components/container/user/04_DetailBook';
import Category from '../components/container/user/05_Category';
import BookByAuthor from '../components/container/user/06_BookByAuthor';
import Cart from '../components/container/user/07_Cart';
import Checkout from '../components/container/user/08_Checkout';
import { Toaster } from 'react-hot-toast';

// Layout untuk login/register
const AuthLayout = () => (
  <div>
    <Toaster position='top-right' />
    <main>
      <Outlet />
    </main>
  </div>
);

// Layout untuk setelah register/login
const MainLayout = () => {
  // Ambil user dari localStorage register
  const storedRegisterUser = localStorage.getItem('registerUser');
  const user = storedRegisterUser ? JSON.parse(storedRegisterUser)?.user : null;

  // Jika tidak ada user, redirect ke login
  if (!user) return <Navigate to='/' replace />;

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Layout login */}
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        {/* Layout setelah register */}
        <Route element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/author/:id' element={<BookByAuthor />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}
