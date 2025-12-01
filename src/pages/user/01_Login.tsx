import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/services/authApi';
import { useAppDispatch } from '../../redux/hooks/useAuth';
import { setCredentials } from '../../redux/slices/authSlice';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginSchema } from '../../redux/validation/auth';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const userData = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      //save to redux
      dispatch(setCredentials(userData));

      // save to localstorage
      localStorage.setItem(
        'loginUser',
        JSON.stringify({
          token: userData.token,
          user: userData.user,
        })
      );
      toast.success('Login sukses!');
      navigate('/home');
    } catch (err: any) {
      toast.error(err?.data?.message || 'Login gagal');
    }
  };

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center'>
      <div className='h-419 w-324 whitespace-nowrap md:h-431 md:w-400'>
        {/* Booky */}
        <div className='mb-20 flex items-center gap-x-11.5'>
          <img src='/icons/01_logo company.svg' className='h-33 w-33' />
          <div className='self-center text-[25.14px] font-bold'>Booky</div>
        </div>
        {/* Login */}
        <h2 className='text-sm-lh mb-2 font-bold md:mb-8'>Login</h2>
        <p className='text-md text-\[\#414651\] mb-20 font-semibold'>
          Sign in to manage your library account.
        </p>
        {/* Email */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-16'>
            <div className='mb-2 text-sm font-bold'>Email</div>
            <Input {...register('email')} placeholder='johndoe@email.com' />
            {errors.email && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className='mb-16'>
            <div className='mb-2 text-sm font-bold'>Password </div>
            <div className='relative w-full'>
              <Input
                type={show ? 'text' : 'password'}
                {...register('password')}
                placeholder='johndoe123'
              />
              <Eye
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-14 -translate-y-1/2 cursor-pointer text-[#0A0D12]'
              />
              {errors.password && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          {/* Button */}
          <Button
            type='submit'
            disabled={isLoading}
            className='text-md mb-16 h-48 w-full rounded-full bg-[#1C65DA] text-[#FDFDFD] hover:cursor-pointer'
          >
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </form>
        {/* Don't have an account?Register */}
        <p className='text-md gap-x-4 text-center font-semibold'>
          Don't have an account?
          <Link to='/register' className='ml-4 font-bold text-[#1C65DA]'>
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
