import { Button } from '../../ui/button';
import { useEffect, useState } from 'react';

import Userinteractive from '../../ui/interactiveButton';

type UserInfo = {
  name: string;
  email: string;
  phoneNumber?: string;
};

export default function Profile() {
  const [userData, setUserData] = useState<UserInfo>({
    name: '',
    email: '',
    phoneNumber: '',
  });

  // take data user from local storage checkout
  useEffect(() => {
    const storedLogin = localStorage.getItem('user');
    const storedRegister = localStorage.getItem('registerUser');

    let data: UserInfo | null = null;

    if (storedRegister) {
      const parsed = JSON.parse(storedRegister);
      data = parsed.user;
    } else if (storedLogin) {
      const parsed = JSON.parse(storedLogin);
      data = parsed.data.user;
    }

    if (data) {
      setUserData({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber || '',
      });
    }
  }, []);

  return (
    <section className='mx-auto mt-16 mb-58 w-full -translate-x-0 px-16 md:mt-40 md:mb-110 md:h-440 md:w-557 md:-translate-x-[43%]'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Userinteractive />
      </div>
      {/* end navigasi 1*/}

      {/* start profile */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>
        Profile
      </p>

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
          <p className='md:text-md text-sm font-bold'>{userData.name}</p>
        </div>
        {/* email */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Email</p>
          <p className='md:text-md text-sm font-bold'>{userData.email}</p>
        </div>
        {/* Nomor Handphone */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Nomor Handphone</p>
          <p className='md:text-md text-sm font-bold'>{userData.phoneNumber}</p>
        </div>
        <Button className='text-md mt-16 h-48 w-full rounded-full font-bold hover:cursor-pointer md:mt-24'>
          Update Profile{' '}
        </Button>
      </div>
      {/* end profile */}
    </section>
  );
}
