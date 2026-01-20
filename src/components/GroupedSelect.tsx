import { FormStep } from '../types/form';

interface GroupedSelectProps {
  options: FormStep[];
  onSelect: (step: FormStep) => void;
}

export const GroupedSelect = ({ options, onSelect }: GroupedSelectProps) => {
  const grouped = options.reduce((acc, option) => {
    const group = option.uiGroup || 'Other';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {} as Record<string, FormStep[]>);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPath = e.target.value;
    const selected = options.find(opt => opt.path === selectedPath);
    if (selected) {
      onSelect(selected);
    }
  };

  return (
    <select
      onChange={handleChange}
      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
      defaultValue=""
    >
      <option value="" disabled>Select an option...</option>
      {Object.entries(grouped).map(([groupName, groupOptions]) => (
        <optgroup key={groupName} label={groupName}>
          {groupOptions.map(option => (
            <option key={option.id} value={option.path}>
              {option.displayValue || option.label || option.id}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};
