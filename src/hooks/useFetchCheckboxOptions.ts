'use client';

import { gql, useQuery } from '@apollo/client';
import he from 'he';

export const GET_STRINGS = gql`
  query GetStrings {
    items
  }
`;

// Hook to fetch checkbox options
export const useFetchCheckboxOptions = () => {
  const { loading, error, data } = useQuery(GET_STRINGS);

  // Validate response is JSON and an array of strings
  if (data && !Array.isArray(data.items)) {
    return {
      loading,
      error: new Error('Invalid response format: items is not an array'),
      data: [],
    };
  }

  // HTML decode strings and return
  const options = data?.items
    ? data.items.map((item: string) => he.decode(item))
    : [];

  return {
    loading,
    error,
    data: options,
  };
};
