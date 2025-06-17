// Sorts options so that selected values come first
export function sortCheckedFirst(
  options: string[],
  selectedValues: string[]
): string[] {
  return [...options].sort((a, b) => {
    const aChecked = selectedValues.includes(a);
    const bChecked = selectedValues.includes(b);
    return Number(bChecked) - Number(aChecked);
  });
}
