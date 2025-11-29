'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DropDown({}) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Navbar atas */}
      <nav className='flex items-center justify-between'>
        {/* Tombol hamburger */}
        <button
          onClick={handleToggleMenu}
          className='z-1 rounded-lg hover:cursor-pointer'
          aria-label='Toggle menu'
        >
          <ChevronDown />
        </button>
      </nav>

      {/* Menu mobile muncul setelah diklik */}
      {isOpen && (
        <div className='fixed top-64 right-0 z-1 h-200 w-full rounded-b-4xl bg-white text-black shadow-sm md:top-80 md:right-50 md:w-184'>
          <div className='custom-container flex h-200 w-full flex-col justify-between gap-12 p-16 text-black'>
            <p
              onClick={() => navigate('/profil')}
              className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
            >
              Profile
            </p>
            <p
              onClick={() => navigate('/BorrowedList')}
              className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
            >
              Borrowed List
            </p>
            <p
              onClick={() => navigate('/Reviews')}
              className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
            >
              Reviews
            </p>
            <p
              onClick={() => navigate('/login')}
              className='md:text-md text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
