import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '../../ui/button';

export default function Detail() {
  return (
    <section className='custom-container mt-16 h-auto w-full md:mt-48'>
      <div className='text-sm-lh mb-32 flex items-center gap-x-12 font-bold'>
        <ArrowLeft size={32} />
        <div>Preview Book</div>
      </div>
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
        <div className='flex h-462 w-827 flex-col justify-between self-center'>
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
          <div className='relative mt-12 flex space-x-20 md:mt-22'>
            {/* Page */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>320</p>
              <p className='md:text-md text-sm font-medium'>Page</p>
            </div>
            {/* line samping */}
            <div className='border-r border-r-[#D5D7DA]'></div>
            {/* Rating */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>212</p>
              <p className='md:text-md text-sm font-medium'>Rating</p>
            </div>
            {/* line samping */}
            <div className='border-r border-r-[#D5D7DA]'></div>
            {/* Reviews */}
            <div className='h-60 w-[94.67px] md:h-66 md:w-102'>
              <p className='md:text-xs-lh text-lg font-bold'>179</p>
              <p className='md:text-md text-sm font-medium'>Reviews</p>
            </div>
            {/* line bawah */}
            <div className='absolute top-[140%] w-full border-b border-b-[#D5D7DA] md:w-3/4'></div>
          </div>
          {/* Description */}
          <div className='mt-32 mb-24 md:mt-40 md:mb-20'>
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
            <div className='ml-12 flex h-40 w-40 items-center justify-center self-center rounded-full border border-[#D5D7DA]'>
              <img src='../../icons/07_Icon share.svg' alt='icon share' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
