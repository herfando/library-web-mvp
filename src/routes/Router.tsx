import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';

import NavbarGuest from '../components/layout/00_NavbarGuest';
import NavbarUser from '../components/layout/00_NavbarUser';
import Footer from '../components/layout/00_Footer';

const Login = lazy(() => import('../pages/user/01_Login'));
const Register = lazy(() => import('../pages/user/02_Register'));
const HomeGuest = lazy(() => import('../pages/user/03_HomeGuest'));
const HomeUser = lazy(() => import('../pages/user/03_Home.User'));
const Detail = lazy(() => import('../pages/user/04_DetailBook'));
const Category = lazy(() => import('../pages/user/05_Category'));
const BookByAuthor = lazy(() => import('../pages/user/06_BookByAuthor'));
const Cart = lazy(() => import('../pages/user/07_Cart'));
const Checkout = lazy(() => import('../pages/user/08_Checkout'));
const Success = lazy(() => import('../pages/user/09_Success'));
const BorrowedList = lazy(() => import('../pages/user/10_BorrowedList'));
const Profile = lazy(() => import('../pages/user/11_Profile'));
const GiveReview = lazy(() => import('../pages/user/12_GiveReview'));
const Reviews = lazy(() => import('../pages/user/12_Reviews'));

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
      <Suspense
        fallback={
          <div className='animate-pulse p-10 text-center'>Loading...</div>
        }
      >
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
      </Suspense>
    </Router>
  );
}
