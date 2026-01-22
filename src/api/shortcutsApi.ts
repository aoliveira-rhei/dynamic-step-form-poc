import { ShortcutsResponse, Shortcut } from '../types/shortcut';

export const fetchShortcuts = async (): Promise<ShortcutsResponse> => {
  const response = await fetch('/api/shortcuts');
  if (!response.ok) {
    throw new Error('Failed to fetch shortcuts');
  }
  return response.json();
};

export const fetchShortcutById = async (id: string): Promise<Shortcut> => {
  const response = await fetch(`/api/shortcuts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shortcut');
  }
  return response.json();
};
