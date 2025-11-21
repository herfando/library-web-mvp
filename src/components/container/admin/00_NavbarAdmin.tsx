import { ChevronDown } from 'lucide-react';

export default function NavbarAdmin() {
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

      {/* profil */}
      <div className='flex items-center'>
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
