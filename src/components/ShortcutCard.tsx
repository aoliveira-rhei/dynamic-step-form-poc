import { Shortcut } from '../types/shortcut';

interface ShortcutCardProps {
  shortcut: Shortcut;
  onClick: (shortcut: Shortcut) => void;
}

export const ShortcutCard = ({ shortcut, onClick }: ShortcutCardProps) => {
  return (
    <button
      onClick={() => onClick(shortcut)}
      className="bg-white border-2 border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition-all text-left"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <img
            src={shortcut.icon}
            alt={shortcut.label}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              // Fallback se a imagem não carregar
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-1">{shortcut.label}</h3>
          <p className="text-sm text-gray-600 mb-2">{shortcut.description}</p>

          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
              {shortcut.category.icon && (
                <img
                  src={shortcut.category.icon}
                  alt=""
                  className="w-3 h-3"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              {shortcut.category.label}
            </span>
            <span className="text-xs text-gray-500">Agent: {shortcut.agent}</span>
          </div>
        </div>
      </div>
    </button>
  );
};
