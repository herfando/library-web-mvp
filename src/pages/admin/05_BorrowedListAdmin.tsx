import { Button } from '../../components/ui/button';
import { Search } from 'lucide-react';

export default function BorrowedListAdmin() {
  return (
    <section className='mx-auto mt-16 max-w-1032 pr-16 pl-16 md:mt-48'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Profile
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Borrowed List
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
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
        <div className='flex gap-x-12'>
          <Button className='md:text-md mt-15 h-40 w-51 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24'>
            All
          </Button>
          <Button className='md:text-md mt-15 h-40 w-72 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24 md:w-77'>
            Active
          </Button>
          <Button className='md:text-md mt-15 h-40 w-93 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24 md:w-101'>
            Returned
          </Button>
          <Button className='md:text-md mt-15 h-40 w-88 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24 md:w-96'>
            Overdue
          </Button>
        </div>
        {/* end navigasi 2 */}

        {/* start card status active borrow list */}
        <div className='mt-15 flex h-auto w-full items-center rounded-2xl shadow-lg md:mt-24'>
          <div className='flex w-full justify-between p-20'>
            <div className='flex items-center gap-x-12'>
              <Button className='md:text-md h-32 w-51 rounded-xl bg-[#FFFFFF] text-sm font-bold text-[#0A0D12] hover:cursor-pointer hover:bg-[#24A5000D] hover:text-[#24A500]'>
                Status
              </Button>
              <Button className='md:text-md h-32 w-51 rounded-xl bg-[#FFFFFF] text-sm font-bold text-[#0A0D12] hover:cursor-pointer hover:bg-[#24A5000D] hover:text-[#24A500]'>
                Active
              </Button>
            </div>
            <div className='flex gap-x-12'>
              <Button className='md:text-md h-32 w-62 rounded-xl bg-[#FFFFFF] text-sm font-bold text-[#0A0D12] hover:cursor-pointer hover:bg-[#24A5000D] hover:text-[#24A500] md:w-72'>
                Due Date
              </Button>
              <Button className='h-32 w-116 rounded-xl bg-[#EE1D521A] text-sm font-bold text-[#EE1D52] hover:cursor-pointer hover:bg-[#24A5000D] hover:text-[#24A500]'>
                31 August 2025
              </Button>
            </div>
          </div>
          <div className='mt-16 border-b border-b-[#D5D7DA] md:mt-20'></div>
        </div>
        {/* end card status active borrow list */}
        {/* start Booklist */}
        <div className='flex flex-wrap items-center justify-between'>
          <div className='mt-16 flex md:mt-24'>
            <img
              src='../../images/13_img dummy6 my cart.png'
              alt='books my cart'
              className='space-y-16'
            />
            {/* card Detail */}
            <div className='ml-12 flex flex-col justify-between md:ml-16'>
              <Button className='h-28 w-78 items-center rounded-2xl border-[Neutral/300] bg-white font-bold text-black hover:text-white'>
                <span>Category</span>
              </Button>
              <h3 className='text-md font-bold md:text-lg'>Book Name</h3>
              <h3 className='md:text-md text-sm font-medium'>Author name</h3>
              <h4 className='md:text-md flex gap-x-18 text-sm font-bold'>
                29 Aug 2025 • Duration 3 Day
              </h4>
            </div>
          </div>
          {/* borrower's name*/}
          <div>
            <h4 className='text-md font-semibold'>borrower's name</h4>
            <h3 className='text-xl font-bold'>John Doee</h3>
          </div>
        </div>
        {/* end Booklist */}
      </div>
    </section>
  );
}
