# Projects Section

Seção de projetos profissionais com suporte a internacionalização (i18n).

## Estrutura de Arquivos

```
projects/
├── README.md                    # Documentação
├── index.tsx                    # Componente principal
├── types.ts                     # Tipos TypeScript
├── constants.ts                 # Constantes e estruturas de dados
├── data.ts                      # Dados das empresas e projetos
├── company-section.tsx          # Componente de seção da empresa
├── project-card.tsx             # Componente de card do projeto
└── highlight-carousel.tsx       # Carrossel de highlights
```

## Como Adicionar uma Nova Empresa

1. **Adicionar constantes** em `constants.ts`:

```typescript
export const COMPANY_IDS = {
  PURPLE_METRICS: 'purple-metrics',
  NEW_COMPANY: 'new-company', // novo
} as const;
```

2. **Adicionar dados** em `data.ts`:

```typescript
export const COMPANIES: Company[] = [
  // ... empresas existentes
  {
    id: COMPANY_IDS.NEW_COMPANY,
    name: 'newCompany', // deve corresponder à chave no JSON de tradução
    role: 'newCompany',
    period: 'newCompany',
    location: 'newCompany',
    description: 'newCompany',
    projects: [
      /* projetos */
    ],
  },
];
```

3. **Adicionar traduções** em `src/locales/pt/translation.json` e `src/locales/en/translation.json`:

```json
{
  "projects": {
    "companies": {
      "newCompany": {
        "name": "Nome da Empresa",
        "role": "Cargo",
        "period": "Período",
        "location": "Localização",
        "description": "Descrição da empresa",
        "projects": {
          "projectId": {
            "name": "Nome do Projeto",
            "description": "Descrição do projeto",
            "categories": {
              "categoryId": {
                "name": "Nome da Categoria",
                "items": ["Item 1", "Item 2"]
              }
            }
          }
        }
      }
    }
  }
}
```

## Como Adicionar um Novo Projeto

1. **Adicionar constantes** em `constants.ts`:

```typescript
export const PROJECT_IDS = {
  PURPLE_DASHBOARD_V2: 'purpleDashboardV2',
  NEW_PROJECT: 'newProject', // novo
} as const;
```

2. **Adicionar tecnologias** (se necessário) em `constants.ts`:

```typescript
export const NEW_PROJECT_TECHNOLOGIES = ['React', 'TypeScript'] as const;
```

3. **Adicionar categorias** em `constants.ts`:

```typescript
export const NEW_PROJECT_CATEGORIES = [
  {
    category: CATEGORY_IDS.ARCHITECTURE,
    items: ['item1', 'item2'],
  },
] as const;
```

4. **Adicionar ao data.ts**:

```typescript
projects: [
  {
    name: PROJECT_IDS.NEW_PROJECT,
    description: PROJECT_IDS.NEW_PROJECT,
    technologies: [...NEW_PROJECT_TECHNOLOGIES],
    highlightCategories: [...NEW_PROJECT_CATEGORIES],
  },
];
```

5. **Adicionar traduções** nos arquivos JSON seguindo a estrutura acima.

## Traduções

As traduções são feitas diretamente usando `useTranslation` do `react-i18next`:

```typescript
const { t } = useTranslation();

// Traduzir campos da empresa
const companyName = t(`projects.companies.${companyId}.name`);

// Traduzir campos do projeto
const projectName = t(`projects.companies.${companyId}.projects.${projectId}.name`);

// Traduzir categorias
const categoryName = t(
  `projects.companies.${companyId}.projects.${projectId}.categories.${categoryId}.name`,
);
```

## Convenções

- **IDs**: Use kebab-case para IDs (`purple-metrics`)
- **Chaves de tradução**: Use camelCase para chaves no JSON (`purpleMetrics`)
- **Constantes**: Use UPPER_SNAKE_CASE para constantes (`PURPLE_METRICS`)
- **Tom das traduções**: Use primeira pessoa para indicar que você desenvolveu ("Desenvolvi...", "Implementei...")

## Manutenção

- Para adicionar novas empresas/projetos, siga a estrutura existente
- Mantenha as traduções sincronizadas entre PT e EN
- Use os hooks e utilitários fornecidos para evitar duplicação de código
- Execute `pnpm i18n:interface` após adicionar novas traduções para gerar tipos TypeScript
