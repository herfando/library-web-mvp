import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
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
import Success from '../components/container/user/09_Success';
import BorrowedList from '../components/container/user/10_BorrowedList';
import GiveReview from '../components/container/user/12_GiveReview';
import Reviews from '../components/container/user/12_Reviews';
import Profile from '../components/container/user/11_Profile';

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
const AfterAuthLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/success';

  return (
    <div>
      <NavbarUser />
      <main className='pt-64 md:pt-80'>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

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
          <Route path='/profile' element={<Profile />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/author/:id' element={<BookByAuthor />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success' element={<Success />} />
          <Route path='/borrowed' element={<BorrowedList />} />
          <Route path='/givereview' element={<GiveReview />} />
          <Route path='/reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </Router>
  );
}
