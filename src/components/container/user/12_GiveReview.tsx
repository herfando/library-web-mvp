import { Star } from 'lucide-react';
import { Button } from '../../ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { type BorrowedItem } from './10_BorrowedList'; // pakai named import, bukan default

export default function GiveReview({
  book,
  onClose,
}: {
  book?: BorrowedItem;
  onClose?: () => void;
}) {
  //#region - state rating
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // ambil book dari props atau location.state
  const selectedBook = book || (location.state?.book as BorrowedItem);

  // handleClose bisa dari props atau fallback ke navigate(-1)
  const handleClose = onClose || (() => navigate(-1));

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSend = () => {
    if (!selectedBook) return;

    const existing = JSON.parse(localStorage.getItem('reviews') || '[]');

    const newReview = {
      bookId: selectedBook.id,
      rating,
      comment,
      date: new Date().toISOString(),
    };

    existing.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(existing));

    handleClose();
    navigate('/reviews');
  };
  //#endregion

  if (!selectedBook) return <div>No book selected</div>;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#0A0D1280]'>
      <section className='mx-auto my-auto h-479 w-345 rounded-2xl bg-[#FFFFFF] p-24 md:h-518 md:w-439'>
        <p className='md:text-xs-lh text-lg font-bold'>Give Review</p>
        <div className='mt-24 flex flex-col items-center justify-center'>
          <h5 className='md:text-md text-sm font-bold'>Give Rating</h5>
          <div className='flex items-center space-x-4 px-3'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                onClick={() => handleStarClick(i)}
                className='h-[33.39px] w-[34.96px] cursor-pointer'
                fill={i < rating ? '#FFAB0D' : 'none'}
                color={i < rating ? '#FFAB0D' : '#D5D7DA'}
              />
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='mt-24 h-235 w-313 border border-[#D5D7DA] px-12 pt-8 md:h-235 md:w-391'
            placeholder='Please share your thoughts about this book'
          ></textarea>
          <Button
            onClick={handleSend}
            className='text-md mt-16 h-48 w-full rounded-full font-bold hover:cursor-pointer md:mt-24'
          >
            Send{' '}
          </Button>
        </div>
        <Button
          onClick={handleClose}
          className='absolute top-4 right-4 text-black'
        >
          <X />
        </Button>
      </section>
    </div>
  );
}
