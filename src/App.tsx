import { useState } from 'react';

import { Button, CHECKBOXES, MultiSelectWrapper } from './components';

// Main component that renders a form and displays selected options
function App() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selected = new FormData(event.currentTarget).getAll(
      CHECKBOXES
    ) as string[];
    setSelectedOptions(selected);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="m-10 max-w-md space-y-6 rounded-md border border-gray-300 bg-gray-50 p-6"
      >
        <p className="text-gray-600">Productgroup</p>
        <MultiSelectWrapper />
        <Button label="Toepassen" />
      </form>

      {/* Renders the form submission results in a formatted JSON view */}
      <pre className="m-10">{JSON.stringify(selectedOptions, null, 2)}</pre>
    </>
  );
}

export default App;
