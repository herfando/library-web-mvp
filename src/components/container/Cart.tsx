import { Button } from '../ui/button';

export default function Cart() {
  return (
    <section className='custom-container mt-16 h-auto w-full md:mt-48'>
      {/* Title My Cart */}
      <div className='md:text-36 tet-24 mb-16 font-bold md:mb-32'>My Cart</div>
      <div>
        {/* Start Cart left section */}
        <div>
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
        </div>
        {/* End Cart left section */}

        {/* Start Loan Summary right section */}
        {/* End Loan Summary right section */}
      </div>
    </section>
  );
}
