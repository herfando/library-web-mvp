import { Search, ChevronDown } from 'lucide-react';
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
      {/* Search book */}
      <div className='relative h-44 w-500'>
        <SearchInput placeholder='Search book' className='px-42' />
        <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-[#D5D7DA]' />
      </div>
      {/* bag & profil */}
      <div className='flex items-center'>
        <img
          src='../../icons/02_bag.svg'
          alt='cart bag'
          className='h-32 w-32'
        />
        <img
          src='../../images/01_foto profil.png'
          alt='foto profil'
          className='h-48 w-48'
        />
        {/* Name Profil account */}
        <p>John Doe</p>
        <ChevronDown />
      </div>
    </section>
  );
}
