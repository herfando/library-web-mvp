import { Check } from 'lucide-react';
import { Button } from '../ui/button';

export default function Sucsess() {
  return (
    <section className='top-1/2 mx-auto mt-190 mb-[253.62px] flex h-auto w-full max-w-686 flex-col items-center justify-center pr-24 pl-24 md:mt-243 md:mb-[368.62px]'>
      <div className='flex h-[142.38px] w-[142.38px] items-center justify-center'>
        <div className='flex h-[82.81px] w-[82.81px] items-center justify-center rounded-full bg-[#1C65DA]'>
          <Check className='h-[50.64px] w-[50.64px] text-[#E9EAEB]' />
        </div>
      </div>
      <h2 className='md:text-sm-lh mt-24 text-xl font-bold md:mt-32'>
        Borrowing Successful!
      </h2>
      <p className='md:text-md mt-8 text-center text-sm font-medium'>
        Your book has been successfully borrowed. Please return it by
        <span className='ml-4 text-[#EE1D52]'>31 August 2025 </span>
      </p>
      <Button className='text-md mt-24 h-48 w-286 rounded-full font-bold hover:cursor-pointer md:mt-32'>
        See Borrowed List{' '}
      </Button>
    </section>
  );
}
