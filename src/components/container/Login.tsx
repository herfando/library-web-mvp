import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <section className='pr-11xl flex h-auto w-full items-center justify-center pt-217 pb-216 pl-34 md:px-520 md:pt-295 md:pb-298'>
      <div className='h-419 w-324 md:h-431 md:w-400'>
        {/* Booky */}
        <div className='mb-20 flex gap-x-11.5'>
          <img
            src='../../../public/icons/01_logo company.svg'
            className='h-33 w-33'
          />
          <div className='self-center text-[25.14px] font-bold'>Booky</div>
        </div>
        {/* Login */}
        <h2 className='text-sm-lh mb-2 font-bold md:mb-8'>Login</h2>
        <p className='text-md text-\[\#414651\] mb-20 font-semibold'>
          Sign in to manage your library account.
        </p>
        {/* Email */}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Email</div>
          <Input />
        </div>
        {/* Password */}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Password </div>
          <div className='relative w-full'>
            <Input type={show ? 'text' : 'password'} />
            <Eye
              onClick={() => setShow(!show)}
              className='absolute top-1/2 right-14 -translate-y-1/2 cursor-pointer text-[#0A0D12]'
            />
          </div>
        </div>
        {/* Button */}
        <Button className='text-md mb-16 h-48 w-full rounded-full bg-[#1C65DA] text-[#FDFDFD] hover:cursor-pointer'>
          Login
        </Button>
        {/* Don't have an account?Register */}
        <p className='text-md text-center font-semibold'>
          Don't have an account?
          <Link to='/register' className='font-bold text-[#1C65DA]'>
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
