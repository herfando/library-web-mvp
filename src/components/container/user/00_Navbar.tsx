import { Search, ChevronDown } from 'lucide-react';
import SearchInput from '../../ui/search_input';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Navbar() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    const q = (value || '').trim();
    navigate(`/home?search=${encodeURIComponent(q)}`);
  };

  const onSearchChange = (eOrVal: any) => {
    if (typeof eOrVal === 'string') {
      handleSearch(eOrVal);
      return;
    }

    if (eOrVal && typeof eOrVal.target?.value === 'string') {
      handleSearch(eOrVal.target.value);
      return;
    }

    handleSearch('');
  };
  return (
    <section className='custom-container flex h-80 w-full items-center justify-between'>
      {/* Booky */}
      <div className='my-19 flex items-center gap-x-15'>
        <img
          src='../../../public/icons/01_logo company.svg'
          className='h-40 w-40 md:h-42 md:w-42'
        />
        <div className='text-lg-lh hidden self-center font-bold md:flex'>
          Booky
        </div>
      </div>
      {/* Search book */}
      <div className='relative hidden h-44 w-500 lg:flex'>
        <SearchInput
          placeholder='Search book'
          className='px-42'
          value={search}
          onChange={onSearchChange}
        />
        <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-[#D5D7DA]' />
      </div>

      {/* bag & profil */}
      <div className='flex items-center'>
        {/* Search */}
        <Search className='mr-16 flex h-24 w-24 text-[Neutral/950] lg:hidden' />
        {/* bag */}
        <img
          src='../../icons/02_bag.svg'
          alt='cart bag'
          className='mr-24 h-32 w-32'
        />
        {/* picture account */}
        <img
          src='../../images/01_foto profil.png'
          alt='foto profil'
          className='mr-16 h-48 w-48'
        />
        {/* Name Profil account */}
        <p className='mr-16 hidden text-[18px] font-semibold md:flex'>
          John Doe
        </p>
        <ChevronDown className='hidden h-24 w-24 md:flex' />
      </div>
    </section>
  );
}
