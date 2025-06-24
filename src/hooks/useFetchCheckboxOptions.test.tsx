import type { ReactNode } from 'react';

import { MockedProvider, type MockedResponse } from '@apollo/client/testing';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useFetchCheckboxOptions } from './useFetchCheckboxOptions.ts';
import { GET_STRINGS } from './useFetchCheckboxOptions.ts';

// Create a wrapper component to provide Apollo Client
const createWrapper = (mocks: MockedResponse[] = []) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
  Wrapper.displayName = 'ApolloMockedProvider';

  return Wrapper;
};

describe('useFetchCheckboxOptions', () => {
  const mockOptions = ['Apple', 'Banana', 'Orange'];

  it('should fetch and decode options successfully', async () => {
    const mocks = [
      {
        request: {
          query: GET_STRINGS,
        },
        result: {
          data: {
            items: mockOptions,
          },
        },
      },
    ];

    const { result } = renderHook(() => useFetchCheckboxOptions(), {
      wrapper: createWrapper(mocks),
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockOptions);
    expect(result.current.error).toBeUndefined();
  });

  it('should handle bad request error', async () => {
    const errorMessage = 'Bad Request';
    const mocks = [
      {
        request: {
          query: GET_STRINGS,
        },
        error: new Error(errorMessage),
      },
    ];

    const { result } = renderHook(() => useFetchCheckboxOptions(), {
      wrapper: createWrapper(mocks),
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe(errorMessage);
  });

  it('should handle invalid response format', async () => {
    const mocks = [
      {
        request: {
          query: GET_STRINGS,
        },
        result: {
          data: {
            items: 'not an array', // Invalid format
          },
        },
      },
    ];

    const { result } = renderHook(() => useFetchCheckboxOptions(), {
      wrapper: createWrapper(mocks),
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toContain('Invalid response format');
  });
});
