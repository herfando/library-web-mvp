import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [show, setShow] = useState(false);
  return (
    <section className='flex h-auto w-full items-center justify-center pt-75 pr-34 pb-76 pl-24 md:px-520 md:pt-95 md:pb-217'>
      <div className='h-701 w-345 md:h-713 md:w-400'>
        {/* Booky */}
        <div className='mb-20 flex items-center gap-x-11.5'>
          <img
            src='../../../public/icons/01_logo company.svg'
            className='h-33 w-33'
          />
          <div className='self-center text-[25.14px] font-bold'>Booky</div>
        </div>
        {/* Register */}
        <h2 className='text-sm-lh mb-2 font-bold md:mb-8'>Register</h2>
        <p className='text-md text-\[\#414651\] mb-20 font-semibold whitespace-nowrap'>
          Create your account to start borrowing books.
        </p>
        {/* Name */}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Name</div>
          <Input placeholder='John Doe' />
        </div>
        {/* Email */}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Email</div>
          <Input />
        </div>
        {/* Nomor Handphone */}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Nomor Handphone</div>
          <Input placeholder='081234567890' />
        </div>
        {/* Password */}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Password </div>
          <div className='relative w-full'>
            <Input type={show ? 'text' : 'password'} placeholder='johndoe123' />
            <Eye
              onClick={() => setShow(!show)}
              className='absolute top-1/2 right-14 -translate-y-1/2 cursor-pointer text-[#0A0D12]'
            />
          </div>
        </div>
        {/* Confirm Password*/}
        <div className='mb-16'>
          <div className='mb-2 text-sm font-bold'>Confirm Password </div>
          <div className='relative w-full'>
            <Input type={show ? 'text' : 'password'} placeholder='johndoe123' />
            <Eye
              onClick={() => setShow(!show)}
              className='absolute top-1/2 right-14 -translate-y-1/2 cursor-pointer text-[#0A0D12]'
            />
          </div>
        </div>
        {/* Button */}
        <Button className='text-md mb-16 h-48 w-full rounded-full bg-[#1C65DA] text-[#FDFDFD] hover:cursor-pointer'>
          Submit
        </Button>
        {/* Already have an account?Log In */}
        <p className='text-md text-center font-semibold'>
          Already have an account?
          <Link to='/' className='ml-4 font-bold text-[#1C65DA]'>
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}
