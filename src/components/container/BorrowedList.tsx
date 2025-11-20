import { Button } from '../ui/button';

export default function BorrowedList() {
  return (
    <section className='mt-16 md:mt-48'>
      {/* navigasi */}
      <div className='flex h-56 w-full items-center justify-center bg-[#F5F5F5] md:w-557'>
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
    </section>
  );
}
