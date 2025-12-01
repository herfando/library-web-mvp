import { ChevronRight, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookByIdQuery, useBooksQuery } from '../../query/hooks/01_useBooks';
import type { Book } from '../../query/types/01_booksTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setCheckoutItems } from '../../redux/slices/cartSlice';
import type { RootState } from '../../redux/store';

export default function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkoutItems = useSelector(
    (state: RootState) => state.cart.checkoutItems
  );

  // ========================================
  // GET BOOK ID FROM URL
  // ========================================
  const { id } = useParams();
  const bookId = Number(id);

  // ========================================
  // FETCH DATA
  // ========================================
  const { data: book, isLoading, error } = useBookByIdQuery(bookId);
  const { data: allBooks } = useBooksQuery();

  // ========================================
  // fix undefined error
  // ========================================
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;
  if (!book) return <p>Book not found</p>;

  // ========================================
  // BUILD CART ITEM
  // ========================================
  const buildCartItem = () => ({
    id: book.id,
    title: book.title,
    author: book.Author?.name || '',
    category: book.Category?.name || '',
    image: book.coverImage ?? '',
    price: book.price,
    quantity: 1,
  });

  // ========================================
  // ADD TO CART
  // ========================================
  const handleAddCart = () => {
    const item = buildCartItem();
    dispatch(addToCart(item));
  };

  // ========================================
  // BORROW (NO OVERWRITE)
  // ========================================
  const handleBorrowBook = () => {
    const item = buildCartItem();

    // input to cart
    dispatch(addToCart(item));

    // Check if there is in checkout
    const exists = checkoutItems.some((i) => i.id === item.id);

    const updatedCheckout = exists ? checkoutItems : [...checkoutItems, item];

    dispatch(setCheckoutItems(updatedCheckout));
    localStorage.setItem('checkoutItems', JSON.stringify(updatedCheckout));

    navigate('/checkout');
  };

  // ========================================
  // RELATED BOOKS
  // ========================================
  const relatedBooks: Book[] = (allBooks || []).filter(
    (b) => b.id !== book.id && b.categoryId === book.categoryId
  );

  return (
    <section className='custom-container mt-16 h-auto w-full md:mt-48'>
      {/* 1. Book's link */}
      <div className='mb-16 flex items-center space-x-4 whitespace-nowrap md:mb-24'>
        <a
          onClick={() => navigate('/')}
          className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'
        >
          Home
        </a>

        <ChevronRight className='h-16 w-16' />

        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          {book.Category?.name || 'Category'}
        </a>

        <ChevronRight className='h-16 w-16' />

        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          {book.title}
        </a>
      </div>

      {/* 2. Book's detail */}
      <div className='flex flex-wrap items-center justify-between space-y-36 space-x-16 lg:space-y-0'>
        {/* Book Image */}
        <div>
          <div className='relative flex h-498 w-337 bg-[#E9EAEB]'>
            <img
              src={book.coverImage || '/placeholder.png'}
              alt={book.title}
              className='absolute top-1/2 left-1/2 h-482 w-321 -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        </div>

        {/* Detail */}
        <div className='mr-14.5 ml-14.5 h-auto w-full self-center md:mr-0 md:ml-0 md:h-462 md:w-827'>
          <h4 className='text-sm font-bold'>{book.Category?.name}</h4>

          <h2 className='md:text-sm-lh text-xs-lh font-bold'>{book.title}</h2>

          <h3 className='md:text-md mb-4 text-sm font-semibold text-[#0A0D12]'>
            {book.Author?.name}
          </h3>

          {/* Rating */}
          <div className='flex items-center space-x-2 px-3'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <p className='text-md self-center font-bold'>
              {book.rating.toFixed(1)}
            </p>
          </div>

          {/* Info */}
          <div className='relative mt-12 flex space-x-20 md:mt-22'>
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>
                {book.totalCopies}
              </p>
              <p className='md:text-md text-sm font-medium'>Page</p>
            </div>

            <div className='border-r border-r-[#D5D7DA]'></div>

            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>
                {book.borrowCount}
              </p>
              <p className='md:text-md text-sm font-medium'>Borrowed</p>
            </div>

            <div className='border-r border-r-[#D5D7DA]'></div>

            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>
                {book.Review?.length || 0}
              </p>
              <p className='md:text-md text-sm font-medium'>Reviews</p>
            </div>

            <div className='absolute top-[140%] w-full border-b border-b-[#D5D7DA] md:w-3/4'></div>
          </div>

          {/* Description */}
          <div className='mt-32 mb-24 md:mt-40 md:mb-20'>
            <h2 className='text-xl font-bold'>Description</h2>

            <p className='md:text-md mt-4 text-sm font-medium text-[#0A0D12]'>
              {book.description}
            </p>
          </div>

          {/* Buttons */}
          <div className='hidden md:flex'>
            <Button
              onClick={handleAddCart}
              className='h-48 w-200 rounded-full border border-[#D5D7DA] bg-white font-bold text-black hover:bg-gray-700 hover:text-white'
            >
              Add to Cart
            </Button>

            <Button
              onClick={handleBorrowBook}
              className='ml-12 h-48 w-200 rounded-full font-bold hover:bg-[#7FB0FF]'
            >
              Borrow Book
            </Button>

            <div className='ml-12 flex h-40 w-40 items-center justify-center self-center rounded-full border border-[#D5D7DA]'>
              <img src='../../icons/07_Icon share.svg' alt='icon share' />
            </div>
          </div>
        </div>

        <div className='mt-0 w-full border-b-2 text-[#D5D7DA] md:mt-100'></div>
      </div>

      {/* Reviews */}
      <div className='mt-64 h-auto w-full'>
        <h2 className='text-xs-lh mb-4 font-bold md:mb-12 md:text-[36px]'>
          Review
        </h2>

        <div className='flex items-center space-x-4 px-3'>
          <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
          <p className='text-md font-bold md:text-xl'>
            {book.rating.toFixed(1)} ({book.Review?.length || 0} Ulasan)
          </p>
        </div>

        <div className='mb-116'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {book.Review?.map((rev) => (
              <div key={rev.id} className='flex flex-col'>
                <div className='flex h-84 w-361 items-center p-12 md:h-113 md:w-285 md:p-16'>
                  <img
                    src='../../images/10_img dummy3 author.png'
                    alt={rev.User.name}
                    className='h-58 w-58 md:h-64 md:w-64'
                  />

                  <div className='ml-16'>
                    <p className='text-sm font-bold md:text-lg'>
                      {rev.User.name}
                    </p>

                    <p className='md:text-md flex text-sm font-medium whitespace-nowrap'>
                      {new Date(rev.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                      ,{' '}
                      {new Date(rev.createdAt).toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>

                <div className='mt-16 flex items-center space-x-4 px-3'>
                  {Array.from({ length: rev.star }).map((_, i) => (
                    <Star
                      key={i}
                      className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]'
                    />
                  ))}
                </div>

                <p className='text-md mt-8 font-semibold'>{rev.comment}</p>
              </div>
            ))}
          </div>

          <div className='flex items-center justify-center pb-24 md:pb-48'>
            <Button className='md:text-md mt-16 h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:text-white md:h-48 md:w-200'>
              Load more
            </Button>
          </div>
        </div>

        <div className='mt-64 w-full border-b border-[#D5D7DA]'></div>
      </div>

      {/* Related Books */}
      <div className='text-xs-lh mt-24 mb-20 font-bold md:mt-64 md:mb-40 md:text-[36px]'>
        Related Books
      </div>

      <div className='flex flex-wrap justify-between gap-4 hover:cursor-pointer'>
        {relatedBooks.slice(0, 5).map((b: Book) => (
          <div
            key={b.id}
            className='h-auto w-172 md:mb-118 md:h-468 md:w-224 md:space-y-16 md:space-x-16'
            onClick={() => navigate(`/detail/${b.id}`)}
          >
            <img
              className='h-258 w-172 rounded-t-2xl md:h-336 md:w-224'
              src={b.coverImage || '/placeholder.png'}
              alt={b.title}
            />

            <div className='space-y-4 p-12 md:p-16'>
              <h4 className='text-sm font-bold md:text-lg'>{b.title}</h4>

              <p className='md:text-md text-sm font-medium'>{b.Author?.name}</p>

              <div className='flex items-center space-x-3'>
                <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
                <span className='md:text-md text-sm font-semibold'>
                  {b.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Floating Buttons */}
        <div className='fixed right-0 bottom-0 left-0 z-50 flex h-72 w-full flex-1/3 items-center justify-between rounded-xl bg-white p-4 pr-16 pl-16 shadow-lg md:hidden'>
          <Button
            onClick={handleAddCart}
            className='h-48 basis-[40%] rounded-full border border-[#D5D7DA] bg-white font-bold text-black hover:bg-gray-700 hover:text-white'
          >
            Add to Cart
          </Button>

          <Button
            onClick={handleBorrowBook}
            className='ml-12 h-48 basis-[40%] rounded-full font-bold hover:bg-[#7FB0FF]'
          >
            Borrow Book
          </Button>

          <div className='ml-12 flex h-40 w-40 items-center justify-center self-center rounded-full border border-[#D5D7DA]'>
            <img src='../../icons/07_Icon share.svg' alt='icon share' />
          </div>
        </div>
      </div>
    </section>
  );
}
