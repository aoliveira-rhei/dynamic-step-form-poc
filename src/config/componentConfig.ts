import { ComponentConfig } from '../types/form';

export const componentConfigMap: Record<string, ComponentConfig> = {
  format_picker: {
    columns: 6,
    display_size: '128px',
  },
  // Adicione outros mapeamentos aqui conforme necessário
};

export const getComponentConfig = (id: string): ComponentConfig | undefined => {
  return componentConfigMap[id];
};
