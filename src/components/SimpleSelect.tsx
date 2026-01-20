import { FormStep } from '../types/form';

interface SimpleSelectProps {
  options: FormStep[];
  onSelect: (step: FormStep) => void;
}

export const SimpleSelect = ({ options, onSelect }: SimpleSelectProps) => {
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
      {options.map(option => (
        <option key={option.id} value={option.path}>
          {option.displayValue || option.label || option.id}
        </option>
      ))}
    </select>
  );
};
