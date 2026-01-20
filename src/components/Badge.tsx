import { FormStep } from '../types/form';

interface BadgeProps {
  step: FormStep;
  onClick: (step: FormStep) => void;
  isActive?: boolean;
}

export const Badge = ({ step, onClick, isActive }: BadgeProps) => {
  const label = step.label || step.displayValue || step.id;

  return (
    <button
      onClick={() => onClick(step)}
      className={`px-4 py-2 rounded-lg border-2 ${isActive
        ? 'bg-blue-500 text-white border-blue-500'
        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
        }`}
    >
      {label}
    </button>
  );
};
