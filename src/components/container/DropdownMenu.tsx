import { Button } from '../ui/button';

export default function DropdownMenu() {
  return (
    <div>
      {/* start Before login */}
      <section className='flex h-auto w-393 items-center justify-center p-16'>
        <div className='space-x-12'>
          <Button className='text-md h-40 w-174.5 rounded-full bg-[#D5D7DA] p-16 font-bold text-black hover:cursor-pointer'>
            Login{' '}
          </Button>
          <Button className='text-md h-40 w-174.5 rounded-full p-16 font-bold hover:cursor-pointer'>
            Register{' '}
          </Button>
        </div>
      </section>
      {/* end Before login */}

      {/* start After Login */}
      <section className='space-y-16 p-16 md:h-200 md:w-184 md:rounded-b-2xl'>
        <h4 className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'>
          Profile
        </h4>
        <h4 className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'>
          Borrowed List
        </h4>
        <h4 className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'>
          Reviews
        </h4>
        <h4 className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'>
          Logout
        </h4>
      </section>
      {/* start After Login */}
    </div>
  );
}
