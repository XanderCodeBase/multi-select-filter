import { useMemo, useState } from 'react';

// Hook that manages checkbox filtering based on query input
// Returns all values when no query
// Returns filtered values when query setter
export function useFilterCheckboxChange(options: string[] = []) {
  const [query, setQuery] = useState('');

  const filteredValues = useMemo(() => {
    if (!query || query.trim() === '') return options;

    return options.filter(option => option.startsWith(query.trim()));
  }, [options, query]);

  return { filteredValues, setQuery };
}
