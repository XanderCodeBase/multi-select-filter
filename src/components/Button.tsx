type ButtonProps = {
  text: string;
  onClick: () => void;
};

// Button component that renders a styled blue button
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full cursor-pointer rounded-lg border-b-1 border-b-blue-950 bg-blue-600 px-4 py-3 text-sm text-white transition duration-300 ease-in-out hover:bg-blue-900"
    >
      {text}
    </button>
  );
};
