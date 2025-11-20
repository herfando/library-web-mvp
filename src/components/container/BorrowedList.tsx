import { Button } from '../ui/button';
import { Search } from 'lucide-react';

export default function BorrowedList() {
  return (
    <section className='mx-auto mt-16 max-w-1032 pr-16 pl-16 md:mt-48'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center bg-[#F5F5F5] md:w-557'>
        <Button className='md:text-md h-40 w-[109.67px] bg-[#FFFFFF] text-sm text-neutral-700 md:w-175'>
          Profile
        </Button>
        <Button className='md:text-md h-40 w-[109.67px] bg-[#FFFFFF] text-sm font-bold text-black md:w-175'>
          Borrowed List
        </Button>
        <Button className='md:text-md h-40 w-[109.67px] bg-[#FFFFFF] text-sm text-neutral-700 md:w-175'>
          Reviews
        </Button>
      </div>
      {/* end navigasi 1*/}

      {/* start borrowed list + search */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>
        Borrowed List
      </p>
      <div>
        <div className='relaetive mt-15 flex h-44 w-full items-center rounded-full border border-[#D5D7DA] bg-white hover:bg-white md:mt-24 md:w-544'>
          <input
            type='text'
            placeholder='Search book '
            className='ml-42 text-sm font-medium'
          />
          <Search
            color='#535862'
            width={15}
            height={15}
            className='absolute ml-16'
          />
        </div>
        {/* end borrowed list + search */}

        {/* start navigasi 2 */}
        <div>
          <Button className='md:text-md h-40 w-[109.67px] bg-[#FFFFFF] text-sm text-neutral-700 md:w-175'>
            Profile
          </Button>
        </div>
        {/* end navigasi 2 */}
      </div>
    </section>
  );
}
