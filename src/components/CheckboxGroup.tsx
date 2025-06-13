import { Checkbox } from './Checkbox';

export interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (updatedValues: string[]) => void;
}

// CheckboxGroup component that renders a list of styled checkboxes
export const CheckboxGroup = ({
  options,
  selectedValues,
  onChange,
}: CheckboxGroupProps) => {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter(v => v !== value));
    }
  };

  // Sort options where checked first
  const sortedOptions = [...options].sort((a, b) => {
    const aChecked = selectedValues.includes(a.value);
    const bChecked = selectedValues.includes(b.value);
    return Number(bChecked) - Number(aChecked);
  });

  return (
    <div className="space-y-2">
      {sortedOptions.map(option => (
        <Checkbox
          key={option.value}
          id={option.value}
          label={option.label}
          checked={selectedValues.includes(option.value)}
          onChange={checked => handleCheckboxChange(option.value, checked)}
        />
      ))}
    </div>
  );
};
