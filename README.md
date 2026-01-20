# Dynamic Step Form POC

Este é um formulário dinâmico que renderiza steps baseado em dados mockados do backend.

## Como funciona

1. O usuário seleciona um "root badge" (Image, Ideas, Write)
2. Ao selecionar, os children do root são renderizados
3. Cada child pode ter diferentes tipos de componentes:
   - `mega_menu_grid`: Grid com grupos de opções
   - `dropdown_select`: Lista de opções selecionáveis
   - `image_style_picker`: Seletor de estilo com imagens
   - `toggle`: Toggle on/off

4. Quando o usuário seleciona uma opção que tem `config_steps`, os passos de configuração são renderizados

## Instalação

```bash
npm install
```

## Executar

```bash
npm run dev
```

O app estará disponível em `http://localhost:3000`

## Estrutura

- `src/types.ts`: Tipos TypeScript
- `src/mockData.ts`: Dados mockados do backend
- `src/components/DynamicStepForm.tsx`: Componente principal do formulário
- `src/App.tsx`: App principal
- `src/main.tsx`: Entry point
