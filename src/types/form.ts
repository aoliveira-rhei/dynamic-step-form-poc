export type ComponentType = 'root' | 'badge' | 'select_item';

export type ChildrenDisplayType = 'badge_list' | 'grouped_select' | 'select';

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
  childrenDisplayType?: ChildrenDisplayType;
  children: FormStep[] | null;
}

export interface SelectedStep {
  id: string;
  path: string;
  label: string;
  step: FormStep;
}
