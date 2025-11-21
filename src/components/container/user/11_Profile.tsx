import { Button } from '../../ui/button';

export default function Profile() {
  return (
    <section className='mx-auto mt-16 mb-58 w-full -translate-x-0 px-16 md:mt-40 md:mb-110 md:h-440 md:w-557 md:-translate-x-[43%]'>
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

      {/* start profile */}
      <h2 className='md:text-sm-lh text-xs-lh` font-bold'>Profile</h2>

      {/* profil card */}
      <div className='mt-15 space-y-12 p-20 md:mt-24'>
        <img
          src='../../images/01_foto profil.png'
          alt='profil'
          className='h-64 w-64'
        />
        {/* name */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Name</p>
          <p className='md:text-md text-sm font-bold'>Johndoe</p>
        </div>
        {/* email */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Email</p>
          <p className='md:text-md text-sm font-bold'>johndoe@email.com</p>
        </div>
        {/* Nomor Handphone */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Nomor Handphone</p>
          <p className='md:text-md text-sm font-bold'>081234567890</p>
        </div>
        <Button className='text-md mt-16 h-48 w-full rounded-full font-bold hover:cursor-pointer md:mt-24'>
          Update Profile{' '}
        </Button>
      </div>
      {/* end profile */}
    </section>
  );
}
