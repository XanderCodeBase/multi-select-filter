type ButtonProps = {
  label: string;
  onClick?: () => void;
};

// Button component that renders a styled blue submit button
export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full cursor-pointer rounded-md border-b-1 border-b-blue-950 bg-blue-600 px-4 py-3 text-sm text-white transition duration-300 ease-in-out hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 active:bg-blue-800"
    >
      {label}
    </button>
  );
};
