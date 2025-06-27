'use client';

import { useState } from 'react';

// Hook that manages checkbox filtering based on query input
// Returns all values when no query is set
// Returns filtered values when query is set
export function useFilterCheckboxChange(options: string[] = []) {
  const [query, setQuery] = useState('');

  const filteredValues =
    !query || query.trim() === ''
      ? options
      : options.filter(option => option.startsWith(query.trim()));

  return { filteredValues, setQuery };
}
