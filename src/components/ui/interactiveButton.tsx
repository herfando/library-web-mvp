import { Button } from '../ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

type InteractiveButtonProps = {
  label: string;
  to: string;
};

export function InteractiveButton({ label, to }: InteractiveButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Button
      onClick={() => navigate(to)}
      className={`md:text-md h-40 w-[109.67px] cursor-pointer text-sm font-bold md:w-175 ${isActive ? 'bg-[#1C65DA] text-white hover:bg-[#1A55C0]' : 'bg-[#FFFFFF] text-neutral-700 hover:bg-white hover:text-black'} `}
    >
      {label}
    </Button>
  );
}

export default function Userinteractive() {
  return (
    <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
      <InteractiveButton label='Profile' to='/profile' />
      <InteractiveButton label='Borrowed List' to='/borrowed' />
      <InteractiveButton label='Reviews' to='/reviews' />
    </div>
  );
}
