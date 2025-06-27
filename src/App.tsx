import { useActionState } from 'react';

import { Button, CHECKBOXES, MultiSelectWrapper } from './components';

// Main component that renders a form and displays selected options
function App() {
  const [selectedOptions, formAction] = useActionState(
    async (_: string[], formData: FormData): Promise<string[]> => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return formData.getAll(CHECKBOXES) as string[];
    },
    []
  );

  return (
    <>
      <form
        action={formAction}
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
