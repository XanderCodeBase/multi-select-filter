import { sortCheckedFirst } from '../util';
import { Checkbox } from './index.ts';

interface CheckboxGroupProps {
  options: string[];
  filteredValues: string[];
  selectedValues: string[];
  handleCheckboxChange: (value: string, checked: boolean) => void;
}

// CheckboxGroup component that renders a list of styled checkboxes
// Sorted on checked with a divider between them
export const CheckboxGroup = ({
  options,
  filteredValues,
  selectedValues,
  handleCheckboxChange,
}: CheckboxGroupProps) => {
  // Sort options, checked first
  const sortedOptions = sortCheckedFirst(options, selectedValues);

  // Divider variables
  let hasChecked = false,
    dividerRendered = false;

  return (
    <div className="space-y-2">
      {sortedOptions.map(option => {
        const isVisible = filteredValues.includes(option);
        const isChecked = selectedValues.includes(option);

        // Check if a visible checked item has been rendered
        if (isVisible && isChecked) hasChecked = true;

        // Check if divider must be rendered
        // After a visible checked item and before a visible unchecked item
        const showDivider =
          hasChecked && !dividerRendered && isVisible && !isChecked;

        // Mark divider has been rendered
        if (showDivider) dividerRendered = true;

        return (
          <div key={option}>
            {showDivider && <hr className="my-2 border-gray-300" />}
            <Checkbox
              value={option}
              hidden={!isVisible}
              checked={isChecked}
              onChange={checked => handleCheckboxChange(option, checked)}
            />
          </div>
        );
      })}
    </div>
  );
};
