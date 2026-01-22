import { FormStep, SelectedStep } from '../types/form';

export const processShortcutTree = (tree: FormStep): {
  selectedSteps: SelectedStep[];
  currentChildren: FormStep[];
} => {
  const selectedSteps: SelectedStep[] = [];
  let currentNode = tree;

  while (currentNode && currentNode.children && currentNode.children.length > 0) {
    selectedSteps.push({
      id: currentNode.id,
      path: currentNode.path,
      label: currentNode.label || currentNode.displayValue || currentNode.id,
      step: currentNode
    });

    currentNode = currentNode.children[0];
  }

  const lastStep = selectedSteps[selectedSteps.length - 1];
  const currentChildren = lastStep?.step.children || [];

  return { selectedSteps, currentChildren };
};
