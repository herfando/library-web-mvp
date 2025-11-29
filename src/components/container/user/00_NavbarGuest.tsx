import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ToggleHamburger from '../../ui/togglehamburger';
import { Button } from '../../ui/button';

export default function NavbarGuest() {
  //#region

  const navigate = useNavigate();

  return (
    <section className='custom-container fixed left-1/2 z-1 flex h-80 w-full -translate-x-1/2 items-center justify-between bg-white'>
      {/* Booky */}
      <div
        onClick={() => navigate('/login')}
        className='my-19 flex items-center gap-x-15 hover:cursor-pointer'
      >
        <img
          src='/icons/01_logo company.svg'
          className='h-40 w-40 md:h-42 md:w-42'
        />
        <div className='text-lg-lh hidden self-center font-bold md:flex'>
          Booky
        </div>
      </div>

      {/* bag & profil */}
      <div className='flex items-center sm:hidden'>
        {/* Search */}
        <Search
          className='mr-16 h-24 w-24 text-[Neutral/950] hover:cursor-pointer'
          onClick={() => navigate('/login')}
        />
        {/* bag */}
        <div
          className='relative hover:cursor-pointer'
          onClick={() => navigate('/login')}
        >
          <img
            src='../../icons/02_bag.svg'
            alt='cart bag'
            className='mr-24 h-32 w-32'
          />
        </div>

        {/* Hamburger */}
        <div>
          <ToggleHamburger />
        </div>
      </div>

      {/* Button Login & Register */}
      <div className='hidden gap-16 sm:flex'>
        <Button
          onClick={() => navigate('/login')}
          className='text-md h-48 w-163 rounded-full border border-[#D5D7DA] bg-white font-bold text-black hover:cursor-pointer hover:bg-gray-700 hover:text-white'
        >
          Login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          className='text-md h-48 w-163 rounded-full font-bold hover:cursor-pointer hover:bg-blue-300 hover:text-black'
        >
          Register
        </Button>
      </div>
    </section>
  );
}
