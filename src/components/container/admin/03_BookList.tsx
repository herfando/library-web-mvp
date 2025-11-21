import { Button } from '../../ui/button';
import { Search, Star } from 'lucide-react';

export default function BookList() {
  return (
    <section className='mx-auto mt-16 max-w-1032 pr-16 pl-16 md:mt-48'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Borrowed List
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          User
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Book List
        </Button>
      </div>
      {/* end navigasi 1*/}

      {/* start Book List + search */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>
        Book List
      </p>
      <Button className='text-md mt-16 h-48 w-240 rounded-full font-bold hover:cursor-pointer md:mt-24'>
        Add Book{' '}
      </Button>
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
            Available
          </Button>
          <Button className='md:text-md mt-15 h-40 w-93 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24 md:w-101'>
            Returned
          </Button>
          <Button className='md:text-md mt-15 h-40 w-88 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24 md:w-96'>
            Borrowed
          </Button>
          <Button className='md:text-md mt-15 h-40 w-88 rounded-full border bg-[#FFFFFF] text-sm font-semibold text-neutral-950 hover:cursor-pointer hover:border-[#1C65DA] hover:bg-white hover:text-[#1C65DA] md:mt-24 md:w-96'>
            Damaged
          </Button>
        </div>
        {/* end navigasi 2 */}

        {/* start Booklist */}
        <div className='flex flex-wrap items-center justify-between'>
          <div className='mt-16 flex p-20 md:mt-24'>
            <img
              src='../../images/06_img dummy4 book detail.png'
              alt='books my cart'
              className='h-138 w-92 space-y-16'
            />
            {/* card Detail */}
            <div className='ml-12 flex flex-col justify-between md:ml-16'>
              <Button className='h-28 w-158 items-center rounded-2xl border-[Neutral/300] bg-white font-bold text-black hover:text-white'>
                <span>Business & Economics</span>
              </Button>
              <h3 className='text-md font-bold md:text-lg'>
                The Psychology of Money
              </h3>
              <h3 className='md:text-md text-sm font-medium'>Morgan Housel</h3>
              <div className='flex items-center space-x-3'>
                <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />{' '}
                <span className='md:text-md text-sm font-semibold'>4.9</span>
              </div>
            </div>
          </div>
          {/* Button give review*/}
          <div className='space-x-13'>
            <Button className='text-md h-48 w-95 rounded-full border border-[#D5D7DA] bg-white font-bold text-[#0A0D12] hover:cursor-pointer hover:text-white'>
              Preview
            </Button>
            <Button className='text-md h-48 w-95 rounded-full border border-[#D5D7DA] bg-white font-bold text-[#0A0D12] hover:cursor-pointer hover:text-white'>
              Edit
            </Button>
            <Button className='text-md h-48 w-95 rounded-full border border-[#D5D7DA] bg-white font-bold text-[#EE1D52] hover:cursor-pointer'>
              Delete
            </Button>
          </div>
        </div>
        {/* end Booklist */}
      </div>
    </section>
  );
}
