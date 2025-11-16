import { Input } from '../ui/input';

export default function Login() {
  return (
    <section className='pr-11xl flex h-auto w-full items-center justify-center pt-217 pb-216 pl-34 md:px-520 md:pt-295 md:pb-298'>
      <div className='h-419 w-324 bg-amber-300 md:h-431 md:w-400'>
        {/* Booky */}
        <div className='mb-20 flex gap-x-11.5'>
          <img
            src='../../../public/icons/01_logo company.svg'
            className='h-33 w-33'
          />
          <div className='md:text-25.14 self-center font-bold'>Booky</div>
        </div>
        {/* Login */}
        <h2 className='text-28 mb-2 font-bold md:mb-8'>Login</h2>
        <p className='text-md mb-20 font-semibold text-[#414651]'>
          Sign in to manage your library account.
        </p>
        {/* Email */}
        <div className='mb-2 text-sm font-bold'>Email</div>
        <Input />
      </div>
    </section>
  );
}
