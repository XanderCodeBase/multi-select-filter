import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { MultiSelect } from './components/MultiSelect.tsx';
import { useFetchCheckboxOptions } from './hooks/useFetchCheckboxOptions.ts';

function ErrorFallback({ error }: { error: Error }) {
  return <p className="text-red-600">Error: {error.message}</p>;
}

function OptionsLoader() {
  const { data: options = [], isError, error } = useFetchCheckboxOptions();
  if (isError && error) throw error;

  return <MultiSelect options={options} />;
}

// Wrapper component for MultiSelect
// Uses suspense option for loading of options
export const MultiSelectWrapper = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<p>Loading...</p>}>
      <OptionsLoader />
    </Suspense>
  </ErrorBoundary>
);
