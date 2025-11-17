import { Input } from './input';
import type { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className='relative'>
      <Input
        {...props}
        style={{ paddingLeft: '42px' }}
        className={` ${props.className ?? ''}`}
      />
    </div>
  );
}
