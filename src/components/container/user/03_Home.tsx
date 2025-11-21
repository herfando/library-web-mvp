import { useState } from 'react';
import PaginationBullets from '../../ui/paginationBullets';
import { Star } from 'lucide-react';
import { Button } from '../../ui/button';

export default function Home() {
  // code pagination image
  const images = [
    '/images/02_img dummy1.png',
    '/images/02_img dummy2.png',
    '/images/02_img dummy3.png',
  ];
  const [active, setActive] = useState(0);

  // code click image
  const handleClickImage = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <section className='custom-container h-auto w-full'>
      {/* 1. Banner Highlight */}
      <div
        onClick={handleClickImage}
        className='relative mt-16 inline-block w-full md:mt-48'
      >
        <img
          src={images[active]}
          alt='highlight book'
          className='h-[132.67px] w-full rounded-2xl md:h-441 md:rounded-4xl'
        ></img>
        <div
          className='pointer-events-none absolute inset-0 top-0 left-0 flex flex-col items-center justify-center text-[25px] font-bold text-[#6597E8] md:text-[82.52px]'
          style={{
            textShadow: `
              1px 1px 0 #FFFFFF,
              -1px 1px 0 #FFFFFF,
              1px -1px 0 #FFFFFF,
              -1px -1px 0 #FFFFFF,
              2px 2px 0 #FFFFFF,
              -2px 2px 0 #FFFFFF,
              2px -2px 0 #FFFFFF,
              -2px -2px 0 #FFFFFF,
              3px 3px 0 #FFFFFF,
              -3px 3px 0 #FFFFFF,
              3px -3px 0 #FFFFFF,
              -3px -3px 0 #FFFFFF
            `,
          }}
        >
          Welcome to <span>Booky</span>
        </div>
      </div>
      <PaginationBullets
        total={images.length}
        activeIndex={active}
        onChange={setActive}
      />
      {/* 2. Categories */}
      <div className='mt-24 md:mt-48'>
        <div className='flex h-64 w-162 items-center justify-center rounded-2xl bg-[#E0ECFF]'>
          <img
            src='../../images/03_fiksi.png'
            alt='fiction'
            className='w-51.2 h-51.2'
          />
        </div>
        {/* title categories */}
        <h3 className='text-md font-semibold'>Fiction</h3>
      </div>
      {/* 3. Recommendation */}
      <div className='mt-24 space-x-20 md:mt-48'>
        <h2 className='text-xs-lh mb-20 font-bold md:mb-40 md:text-[36px]'>
          Recommendation
        </h2>
        {/* Book */}
        <img
          src='../../images/04_img dummy2 recommendation.png'
          alt='img dummy'
          className='h-258 w-172 rounded-t-2xl md:h-336 md:w-224'
        />
        <div className='space-y-4 p-16'>
          {/* Book Nama */}
          <p>Book Name</p>
          {/* Author Name */}
          <p>Author name</p>
          {/* Star */}
          <div className='flex space-x-5.5'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <p>4.9</p>
          </div>
        </div>
        {/* Button Load More */}
        <div className='flex items-center justify-center pb-24 md:pb-48'>
          <Button className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:text-white md:h-48 md:w-200'>
            Load more{' '}
          </Button>
        </div>
        <div className='mb-24 border-b border-[#D5D7DA] md:mb-48'></div>
      </div>
      {/* Popular Authors */}
      <div>
        {/* Title */}
        <h2 className='text-xs-lh mb-24 font-bold md:mb-40 md:text-[36px]'>
          Popular Authors
        </h2>
        {/* total author */}
        <div className='mb-116'>
          {/* start card author */}
          <div className='flex h-84 w-361 items-center p-12 md:h-113 md:w-285 md:p-16'>
            {/* image author */}
            <img
              src='../../images/05_img dummy3 author.png'
              alt='author'
              className='h-60 w-60 md:h-81 md:w-81'
            />
            {/* Author name */}
            <div className='ml-16'>
              <p>Author name</p>
              <div className='flex'>
                <img src='../../images/07_img dummy5 books.png' alt='books' />
                <p className='ml-5'>5 books</p>
              </div>
            </div>
          </div>
          {/* end card author */}
        </div>
      </div>
    </section>
  );
}
