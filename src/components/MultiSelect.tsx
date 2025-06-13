export const MultiSelect = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <input
      id="MultiSelect"
      name="MultiSelect"
      type="text"
      placeholder="Search by name..."
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
    />
  );
};
