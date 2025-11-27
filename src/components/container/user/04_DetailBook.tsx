import { ChevronRight, Star } from 'lucide-react';
import { Button } from '../../ui/button';
import { useParams } from 'react-router-dom';
import {
  useBookByIdQuery,
  useBooksQuery,
} from '../../../query/hooks/01_useBooks';
import type { Book } from '../../../query/types/01_booksTypes';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';

export default function Detail() {
  //#region - Add to Cart
  const handleAddCart = () => {
    if (!book) return;

    dispatch(
      addToCart({
        id: book.id,
        title: book.title,
        author: book.Author?.name || '',
        category: book.Category?.name || '',
        image: book.coverImage ?? '',
        price: book.price,
        quantity: 1,
      })
    );
  };
  //#endregion

  //#region - Detail Query
  const { id } = useParams();
  const bookId = Number(id);

  const { data: book, isLoading, error } = useBookByIdQuery(bookId);
  const { data: allBooks } = useBooksQuery();

  const dispatch = useDispatch();
  //#endregion

  //#region - Related Books
  const relatedBooks: Book[] = (allBooks || []).filter(
    (b) => book && b.id !== book.id
  );

  //#endregion
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <section className='custom-container mt-16 h-auto w-full md:mt-48'>
      {/* 1. Book's link */}
      <div className='mb-16 flex items-center space-x-4 whitespace-nowrap md:mb-24'>
        {/* Home */}
        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          Home
        </a>
        <ChevronRight className='h-16 w-16' />
        {/* Category */}
        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          {book.Category?.name || 'Category'}
        </a>
        <ChevronRight className='h-16 w-16' />
        {/* Book's title */}
        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          {book.title}
        </a>
      </div>
      {/* 2. Book's detail */}
      {/* Book's image */}
      <div className='flex flex-wrap items-center justify-between space-y-36 space-x-16 lg:space-y-0'>
        <div>
          {/* outline */}
          <div className='relative flex h-498 w-337 bg-[#E9EAEB]'>
            {/* book's */}
            <div>
              <img
                src={book.coverImage || '/placeholder.png'}
                alt={book.title}
                className='absolute top-1/2 left-1/2 h-482 w-321 -translate-x-1/2 -translate-y-1/2'
              />
            </div>
          </div>
        </div>
        {/* Detail */}
        <div className='mr-14.5 ml-14.5 h-auto w-full self-center md:mr-0 md:ml-0 md:h-462 md:w-827'>
          <h4 className='text-sm font-bold'>{book.Category?.name}</h4>
          <h2 className='md:text-sm-lh text-xs-lh font-bold'>{book.title}</h2>
          <h3 className='md:text-md mb-4 text-sm font-semibold text-[text-neutral-800]'>
            {book.Author?.name}
          </h3>
          {/* Star */}
          <div className='flex items-center space-x-2 px-3'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <p className='text-md self-center font-bold'>
              {book.rating.toFixed(1)}
            </p>
          </div>
          {/* Page, rating, reviews */}
          <div className='relative mt-12 flex space-x-20 md:mt-22'>
            {/* Page */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>
                {book.totalCopies}
              </p>
              <p className='md:text-md text-sm font-medium'>Page</p>
            </div>
            {/* line samping */}
            <div className='border-r border-r-[#D5D7DA]'></div>
            {/* Rating */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>
                {book.borrowCount}
              </p>
              <p className='md:text-md text-sm font-medium'>Borrowed</p>
            </div>
            {/* line samping */}
            <div className='border-r border-r-[#D5D7DA]'></div>
            {/* Reviews */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>
                {book.Review?.length || 0}
              </p>
              <p className='md:text-md text-sm font-medium'>Reviews</p>
            </div>
            {/* line bawah */}
            <div className='absolute top-[140%] w-full border-b border-b-[#D5D7DA] md:w-3/4'></div>
          </div>
          {/* Description */}
          <div className='mt-32 mb-24 md:mt-40 md:mb-20'>
            <h2 className='text-xl font-bold'>Description</h2>
            <p className='md:text-md mt-4 text-sm font-medium text-[#0A0D12]'>
              {book.description}
            </p>
          </div>
          {/* Button */}
          <div className='hidden md:flex'>
            <Button
              onClick={handleAddCart}
              className='h-48 w-200 rounded-full bg-white font-bold text-black hover:cursor-pointer hover:bg-gray-700 hover:text-white'
            >
              Add to Cart
            </Button>
            <Button className='ml-12 h-48 w-200 rounded-full font-bold hover:cursor-pointer hover:bg-[#7FB0FF] hover:text-black'>
              Borrow Book
            </Button>
            <div className='ml-12 flex h-40 w-40 items-center justify-between self-center rounded-full border border-[#D5D7DA]'>
              <img src='../../icons/07_Icon share.svg' alt='icon share' />
            </div>{' '}
          </div>
        </div>
        {/* Line buttom */}
        <div className='mt-64 w-full border-b-2 text-[#D5D7DA]'></div>
      </div>

      {/* 3. Review */}
      <div className='mt-64 h-auto w-full'>
        <h2 className='text-xs-lh mb-4 font-bold md:mb-12 md:text-[36px]'>
          Review
        </h2>
        {/* Star */}
        <div className='flex items-center space-x-4 px-3'>
          <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
          <p className='text-md font-bold md:text-xl'>
            {' '}
            {book.rating.toFixed(1)} ({book.Review?.length || 0} Ulasan)
          </p>
        </div>
        {/* total reviewer */}
        <div className='mb-116'>
          {/* card reviewer */}
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {book.Review?.map((rev) => (
              <div key={rev.id} className='flex flex-col'>
                <div className='flex h-84 w-361 items-center p-12 md:h-113 md:w-285 md:p-16'>
                  {/* image reviewer */}
                  <img
                    src='../../images/10_img dummy3 author.png'
                    alt={rev.User.name}
                    className='h-58 w-58 md:h-64 md:w-64'
                  />
                  {/* reviewer name */}
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
                {/* 5 stars */}
                <div className='mt-16 flex items-center space-x-4 px-3'>
                  {Array.from({ length: rev.star }).map((_, i) => (
                    <Star
                      key={i}
                      className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]'
                    />
                  ))}
                </div>
                {/* detail review */}
                <p className='text-md mt-8 font-semibold'>{rev.comment}</p>
              </div>
            ))}
          </div>

          {/* Button Load More */}
          <div className='flex items-center justify-between pb-24 md:pb-48'>
            <Button className='md:text-md mt-16 h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:text-white md:h-48 md:w-200'>
              Load more{' '}
            </Button>
          </div>
        </div>
        {/* line */}
        <div className='mt-64 w-full border-b border-[#D5D7DA]'></div>
      </div>

      {/* Start Related Books */}
      <div className='text-xs-lh mt-24 mb-20 font-bold md:mt-64 md:mb-40 md:text-[36px]'>
        Related Books
      </div>
      {/* Card Book's detail */}
      <div className='flex flex-wrap justify-between gap-4'>
        {relatedBooks.slice(0, 5).map((b: Book) => (
          <div
            key={b.id}
            className='h-auto w-172 md:mb-118 md:h-468 md:w-224 md:space-y-16 md:space-x-16'
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
                <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />{' '}
                <span className='md:text-md text-sm font-semibold'>
                  {b.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Related books */}
    </section>
  );
}
