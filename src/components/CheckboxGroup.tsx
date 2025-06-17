import { Checkbox } from './Checkbox';

interface CheckboxGroupProps {
  options: string[];
  filteredValues: string[];
  selectedValues: string[];
  handleCheckboxChange: (value: string, checked: boolean) => void;
}

// CheckboxGroup component that renders a list of styled checkboxes
export const CheckboxGroup = ({
  options,
  filteredValues,
  selectedValues,
  handleCheckboxChange,
}: CheckboxGroupProps) => {
  // Sort options, checked first
  const sortedOptions = [...options].sort((a, b) => {
    const aChecked = selectedValues.includes(a);
    const bChecked = selectedValues.includes(b);
    return Number(bChecked) - Number(aChecked);
  });

  return (
    <div className="space-y-2">
      {sortedOptions.map(option => (
        <Checkbox
          key={option}
          value={option}
          hidden={!filteredValues.includes(option)}
          checked={selectedValues.includes(option)}
          onChange={checked => handleCheckboxChange(option, checked)}
        />
      ))}
    </div>
  );
};
