import { Star } from 'lucide-react';
import { Button } from '../../ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GiveReview({ onClose }: { onClose?: () => void }) {
  //#region - state rating
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState(''); // <-- controlled textarea
  const navigate = useNavigate();

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSend = () => {
    // ambil existing dari localStorage
    const existing = JSON.parse(localStorage.getItem('reviews') || '[]');

    const newReview = {
      rating,
      comment,
      date: new Date().toISOString(),
    };

    existing.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(existing));

    // jika ada onClose, panggil dulu untuk menutup modal (opsional)
    onClose && onClose();

    // lalu navigate ke halaman reviews
    navigate('/reviews');
  };

  //#endregion

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#0A0D1280]'>
      <section className='mx-auto my-auto h-479 w-345 rounded-2xl bg-[#FFFFFF] p-24 md:h-518 md:w-439'>
        <p className='md:text-xs-lh text-lg font-bold'>Give Review</p>
        {/* 5 star */}
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
          onClick={() => onClose && onClose()}
          className='absolute top-4 right-4 text-black'
        >
          <X />
        </Button>
      </section>
    </div>
  );
}
