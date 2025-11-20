import { Star } from 'lucide-react';
import { Button } from '../ui/button';

export default function GiveReview() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#0A0D1280]'>
      <section className='mx-auto my-auto h-479 w-345 rounded-2xl bg-[#FFFFFF] p-24 md:h-518 md:w-439'>
        <p className='md:text-xs-lh text-lg font-bold'>Give Review</p>
        {/* 5 star */}
        <div className='mt-24 flex flex-col items-center justify-center'>
          <h5 className='md:text-md text-sm font-bold'>Give Rating</h5>
          <div className='flex items-center space-x-4 px-3'>
            <Star className='h-[33.39px] w-[34.96px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[33.39px] w-[34.96px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[33.39px] w-[34.96px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[33.39px] w-[34.96px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[33.39px] w-[34.96px] fill-[#FFAB0D] text-[#FFAB0D]' />
          </div>
          <textarea
            className='mt-24 h-235 w-313 border border-[#D5D7DA] md:h-235 md:w-391'
            placeholder='Please share your thoughts about this book'
          ></textarea>
          <Button className='text-md mt-16 h-48 w-full rounded-full font-bold hover:cursor-pointer md:mt-24'>
            Send{' '}
          </Button>
        </div>
      </section>
    </div>
  );
}
