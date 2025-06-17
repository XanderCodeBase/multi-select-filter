import type { ChangeEvent } from 'react';

import clsx from 'clsx';

export const CHECKBOXES = 'checkboxes';

interface CheckboxProps {
  value: string;
  hidden: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// Checkbox component that renders a styled checkbox with a label
export const Checkbox = ({
  value,
  hidden,
  checked,
  onChange,
}: CheckboxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label
      htmlFor={value}
      className={clsx(
        'relative flex cursor-pointer items-center space-x-3',
        hidden ? 'hidden' : 'block'
      )}
    >
      <input
        id={value}
        value={value}
        type="checkbox"
        hidden={hidden}
        checked={checked}
        name={CHECKBOXES}
        onChange={handleChange}
        className="h-4 w-4 appearance-none border-1 border-gray-300 bg-white"
      />
      {/* Blue square */}
      <span
        data-testid="blue-square"
        className={clsx(
          'pointer-events-none absolute left-0.75 h-2.5 w-2.5 bg-blue-600',
          checked ? 'block' : 'hidden'
        )}
      />
      {/* Label */}
      <span
        className={clsx('text-sm', checked ? 'text-blue-600' : 'text-gray-600')}
      >
        {value}
      </span>
    </label>
  );
};
