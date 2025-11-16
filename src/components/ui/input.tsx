import * as React from 'react';

import { cn } from '../../lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      placeholder='johndoe@email.com'
      className={cn(
        'h-48 w-full rounded-2xl border border-[#D5D7DA] px-16 py-9'
      )}
      {...props}
    />
  );
}

export { Input };
