import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useHandleCheckboxChange } from './useHandleCheckboxChange';

describe('useHandleCheckboxChange', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      // empty
    });
  });

  it('should initialize with empty array if no localStorage data exists', () => {
    const { result } = renderHook(() => useHandleCheckboxChange());

    expect(result.current.selectedValues).toEqual([]);
  });

  it('should load initial values from localStorage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(
      JSON.stringify(['Apple', 'Banana'])
    );
    const { result } = renderHook(() => useHandleCheckboxChange());

    expect(result.current.selectedValues).toEqual(['Apple', 'Banana']);
  });

  it('should add value to selectedValues when checkbox is checked', () => {
    const { result } = renderHook(() => useHandleCheckboxChange());

    act(() => {
      result.current.handleCheckboxChange('Apple', true);
    });

    expect(result.current.selectedValues).toEqual(['Apple']);
  });

  it('should remove value from selectedValues when checkbox is unchecked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(
      JSON.stringify(['Apple', 'Banana'])
    );
    const { result } = renderHook(() => useHandleCheckboxChange());

    act(() => {
      result.current.handleCheckboxChange('Apple', false);
    });

    expect(result.current.selectedValues).toEqual(['Banana']);
  });

  it('should not add duplicate values when checkbox is checked multiple times', () => {
    const { result } = renderHook(() => useHandleCheckboxChange());

    act(() => {
      result.current.handleCheckboxChange('Apple', true);
      result.current.handleCheckboxChange('Apple', true);
    });

    expect(result.current.selectedValues).toEqual(['Apple']);
  });

  it('should save selectedValues to localStorage on change', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { result } = renderHook(() => useHandleCheckboxChange());

    act(() => {
      result.current.handleCheckboxChange('Apple', true);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      'checkbox_group_selected_values',
      JSON.stringify(['Apple'])
    );
  });

  it('should handle multiple checkbox changes correctly', () => {
    const { result } = renderHook(() => useHandleCheckboxChange());

    act(() => {
      result.current.handleCheckboxChange('Apple', true);
      result.current.handleCheckboxChange('Banana', true);
      result.current.handleCheckboxChange('Apple', false);
    });

    expect(result.current.selectedValues).toEqual(['Banana']);
  });
});
