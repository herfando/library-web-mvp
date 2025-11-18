import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <section className='custom-container mt-16 h-auto w-full bg-amber-300 md:mt-48'>
      {/* 1. Book's link */}
      <div className='mb-16 flex items-center space-x-4 md:mb-24'>
        {/* Home */}
        <Link
          to='#'
          className='font-semibold hover:cursor-pointer hover:text-[#1C65DA] md:text-sm'
        >
          Home
        </Link>
        <ChevronRight className='h-16 w-16' />
        {/* Category */}
        <Link
          to='#'
          className='font-semibold hover:cursor-pointer hover:text-[#1C65DA] md:text-sm'
        >
          Category
        </Link>
        <ChevronRight className='h-16 w-16' />
        {/* Book's title */}
        <Link
          to='#'
          className='font-semibold hover:cursor-pointer hover:text-[#1C65DA] md:text-sm'
        >
          The Psychology of Money
        </Link>
      </div>
      {/* 2. Book's detail */}
      {/* Book's image */}
      <div className='flex space-x-16'>
        <div>
          {/* outline */}
          <div className='relative flex h-498 w-337 bg-[#E9EAEB]'>
            {/* book's */}
            <div>
              <img
                src='../../images/06_img dummy4 book detail.png'
                alt='book title'
                className='absolute top-1/2 left-1/2 h-482 w-321 -translate-x-1/2 -translate-y-1/2'
              />
            </div>
          </div>
        </div>
        {/* Detail */}
        <div className='bg-accent-green h-462 w-827 self-center'>
          <h4>Business & Economics</h4>
          <h2>The Psychology of Money</h2>
        </div>
      </div>
    </section>
  );
}
