import type { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';

import { useFetchCheckboxOptions } from './useFetchCheckboxOptions.ts';

vi.mock('axios');

// Create a wrapper component to provide QueryClient
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = 'QueryClientWrapper';

  return Wrapper;
};

describe('useCheckboxOptions', () => {
  const mockOptions = ['Apple', 'Banana', 'Orange'];

  it('should fetch and decode options successfully', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: { data: ['Apple', 'Banana', 'Orange'] },
    });

    const { result } = renderHook(() => useFetchCheckboxOptions(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockOptions);
    expect(axios.get).toHaveBeenCalledWith('/data/items.json');
  });

  it('should handle bad request error', async () => {
    const errorMessage = 'Bad Request';
    vi.mocked(axios.get).mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() => useFetchCheckboxOptions(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe(errorMessage);
  });

  it('should handle invalid response format', async () => {
    const invalidData = { invalid: 'not an array' };
    vi.mocked(axios.get).mockResolvedValueOnce({ data: invalidData });

    const { result } = renderHook(() => useFetchCheckboxOptions(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toContain('Invalid response format');
  });
});
