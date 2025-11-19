import { Button } from '../ui/button';

export default function Checkout() {
  return (
    <section className='bg-accent-green mx-auto mt-16 h-auto max-w-1034 pr-16 pl-16 md:mt-48'>
      <h2 className='md:text-36 text-24 mb-16 font-bold md:mb-32'>Checkout</h2>
      {/* 1. Start Left section User information */}
      <div>
        {/* start user information  */}
        <div className='w-466 space-y-16'>
          <h3 className='md:text-xs-lh text-lg font-bold'>User Information</h3>
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
            <h4 className='md:text-md text-sm font-medium'>Nomor Handphone</h4>
            <span className='md:text-md text-sm font-bold'>081234567890</span>
          </div>
          <div className='hidden border-b border-b-[#D5D7DA] md:mb-32 md:block'></div>
        </div>
        {/* end user information  */}
      </div>
      {/* 1. End Left section User information */}

      {/* 2. Start Right section completer your borrow request */}
      {/* Select per catagory */}
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
      {/* 2. End Right section completer your borrow request */}
    </section>
  );
}
