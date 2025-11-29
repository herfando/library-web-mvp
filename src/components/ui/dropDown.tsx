'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DropDown({}) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative block md:hidden'>
      {/* Navbar atas */}
      <nav className='flex items-center justify-between'>
        {/* Tombol hamburger */}
        <button
          onClick={handleToggleMenu}
          className='z-20 rounded-lg'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            // Ikon X saat terbuka
            <X
              size={28}
              className='text-black hover:cursor-pointer dark:text-white'
            />
          ) : (
            // Garis 3 manual
            <div className='grid h-24 w-24 -translate-x-4 justify-items-end gap-6 p-3 hover:cursor-pointer'>
              <span className='h-2 w-24 bg-black'></span>
              <span className='h-2 w-24 bg-black'></span>
              <span className='h-2 w-24 bg-black'></span>
            </div>
          )}
        </button>
      </nav>

      {/* Menu mobile muncul setelah diklik */}
      <div
        className={`fixed top-0 left-0 z-1 h-136 w-full transform bg-white text-black transition-transform duration-1000 ease-in-out ${
          isOpen
            ? 'translate-y-0' // /* TRANSLATE HERE: menu muncul */
            : '-translate-y-full' // /* TRANSLATE HERE: menu geser keluar */
        }`}
      >
        <div className='custom-container flex h-136 w-full flex-col justify-center gap-12 text-black'>
          <h3
            onClick={() => navigate('/profil')}
            className='md:text-md text-sm font-semibold'
          >
            Profile
          </h3>
        </div>
      </div>
    </div>
  );
}
