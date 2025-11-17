import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import SearchInput from '../ui/search_input';

export default function Navbar() {
  return (
    <section className='custom-container flex h-auto w-full items-center justify-between'>
      {/* Booky */}
      <div className='my-19 flex items-center gap-x-15'>
        <img
          src='../../../public/icons/01_logo company.svg'
          className='h-42 w-42'
        />
        <div className='text-lg-lh self-center font-bold'>Booky</div>
      </div>
      <div className='relative h-44 w-500'>
        <SearchInput placeholder='Search book' className='px-42' />
        <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-[#D5D7DA]' />
      </div>
    </section>
  );
}
