import { Search } from 'lucide-react';
import SearchInput from '../../ui/searchInput';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import { useState, useEffect } from 'react';
import DropDown from '../../ui/dropDown';

export default function NavbarUser() {
  // show search after click icon search in mobile version
  const [showSearch, setShowSearch] = useState(false);

  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

  // Ambil user dari localStorage register saat mount
  useEffect(() => {
    const storedRegisterUser = localStorage.getItem('registerUser');

    if (storedRegisterUser) {
      setUser(JSON.parse(storedRegisterUser)?.user || null);
    }
  }, []);

  // optional: update user saat localStorage berubah
  useEffect(() => {
    const handleStorageChange = () => {
      const storedRegisterUser = localStorage.getItem('registerUser');

      if (storedRegisterUser) {
        setUser(JSON.parse(storedRegisterUser)?.user || null);
      } else {
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  //#endregion

  //#region display total cart
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalCount = cart.reduce((s, i) => s + i.quantity, 0);
  //#endregion

  //#region - Search Query
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

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
  //#endregion

  return (
    <section className='custom-container fixed left-1/2 z-2 flex h-80 w-full -translate-x-1/2 items-center justify-between bg-white'>
      {/* Booky */}
      <div className='my-19 flex items-center gap-x-15'>
        <img
          src='/icons/01_logo company.svg'
          className='h-40 w-40 md:h-42 md:w-42'
        />
        <div className='text-lg-lh hidden self-center font-bold md:flex'>
          Booky
        </div>
      </div>

      {/* Desktop search - selalu muncul di lg ke atas */}
      <div className='relative hidden lg:flex'>
        <SearchInput
          placeholder='Search book'
          className='px-42'
          value={search}
          onChange={onSearchChange}
        />
        <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-[#D5D7DA]' />
      </div>

      {/* Mobile search - muncul saat icon diklik */}
      {showSearch && (
        <div className='relative p-2 lg:hidden'>
          <SearchInput
            placeholder='Search'
            value={search}
            onChange={onSearchChange}
            className='text-sm'
          />
          <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-[#D5D7DA]' />
        </div>
      )}

      {/* bag & profil */}
      <div className='flex items-center'>
        {/* Search */}
        <Search
          onClick={() => setShowSearch((prev) => !prev)}
          className='mr-16 flex h-24 w-24 text-[Neutral/950] hover:cursor-pointer lg:hidden'
        />
        {/* bag */}
        <div
          className='relative hover:cursor-pointer'
          onClick={() => navigate('/cart')}
        >
          <img
            src='../../icons/02_bag.svg'
            alt='cart bag'
            className='mr-24 h-32 w-32'
          />
          {/* visible start from 1 value */}
          {totalCount > 0 && (
            <span className='absolute -top-2 right-[35%] h-20 w-20 content-center items-center rounded-full bg-red-600 px-2 text-center text-xs text-white'>
              {totalCount}
            </span>
          )}
        </div>
        {/* picture account */}
        <img
          src='../../images/01_foto profil.png'
          alt='foto profil'
          className='mr-16 h-48 w-48'
        />
        {/* Name Profil account atau tombol Login/Register */}
        {user ? (
          <p className='mr-16 hidden text-[18px] font-semibold md:flex'>
            {user.name}
          </p>
        ) : (
          <>
            <button
              onClick={() => navigate('/register')}
              className='font-semibold text-[#1C65DA]'
            >
              Register
            </button>
          </>
        )}
        <div>
          <DropDown />
        </div>
      </div>
    </section>
  );
}
