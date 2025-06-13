import * as React from 'react';

import clsx from 'clsx';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// Checkbox component that renders a styled checkbox with a label
export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label
      htmlFor={id}
      className="relative flex cursor-pointer items-center space-x-3"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={`h-4 w-4 appearance-none border-1 border-gray-300 bg-white`}
      />
      {/* Blue square */}
      <span
        className={clsx(
          'pointer-events-none absolute left-0.75 h-2.5 w-2.5 bg-blue-500',
          checked ? 'block' : 'hidden'
        )}
      />
      {/* Label */}
      <span
        className={clsx('text-sm', checked ? 'text-blue-500' : 'text-gray-600')}
      >
        {label}
      </span>
    </label>
  );
};
