import { Button } from '../ui/button';

export default function DropdownMenu() {
  return (
    <div>
      {/* start Before login */}
      <section className='bg-accent-green flex h-auto w-393 items-center justify-center p-16'>
        <div>
          <Button className='text-md h-40 w-174.5 rounded-full p-16 font-bold hover:cursor-pointer'>
            Register{' '}
          </Button>
        </div>
      </section>
      {/* end Before login */}

      {/* start After Login */}
      <section className='bg-accent-green space-y-16 p-16 md:h-200 md:w-184 md:rounded-b-2xl'>
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
