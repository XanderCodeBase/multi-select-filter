import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import he from 'he';

const URL = '/data/items.json';

const fetchOptions = async (): Promise<string[]> => {
  const response = await axios.get(URL);

  // Validate response is JSON and an array of strings
  if (typeof response.data !== 'object' || !Array.isArray(response.data.data)) {
    throw new Error(`Invalid response format: ${response.data}`);
  }

  // HTML decode strings and return
  return response.data.data.map((item: string) => he.decode(item));
};

// Hook to fetch checkbox options
export const useFetchCheckboxOptions = () =>
  useQuery({
    queryKey: ['checkbox-options'],
    queryFn: fetchOptions,
    retry: false,
  });
