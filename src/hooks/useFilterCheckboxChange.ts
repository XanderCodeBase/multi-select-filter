import { useMemo, useState } from 'react';

// Hook that manages checkbox filtering based on query input
// Returns all values when no query is set
// Returns filtered values when query is set
export function useFilterCheckboxChange(options: string[] = []) {
  const [query, setQuery] = useState('');

  const filteredValues = useMemo(() => {
    if (!query || query.trim() === '') return options;

    return options.filter(option => option.startsWith(query.trim()));
  }, [options, query]);

  return { filteredValues, setQuery };
}
