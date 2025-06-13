import * as React from 'react';

import SearchIcon from '../assets/search.svg';

type InputProps = {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ text, onChange }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        id="Input"
        name="Input"
        type="text"
        placeholder={text}
        onChange={onChange}
        className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 placeholder-gray-600 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      <SearchIcon
        className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 fill-gray-600 text-gray-500"
        aria-hidden="true"
      />
    </div>
  );
};
