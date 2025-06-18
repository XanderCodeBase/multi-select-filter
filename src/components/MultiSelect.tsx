import { useFilterCheckboxChange, useHandleCheckboxChange } from '../hooks';
import { CheckboxGroup, Input } from './index';

type MultiSelectProps = {
  options: string[];
};

// MultiSelect component that renders a filterable checkbox group with an input field for filtering
export const MultiSelect = ({ options }: MultiSelectProps) => {
  const { selectedValues, handleCheckboxChange } = useHandleCheckboxChange();
  const { filteredValues, setQuery } = useFilterCheckboxChange(options);

  return (
    <div className="relative space-y-6">
      {/* show counts for total selected and filtered items */}
      <div>
        <p className="absolute -top-5 right-0 space-x-2 text-sm text-gray-400 sm:-top-11">
          <span>Total: {options.length}</span>
          <span>Selected: {selectedValues.length}</span>
          <span>
            Filtered:{' '}
            {options.length === filteredValues.length
              ? 0
              : filteredValues.length}
          </span>
        </p>
      </div>

      <Input text="Zoek op ..." onChange={(value: string) => setQuery(value)} />

      <div className="max-h-52 min-h-52 overflow-y-auto">
        <CheckboxGroup
          options={options}
          filteredValues={filteredValues}
          selectedValues={selectedValues}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};
