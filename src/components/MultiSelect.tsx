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
      className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  );
};
