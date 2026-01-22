import { useEffect, useState } from 'react';
import { Shortcut } from '../types/shortcut';
import { fetchShortcuts } from '../api/shortcutsApi';
import { ShortcutCard } from './ShortcutCard';

interface ShortcutsListProps {
  onShortcutSelect: (shortcutId: string) => void;
}

export const ShortcutsList = ({ onShortcutSelect }: ShortcutsListProps) => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadShortcuts();
  }, []);

  const loadShortcuts = async () => {
    try {
      setIsLoading(true);
      const response = await fetchShortcuts();
      setShortcuts(response.shortcuts);
    } catch (err) {
      setError('Failed to load shortcuts');
      console.error('Error loading shortcuts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShortcutClick = (shortcut: Shortcut) => {
    onShortcutSelect(shortcut.id);
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading shortcuts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (shortcuts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Quick Shortcuts</h2>
      <p className="text-gray-600 mb-6">Get started quickly with these pre-configured setups</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shortcuts.map((shortcut) => (
          <ShortcutCard
            key={shortcut.id}
            shortcut={shortcut}
            onClick={handleShortcutClick}
          />
        ))}
      </div>
    </div>
  );
};
