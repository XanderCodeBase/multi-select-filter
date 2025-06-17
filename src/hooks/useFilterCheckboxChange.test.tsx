import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useFilterCheckboxChange } from './useFilterCheckboxChange';

describe('useFilterCheckboxChange', () => {
  const fruitOptions: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
    'Strawberry',
    'Mango',
    'Blueberry',
  ];

  it('should filter options based on query', () => {
    const { result } = renderHook(() => useFilterCheckboxChange(fruitOptions));

    act(() => {
      result.current.setQuery('Ap');
    });

    expect(result.current.filteredValues).toEqual(['Apple']);

    act(() => {
      result.current.setQuery('B');
    });

    expect(result.current.filteredValues).toEqual(['Banana', 'Blueberry']);
  });

  it('should return empty array when no options match query', () => {
    const { result } = renderHook(() => useFilterCheckboxChange(fruitOptions));

    act(() => {
      result.current.setQuery('X');
    });

    expect(result.current.filteredValues).toEqual([]);
  });

  it('should return all options when query is empty', () => {
    const { result } = renderHook(() => useFilterCheckboxChange(fruitOptions));

    expect(result.current.filteredValues).toEqual(fruitOptions);

    act(() => {
      result.current.setQuery('');
    });

    expect(result.current.filteredValues).toEqual(fruitOptions);

    act(() => {
      result.current.setQuery(' ');
    });

    expect(result.current.filteredValues).toEqual(fruitOptions);
  });

  it('should return empty array when options are empty', () => {
    const { result } = renderHook(() => useFilterCheckboxChange([]));

    expect(result.current.filteredValues).toEqual([]);
  });
});
