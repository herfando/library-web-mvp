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
        </div>
        {/* end user information  */}

        {/* start booklist */}
        {/* end booklist */}
      </div>
      {/* 1. End Left section User information */}

      {/* 2. Start Right section completer your borrow request */}
      {/* 2. End Right section completer your borrow request */}
    </section>
  );
}
