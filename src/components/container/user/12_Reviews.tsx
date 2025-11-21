import { Button } from '../../ui/button';
import { Search, Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section className='mx-auto mt-16 mb-48 h-auto max-w-1032 pr-16 pl-16 md:mt-48 md:mb-36'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Profile
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Borrowed List
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Reviews
        </Button>
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
        {/* end reviews list + search */}

        {/* start reviews Booklist */}
        <div className='flex w-full flex-col p-20'>
          <div className='md:text-md text-sm font-semibold'>
            25 August 2025, 13:38
          </div>
          {/* line bottom */}
          <div className='mt-16 w-full border-b border-b-[#D5D7DA] md:mt-20'></div>
          <div className='mt-16 flex md:mt-24'>
            <img
              src='../../images/08_img dummy6 my cart.png'
              alt='books my cart'
              className='space-y-16'
            />
            {/* card Detail */}
            <div className='ml-12 flex flex-col justify-center gap-y-4 md:ml-16'>
              <Button className='h-28 w-78 items-center rounded-2xl border-[Neutral/300] bg-white font-bold text-black hover:text-white'>
                <span>Category</span>
              </Button>
              <h3 className='text-md font-bold md:text-lg'>Book Name</h3>
              <h3 className='md:text-md text-sm font-medium'>Author name</h3>
            </div>
          </div>
          {/* line bottom */}
          <div className='mt-16 w-full border-b border-b-[#D5D7DA] md:mt-20'></div>
          {/* 5 star */}
          <div className='mt-16 flex items-center space-x-4 px-3'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
          </div>

          {/* lorem paragraf */}
          <p className='md:text-md mt-8 text-sm font-semibold'>
            Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam
            viverra nunc sed facilisis. Integer tristique nullam morbi mauris
            ante.
          </p>
        </div>
        {/* end reviews Booklist */}
      </div>
    </section>
  );
}
