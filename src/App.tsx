import './index.css';
// import AppRoutes from './components/routes/Router';
import Navbar from './components/container/Navbar';
// import Home from './components/container/Home';
// import Category from './components/container/Category';
// import Detail from './components/container/Detail';
// import BookByAuthor from './components/container/Book_byAuthor';
// import Cart from './components/container/Cart';
// import Checkout from './components/container/Checkout';
// import Success from './components/container/Succsess';
// import BorrowedList from './components/container/BorrowedList';
import Profile from './components/container/Profile';
import Footer from './components/container/Footer';

function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      <Navbar />
      {/* <Home /> */}
      {/* <Detail /> */}
      {/* <Category /> */}
      {/* <BookByAuthor /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Success /> */}
      {/* <BorrowedList /> */}
      <Profile />
      <Footer />
    </>
  );
}

export default App;
