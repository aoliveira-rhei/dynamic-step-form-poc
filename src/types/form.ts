export type ComponentType = 'root' | 'badge' | 'select_item';

export interface ComponentConfig {
  columns?: number;
  display_size?: string;
}

export interface FormStep {
  id: string;
  path: string;
  label?: string;
  displayKey?: string;
  displayValue?: string;
  icon: string | null;
  component: ComponentType;
  uiGroup: string | null;
  tier: string | null;
  isDefault: boolean | null;
  hasChildren: boolean;
  childrenCount?: number;
  children: FormStep[] | null;
}

export interface SelectedStep {
  id: string;
  path: string;
  label: string;
  step: FormStep;
}
