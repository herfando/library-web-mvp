import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Login from '../components/container/user/01_Login';
import Register from '../components/container/user/02_Register';
import HomeGuest from '../components/container/user/03_HomeGuest';
import HomeUser from '../components/container/user/03_Home.User';
import NavbarGuest from '../components/container/user/00_NavbarGuest';
import NavbarUser from '../components/container/user/00_NavbarUser';
import Footer from '../components/container/user/00_Footer';
import Detail from '../components/container/user/04_DetailBook';
import Category from '../components/container/user/05_Category';
import BookByAuthor from '../components/container/user/06_BookByAuthor';
import Cart from '../components/container/user/07_Cart';
import Checkout from '../components/container/user/08_Checkout';
import { Toaster } from 'react-hot-toast';

// Before Auth
const BeforeAuthLayout = () => (
  <div>
    <NavbarGuest />
    <main className='pt-64 md:pt-80'>
      <div>
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

// Auth
const AuthLayout = () => (
  <div>
    <Toaster position='top-right' />
    <main>
      <Outlet />
    </main>
  </div>
);

// After Auth
const AfterAuthLayout = () => (
  <div>
    <NavbarUser />
    <main className='pt-64 md:pt-80'>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Before Auth */}
        <Route element={<BeforeAuthLayout />}>
          <Route path='/' element={<HomeGuest />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        {/* After Auth */}
        <Route element={<AfterAuthLayout />}>
          <Route path='/home' element={<HomeUser />} />
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
