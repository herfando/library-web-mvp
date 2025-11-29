import { Check } from 'lucide-react';
import { Button } from '../../ui/button';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  const goToBorrowedList = () => {
    navigate('/borrowed');
  };

  const [returnDate, setReturnDate] = useState<dayjs.Dayjs | null>(null);

  useEffect(() => {
    const savedReturn = localStorage.getItem('returnDate');
    if (savedReturn) {
      setReturnDate(dayjs(savedReturn));
    }
  }, []);
  return (
    <div className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center'>
      <motion.section
        className='flex h-auto w-full max-w-686 flex-col items-center justify-center'
        animate={{
          y: [0, 30, 0, 30, 0],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <div className='flex h-[142.38px] w-[142.38px] items-center justify-center'>
          <div className='flex h-[82.81px] w-[82.81px] items-center justify-center rounded-full bg-[#1C65DA]'>
            <Check className='h-[50.64px] w-[50.64px] text-[#E9EAEB]' />
          </div>
        </div>
        <h2 className='md:text-sm-lh mt-24 text-xl font-bold md:mt-32'>
          Borrowing Successful!
        </h2>
        <p className='md:text-md mt-8 text-center text-sm font-medium'>
          Your book has been successfully borrowed. Please return it by
          <span className='ml-4 font-bold text-[#EE1D52]'>
            {returnDate ? returnDate.format('DD MMM YYYY') : '...'}
          </span>
        </p>
        <Button
          onClick={goToBorrowedList}
          className='text-md mt-24 h-48 w-286 rounded-full font-bold hover:cursor-pointer md:mt-32'
        >
          See Borrowed List{' '}
        </Button>
      </motion.section>
    </div>
  );
}
