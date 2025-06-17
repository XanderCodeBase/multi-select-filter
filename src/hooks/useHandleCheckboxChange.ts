import { useCallback, useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'checkbox_group_selected_values';

// Hook that manages checkbox state and persists to localStorage
// Returns selected values and change handler
export function useHandleCheckboxChange() {
  const [selectedValues, setSelectedValues] = useState<string[]>(() => {
    // Load from localStorage on first load
    const item = localStorage.getItem(LOCAL_STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  });

  // Write to localStorage on change
  useEffect(
    () =>
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedValues)),
    [selectedValues]
  );

  // Handle changes in checked state and update selectedValues
  const handleCheckboxChange = useCallback(
    (value: string, checked: boolean) =>
      setSelectedValues(prev => {
        const set = new Set(prev);
        if (checked) {
          if (set.has(value)) return prev; // Early return if value exists
          set.add(value);
        } else {
          set.delete(value);
        }
        return [...set];
      }),
    []
  );

  return { selectedValues, handleCheckboxChange };
}
