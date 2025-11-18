import { ChevronRight, Star } from 'lucide-react';
import { Button } from '../ui/button';

export default function Detail() {
  return (
    <section className='custom-container mt-16 h-auto w-full bg-amber-300 md:mt-48'>
      {/* 1. Book's link */}
      <div className='mb-16 flex items-center space-x-4 whitespace-nowrap md:mb-24'>
        {/* Home */}
        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          Home
        </a>
        <ChevronRight className='h-16 w-16' />
        {/* Category */}
        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          Category
        </a>
        <ChevronRight className='h-16 w-16' />
        {/* Book's title */}
        <a className='text-sm font-semibold hover:cursor-pointer hover:text-[#1C65DA]'>
          The Psychology of Money
        </a>
      </div>
      {/* 2. Book's detail */}
      {/* Book's image */}
      <div className='flex flex-wrap items-center justify-center space-y-36 space-x-16'>
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
          <h4 className='text-sm font-bold'>Business & Economics</h4>
          <h2 className='text-sm-lh font-bold'>The Psychology of Money</h2>
          <h3 className='mb-4 font-semibold text-[text-neutral-800]'>
            Morgan Housel
          </h3>
          {/* Star */}
          <div className='flex space-x-2 px-3'>
            <Star className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]' />
            <p className='text-md font-bold'>4.9</p>
          </div>
          {/* Page, rating, reviews */}
          <div className='mt-12 flex md:mt-22'>
            {/* Page */}
            <div className='w-94.67 h-60 md:h-66 md:w-102'>
              <p className='text-xs-lh font-bold'>320</p>
              <p className='text-md font-medium'>Page</p>
            </div>
            {/* Rating */}
            <div className='w-94.67 h-60 md:h-66 md:w-102'>
              <p className='text-xs-lh font-bold'>212</p>
              <p className='text-md font-medium'>Rating</p>
            </div>
            {/* Reviews */}
            <div className='w-94.67 h-60 md:h-66 md:w-102'>
              <p className='text-xs-lh font-bold'>179</p>
              <p className='text-md font-medium'>Reviews</p>
            </div>
          </div>
          {/* Description */}
          <div className='mt-16 mb-24 md:mt-20 md:mb-20'>
            <h2 className='text-xl font-bold'>Description</h2>
            <p className='text-md mt-4 font-medium text-[#0A0D12]'>
              The Psychology of Money” explores how emotions, biases, and human
              behavior shape the way we think about money, investing, and
              financial decisions. Morgan Housel shares timeless lessons on
              wealth, greed, and happiness, showing that financial success is
              not about knowledge, but about behavior.
            </p>
          </div>
          {/* Button */}
          <div className='hidden md:flex'>
            <Button className='h-48 w-200 rounded-full bg-white font-bold text-black hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
              Add to Cart
            </Button>
            <Button className='ml-12 h-48 w-200 rounded-full font-bold hover:cursor-pointer hover:bg-[#7FB0FF] hover:text-black'>
              Borrow Book
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
