import { FormStep } from './form';

export interface ShortcutCategory {
  label: string;
  icon: string;
}

export interface Shortcut {
  id: string;
  label: string;
  description: string;
  icon: string;
  agent: string;
  category: ShortcutCategory;
  tree: FormStep | null;
}

export interface ShortcutsResponse {
  shortcuts: Shortcut[];
}
