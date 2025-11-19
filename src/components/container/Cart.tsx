import { Button } from '../ui/button';

export default function Cart() {
  return (
    <section className='mx-auto mt-16 h-auto w-full max-w-1032 items-center pr-16 pl-16 md:mt-48'>
      {/* Title My Cart */}
      <div className='text-xs-lh mb-16 font-bold md:mb-32 md:text-[36px]'>
        My Cart
      </div>
      <div className='flex flex-wrap'>
        {/* 1. Start Cart left section */}
        <div className='w-642'>
          {/* Select all */}
          <label htmlFor='select all' className='flex gap-x-5'>
            <input type='checkbox' id='select all' className='h-20 w-20' />
            <span className='text-md font-semibold'>Select All</span>
          </label>
          {/* Select per catagory */}
          <div className='mt-16 flex md:mt-24'>
            <label htmlFor='select all' className='flex gap-x-5'>
              <input type='checkbox' id='select all' className='h-20 w-20' />
            </label>
            <img
              src='../../images/08_img dummy6 my cart.png'
              alt='books my cart'
              className='ml-16'
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
          {/* underline */}
          <div className='mt-16 w-full border-b border-b-[#D5D7DA] md:mt-24'></div>
        </div>
        {/* 1. End Cart left section */}

        {/* 2. Start Loan Summary right section */}
        <div className='ml-40 hidden h-200 w-318 flex-col space-y-24 p-20 md:flex'>
          <h3 className='text-xl font-bold'>Loan Summary</h3>
          <p className='flex justify-between'>
            <span className='text-medium text-md'>Total Book</span>
            <span className='text-md font-bold'>2 Items</span>
          </p>
          <Button className='h-48 w-full rounded-full border border-[#D5D7DA] font-bold text-white hover:cursor-pointer hover:bg-[#82AEFF] hover:text-black'>
            Borrow Book
          </Button>
        </div>
        {/* 2. End Loan Summary right section */}
      </div>
    </section>
  );
}
