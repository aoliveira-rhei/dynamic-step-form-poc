import { useState, useRef, useEffect } from 'react';
import { FormStep, ComponentConfig } from '../types/form';

interface GroupedSelectProps {
  options: FormStep[];
  onSelect: (step: FormStep) => void;
  config?: ComponentConfig;
}

export const GroupedSelect = ({ options, onSelect, config }: GroupedSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedOption, setSelectedOption] = useState<FormStep | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const grouped = options.reduce((acc, option) => {
    const group = option.uiGroup || 'Other';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {} as Record<string, FormStep[]>);

  const tabs = ['All', ...Object.keys(grouped)];

  const filteredOptions = activeTab === 'All'
    ? options
    : grouped[activeTab] || [];

  const handleOptionClick = (option: FormStep) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white text-left flex justify-between items-center"
      >
        <span>{selectedOption ? (selectedOption.displayValue || selectedOption.label || selectedOption.id) : 'Select an option...'}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Dropdown with Tabs */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
          {/* Tabs */}
          <div className="flex gap-2 px-2 pt-2 border-b border-gray-300 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 font-medium whitespace-nowrap transition-colors ${activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Options Grid */}
          <div className="max-h-60 overflow-y-auto p-2">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${config?.columns || 2}, minmax(0, 1fr))`
              }}
            >
              {filteredOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 text-left hover:bg-gray-100 transition-colors rounded border border-gray-200"
                  style={{
                    minHeight: config?.display_size || 'auto'
                  }}
                >
                  {option.displayValue || option.label || option.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
