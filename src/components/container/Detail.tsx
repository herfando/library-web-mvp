import { ChevronRight, Star, Stars } from 'lucide-react';
import { Button } from '../ui/button';

export default function Detail() {
  return (
    <section className='custom-container mt-16 h-auto w-full md:mt-48'>
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
      <div className='flex flex-wrap items-center justify-center space-y-36 space-x-16 lg:space-y-0'>
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
        <div className='h-462 w-827 self-center'>
          <h4 className='text-sm font-bold'>Business & Economics</h4>
          <h2 className='md:text-sm-lh text-xs-lh font-bold'>
            The Psychology of Money
          </h2>
          <h3 className='md:text-md mb-4 text-sm font-semibold text-[text-neutral-800]'>
            Morgan Housel
          </h3>
          {/* Star */}
          <div className='flex items-center space-x-2 px-3'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <p className='text-md self-center font-bold'>4.9</p>
          </div>
          {/* Page, rating, reviews */}
          <div className='relative mt-12 flex md:mt-22'>
            {/* Page */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>320</p>
              <p className='md:text-md text-sm font-medium'>Page</p>
            </div>
            {/* Rating */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>212</p>
              <p className='md:text-md text-sm font-medium'>Rating</p>
            </div>
            {/* Reviews */}
            <div className='h-60 w-[94.67px] md:mb-20 md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>179</p>
              <p className='md:text-md text-sm font-medium'>Reviews</p>
            </div>
            {/* line bawah */}
            <div className='absolute bottom-0 w-full border-b border-b-[#D5D7DA] md:w-3/4'></div>
          </div>
          {/* Description */}
          <div className='mt-16 mb-24 md:mt-20 md:mb-20'>
            <h2 className='text-xl font-bold'>Description</h2>
            <p className='md:text-md mt-4 text-sm font-medium text-[#0A0D12]'>
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
        {/* Line buttom */}
        <div className='mt-64 w-full border-b-2 text-[#D5D7DA]'></div>
      </div>
      {/* 3. Review */}
      <div className='mt-64 h-822 w-full'>
        <h2 className='text-xs-lh mb-4 font-bold md:mb-12 md:text-[36px]'>
          Review
        </h2>
        {/* Star */}
        <div className='flex items-center space-x-4 px-3'>
          <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
          <p className='text-md font-bold md:text-xl'>4.9 (24 Ulasan)</p>
        </div>
        {/* total reviewer */}
        <div className='mb-116'>
          {/* card reviewer */}
          <div className='flex h-84 w-361 items-center p-12 md:h-113 md:w-285 md:p-16'>
            {/* image reviewer */}
            <img
              src='../../images/05_img dummy3 author.png'
              alt='reviewer'
              className='h-58 w-58 md:h-64 md:w-64'
            />
            {/* reviewer name */}
            <div className='ml-16'>
              <p className='text-sm font-bold md:text-lg'>John Doe</p>
              <p className='md:text-md flex text-sm font-medium whitespace-nowrap'>
                25 August 2025, 13:38
              </p>
            </div>
          </div>
          {/* 5 stars */}
          <div className='mt-16 flex items-center space-x-4 px-3'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
          </div>
          {/* detail review */}
          <p className='text-md mt-8 font-semibold'>
            Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam
            viverra nunc sed facilisis. Integer tristique nullam morbi mauris
            ante.
          </p>
        </div>

        {/* Button Load More */}
        <div className='flex items-center justify-center pb-24 md:pb-48'>
          <Button className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:text-white md:h-48 md:w-200'>
            Load more{' '}
          </Button>
        </div>
      </div>
      {/* line */}
      <div className='mt-64 w-full border-b border-[#D5D7DA]'></div>
      {/* Related Books */}
      <div className='mt-24 mb-20 text-[24px] font-bold md:mt-64 md:mb-40 md:text-[36px]'>
        Related Books
      </div>
      {/* Card Book's detail */}
      <div className='h-370 w-172 md:mb-118 md:h-468 md:w-224 md:space-y-16 md:space-x-16'>
        <img
          className='h-258 w-172 rounded-t-2xl md:h-336 md:w-224'
          src='../../images/04_img dummy2 recommendation.png'
          alt='related books'
        />
        <div className='space-y-4 p-12 md:p-16'>
          <h4 className='text-sm font-bold md:text-lg'>Book Name</h4>
          <p className='md:text-md text-sm font-medium'>Author name</p>
          <div className='flex items-center space-x-3'>
            <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />{' '}
            <span className='md:text-md text-sm font-semibold'>4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
