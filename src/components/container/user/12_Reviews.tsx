import { Button } from '../../ui/button';
import { Search, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Userinteractive from '../../ui/interactiveButton';

type BorrowedItem = {
  id: number;
  image: string;
  title: string;
  author: string;
  category: string;
  quantity: number;
  borrowDate: string;
  returnDate: string;
  duration: number;
};

type Review = {
  bookId: number;
  rating: number;
  comment: string;
  date: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [borrowedList, setBorrowedList] = useState<BorrowedItem[]>([]);

  // take borrowedList
  useEffect(() => {
    const savedBorrowed = localStorage.getItem('borrowedList');
    if (savedBorrowed) {
      setBorrowedList(JSON.parse(savedBorrowed));
    }
  }, []);

  // take reviews
  useEffect(() => {
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  // helper: found book from id
  const getBook = (bookId: number) => borrowedList.find((b) => b.id === bookId);

  return (
    <section className='mx-auto mt-16 mb-48 h-auto max-w-1032 pr-16 pl-16 md:mt-48 md:mb-36'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Userinteractive />
      </div>
      {/* end navigasi 1*/}

      {/* start reviews list + search */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>
        Reviews
      </p>
      <div>
        <div className='relaetive mt-15 flex h-44 w-full items-center rounded-full border border-[#D5D7DA] bg-white hover:bg-white md:mt-24 md:w-544'>
          <input
            type='text'
            placeholder='Search Reviews '
            className='ml-42 text-sm font-medium'
          />
          <Search
            color='#535862'
            width={15}
            height={15}
            className='absolute ml-16'
          />
        </div>

        {/* start reviews LIST */}
        {reviews.map((rev, i) => {
          const book = getBook(rev.bookId);

          if (!book) return null;

          return (
            <div key={i} className='flex w-full flex-col p-20'>
              <div className='md:text-md text-sm font-semibold'>
                {new Date(rev.date).toLocaleString()}
              </div>

              {/* line */}
              <div className='mt-16 w-full border-b border-b-[#D5D7DA] md:mt-20'></div>

              <div className='mt-16 flex md:mt-24'>
                <img
                  src={book.image}
                  alt={book.title}
                  className='h-138 w-92 space-y-16'
                />
                <div className='ml-12 flex flex-col justify-between gap-y-4 md:ml-16'>
                  <Button className='h-28 w-100 items-center rounded-2xl border border-[#D5D7DA] bg-white font-bold text-black hover:text-white'>
                    <span>{book.category}</span>
                  </Button>
                  <p className='text-md font-bold md:text-lg'>{book.title}</p>
                  <p className='md:text-md text-sm font-medium'>
                    {book.author}
                  </p>
                  <p className='md:text-md text-sm font-medium'>
                    Quantity: {book.quantity}
                  </p>
                </div>
              </div>

              {/* line */}
              <div className='mt-16 w-full border-b border-b-[#D5D7DA] md:mt-20'></div>

              {/* stars */}
              <div className='mt-16 flex items-center space-x-4 px-3'>
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className='h-[16.35px] w-[17.12px]'
                    fill={idx < rev.rating ? '#FFAB0D' : 'none'}
                    color={idx < rev.rating ? '#FFAB0D' : '#D5D7DA'}
                  />
                ))}
              </div>

              {/* comment */}
              <p className='md:text-md mt-8 text-sm font-semibold'>
                {rev.comment}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
