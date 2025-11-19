import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';

export default function Checkout() {
  return (
    <section className='bg-accent-green mx-auto mt-16 h-auto max-w-1034 pr-16 pl-16 md:mt-48'>
      <h2 className='md:text-36 text-24 mb-16 font-bold md:mb-32'>Checkout</h2>
      <div className='flex flex-wrap space-x-58'>
        {/* 1. Start Left section User information */}
        <div>
          {/* start user information  */}
          <div className='w-466 space-y-16'>
            <h3 className='md:text-xs-lh text-lg font-bold'>
              User Information
            </h3>
            {/* Name */}
            <div className='flex w-full justify-between bg-amber-300'>
              <h4 className='md:text-md text-sm font-medium'>Name</h4>
              <span className='md:text-md text-sm font-bold'>Johndoe</span>
            </div>
            {/* Email */}
            <div className='flex w-full justify-between bg-amber-300'>
              <h4 className='md:text-md text-sm font-medium'>Email</h4>
              <span className='md:text-md text-sm font-bold'>
                johndoe@email.com
              </span>
            </div>
            {/* Nomor Handphone */}
            <div className='flex w-full justify-between bg-amber-300'>
              <h4 className='md:text-md text-sm font-medium'>
                Nomor Handphone
              </h4>
              <span className='md:text-md text-sm font-bold'>081234567890</span>
            </div>
            <div className='hidden border-b border-b-[#D5D7DA] md:mb-32 md:block'></div>
          </div>
          {/* end user information  */}
          {/* Booklist */}
          <h3 className='md:text-xs-lh text-lg font-bold'>Book List</h3>
          <div className='mt-16 flex md:mt-24'>
            <img
              src='../../images/08_img dummy6 my cart.png'
              alt='books my cart'
              className='space-y-16'
            />
            {/* card Detail */}
            <div className='ml-12 md:ml-16'>
              <Button className='h-28 w-78 items-center rounded-2xl border-[Neutral/300] bg-white font-bold text-black hover:text-white'>
                <span>Category</span>
              </Button>
              <h3 className='text-md font-bold md:text-lg'>Book Name</h3>
              <h3 className='md:text-md text-sm font-medium'>Author name</h3>
            </div>
          </div>
        </div>
        {/* 1. End Left section User information */}

        {/* 2. Start Right section completer your borrow request */}
        <div className='bg-accent-red p-20'>
          <h2 className='md:text-sm-lh items-center font-bold'>
            Complete Your Borrow Request
          </h2>
          <div className='mt-16 md:mt-24'>
            <p className='text-sm font-bold'>Borrow Date</p>
            <div className='relative mt-2'>
              <Button className='flex h-48 w-full border border-[#D5D7DA] bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]'>
                <input
                  type='text'
                  placeholder='28 Aug 2024'
                  className='text-md my-9 mr-44 ml-16 h-30 w-full font-semibold'
                ></input>
              </Button>
              <Calendar
                size={20}
                className='absolute top-0 right-0 mt-14 mr-14'
              />
            </div>
            <p className='md:text-md mt-16 flex flex-col gap-y-12 text-sm font-bold md:mt-24'>
              Borrow Duration
              {/* 3 days */}
              <div className='flex items-center gap-x-15 md:gap-x-8'>
                <input type='radio' className='h-24 w-24' />
                <span className='md:text-md text-sm font-semibold'>3 Days</span>
              </div>
              {/* 5 days */}
              <div className='flex items-center gap-x-15 md:gap-x-8'>
                <input type='radio' className='h-24 w-24' />
                <span className='md:text-md text-sm font-semibold'>5 Days</span>
              </div>
              {/* 10 days */}
              <div className='flex items-center gap-x-15 md:gap-x-8'>
                <input type='radio' className='h-24 w-24' />
                <span className='md:text-md text-sm font-semibold'>
                  10 Days
                </span>
              </div>
            </p>
          </div>
        </div>
        {/* 2. End Right section completer your borrow request */}
      </div>
    </section>
  );
}
