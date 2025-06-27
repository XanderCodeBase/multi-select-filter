import type { MouseEventHandler } from 'react';
import { useFormStatus } from 'react-dom';

import clsx from 'clsx';

type ButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

// Button component that renders a styled blue submit button
export const Button = ({ label, onClick, disabled }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled || pending}
      className={clsx(
        'w-full rounded-md border-b border-b-blue-950 bg-blue-600 px-4 py-3 text-sm text-white',
        'transition duration-300 ease-in-out',
        'hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 active:bg-blue-800',
        disabled || pending ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      )}
    >
      {pending ? 'Processing...' : label}
    </button>
  );
};
