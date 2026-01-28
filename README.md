# Daniel Porto - Portfolio

Personal portfolio built with React, TypeScript, and Tailwind CSS.

Portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS.

---

## 🇺🇸 English (EN-US)

### 📋 About the Project

This is a personal portfolio developed to showcase projects, experiences, and knowledge in software development. The project uses modern technologies and high-quality development tools to ensure clean, performant, and scalable code.

### 📦 Package Manager

This repository uses **Yarn** (`yarn.lock` is committed). Prefer running commands with Yarn.

### 🚀 Main Technologies

#### **React 19.2.0**

- JavaScript library for building user interfaces
- Latest version with performance improvements and new APIs
- Native support for Server Components and better state management

#### **TypeScript 5.9.3**

- JavaScript superset with static typing
- Improves development experience with autocomplete and compile-time error detection
- Configured with strict mode for maximum type safety

#### **Vite 7.2.4**

- Extremely fast build tool for frontend development
- Instant Hot Module Replacement (HMR)
- Optimized production builds with automatic code splitting

#### **Tailwind CSS 4.1.18**

- Utility-first CSS framework
- Native integration with Vite through official plugin
- Customizable design system with CSS variables

### 📦 Libraries and Dependencies

#### **Production Dependencies**

- **`i18next`**: Internationalization engine
- **`react-i18next`**: React bindings for i18next
- **`@tailwindcss/vite`** (^4.1.18): Official Tailwind CSS plugin for Vite
- **`@radix-ui/react-dialog`**: Accessible dialog primitives (used by shadcn/ui `Dialog`)
- **`@radix-ui/react-slot`**: Slot primitive (used by shadcn/ui `Button`)
- **`class-variance-authority`** (^0.7.1): Utility for managing CSS class variants in a type-safe way
- **`clsx`** (^2.1.1): Utility function for conditionally constructing class strings
- **`lucide-react`** (^0.563.0): Modern and lightweight icon library
- **`prism-react-renderer`**: Lightweight syntax highlighting for the source code viewer
- **`react`** (^19.2.0): Main React library
- **`react-dom`** (^19.2.0): React renderer for DOM
- **`tailwind-merge`** (^3.4.0): Utility for merging Tailwind classes without conflicts
- **`tailwindcss`** (^4.1.18): Utility-first CSS framework
- **`zustand`**: Global state management (theme persistence)

#### **Development Dependencies**

- **`@eslint/js`** (^9.39.1): ESLint base configuration
- **`@types/node`** (^25.0.10): TypeScript types for Node.js
- **`@types/react`** (^19.2.5): TypeScript types for React
- **`@types/react-dom`** (^19.2.3): TypeScript types for React DOM
- **`@vitejs/plugin-react`** (^5.1.1): Official Vite plugin for React
- **`babel-plugin-react-compiler`** (^1.0.0): Experimental React compiler for automatic optimizations
- **`eslint`** (^9.39.1): JavaScript/TypeScript linter
- **`eslint-config-prettier`** (^10.1.8): Disables ESLint rules that conflict with Prettier
- **`eslint-plugin-prettier`** (^5.5.5): Runs Prettier as an ESLint rule
- **`eslint-plugin-react-hooks`** (^7.0.1): ESLint rules for React Hooks
- **`eslint-plugin-react-refresh`** (^0.4.24): Support for React Fast Refresh
- **`globals`** (^16.5.0): Global variables for ESLint
- **`prettier`** (^3.8.1): Code formatter
- **`prettier-plugin-tailwindcss`** (^0.7.2): Prettier plugin for sorting Tailwind classes
- **`tw-animate-css`** (^1.4.0): CSS animations for Tailwind
- **`typescript-eslint`** (^8.46.4): TypeScript integration with ESLint

### ⚙️ Configurations

#### **Vite (`vite.config.ts`)**

- React plugin with React Compiler support
- Integrated Tailwind CSS plugin
- Path alias `@` configured to `./src`

#### **TypeScript (`tsconfig.json` and `tsconfig.app.json`)**

- Target: ES2022
- Strict mode enabled
- Module resolution: bundler
- Path aliases: `@/*` → `./src/*`
- Strict checks: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

#### **ESLint (`eslint.config.js`)**

- Flat config (ESLint 9+)
- TypeScript ESLint integration
- Rules for React Hooks
- Fast Refresh support
- Prettier integration
- Ignores `dist` directory

#### **Prettier (`.prettierrc`)**

- Single quotes
- Semicolons required
- Trailing comma: all
- Tab width: 2 spaces
- Print width: 100 characters
- Arrow parens: avoid
- Tailwind CSS plugin for automatic class sorting

#### **shadcn/ui (`components.json`)**

- Style: New York
- Base color: neutral
- CSS variables enabled
- Icon library: Lucide
- Aliases configured for components, utils, hooks

### 🛠️ Available Scripts

```bash
# Install
yarn

# Development
yarn dev          # Start development server
yarn preview      # Preview production build

# Build
yarn build        # Compile TypeScript and generate production build

# Code Quality
yarn lint         # Run ESLint
yarn lint:fix     # Run ESLint and fix issues automatically
yarn format       # Format code with Prettier
yarn format:check # Check formatting without modifying files

# i18n (types)
yarn i18n:interface # Generate TS types from locales (for IntelliSense in t('...'))
```

### 📁 Project Structure

```
daniel-porto/
├── public/              # Static files (images, icons, etc.)
│   ├── logo-dark.png
│   └── logo-light.png
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   │   └── header.tsx
│   │   └── ui/          # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── button-variants.ts
│   │       ├── dialog.tsx
│   │       ├── language-selector.tsx
│   │       ├── source-code-viewer.tsx
│   │       └── theme-toggle-button.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── use-language.ts
│   │   ├── use-source-code.ts
│   │   └── use-theme.ts
│   ├── lib/             # Utility functions and helpers
│   │   ├── i18n.ts
│   │   ├── react-i18next.d.ts
│   │   └── utils.ts
│   ├── locales/         # i18n translation files
│   │   ├── en/
│   │   │   └── translation.json
│   │   ├── pt/
│   │   │   └── translation.json
│   │   └── resources.d.ts
│   ├── stores/          # Zustand stores
│   │   ├── index.ts
│   │   └── theme-store.ts
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind CSS
├── .eslint.config.js    # ESLint configuration
├── .prettierrc          # Prettier configuration
├── components.json      # shadcn/ui configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # Base TypeScript configuration
├── tsconfig.app.json    # Application TypeScript configuration
└── vite.config.ts       # Vite configuration
```

### 🎯 Features

- ⚡ **Performance**: Vite for fast builds and instant HMR
- 🎨 **Styling**: Tailwind CSS with customizable design system
- 🔒 **Type Safety**: TypeScript with strict mode
- 🧹 **Code Quality**: ESLint + Prettier configured
- 🚀 **React Compiler**: Automatic performance optimizations
- 📦 **Components**: shadcn/ui for reusable components
- 🎯 **Path Aliases**: Clean imports with `@/`
- 🌗 **Theme**: Light/dark toggle with persistence (Zustand + `localStorage`)
- 🌍 **i18n**: English/Portuguese with `react-i18next` + generated TS types for translation keys
- 🧩 **Source Code Viewer**: Modal that displays component source code with syntax highlighting (Prism)

---

## 🇧🇷 Português (PT-BR)

### 📋 Sobre o Projeto

Este é um portfólio pessoal desenvolvido para apresentar projetos, experiências e conhecimentos em desenvolvimento de software. O projeto utiliza tecnologias modernas e ferramentas de desenvolvimento de alta qualidade para garantir código limpo, performático e escalável.

### 📦 Gerenciador de Pacotes

Este repositório usa **Yarn** (`yarn.lock` está versionado). Dê preferência a executar os comandos com Yarn.

### 🚀 Tecnologias Principais

#### **React 19.2.0**

- Biblioteca JavaScript para construção de interfaces de usuário
- Versão mais recente com melhorias de performance e novas APIs
- Suporte nativo para Server Components e melhor gerenciamento de estado

#### **TypeScript 5.9.3**

- Superset do JavaScript com tipagem estática
- Melhora a experiência de desenvolvimento com autocomplete e detecção de erros em tempo de compilação
- Configurado com modo strict para máxima segurança de tipos

#### **Vite 7.2.4**

- Build tool extremamente rápido para desenvolvimento frontend
- Hot Module Replacement (HMR) instantâneo
- Build otimizado para produção com code splitting automático

#### **Tailwind CSS 4.1.18**

- Framework CSS utility-first
- Integração nativa com Vite através do plugin oficial
- Sistema de design customizável com variáveis CSS

### 📦 Bibliotecas e Dependências

#### **Dependências de Produção**

- **`i18next`**: Motor de internacionalização
- **`react-i18next`**: Integração do i18next com React
- **`@tailwindcss/vite`** (^4.1.18): Plugin oficial do Tailwind CSS para Vite
- **`@radix-ui/react-dialog`**: Primitivos acessíveis de Dialog (usado pelo shadcn/ui)
- **`@radix-ui/react-slot`**: Primitive Slot (usado pelo shadcn/ui `Button`)
- **`class-variance-authority`** (^0.7.1): Utilitário para gerenciar variantes de classes CSS de forma type-safe
- **`clsx`** (^2.1.1): Função utilitária para construir strings de classes condicionalmente
- **`lucide-react`** (^0.563.0): Biblioteca de ícones moderna e leve
- **`prism-react-renderer`**: Syntax highlighting leve para o visualizador de código
- **`react`** (^19.2.0): Biblioteca principal do React
- **`react-dom`** (^19.2.0): Renderizador do React para DOM
- **`tailwind-merge`** (^3.4.0): Utilitário para mesclar classes Tailwind sem conflitos
- **`tailwindcss`** (^4.1.18): Framework CSS utility-first
- **`zustand`**: Gerenciamento de estado global (persistência do tema)

#### **Dependências de Desenvolvimento**

- **`@eslint/js`** (^9.39.1): Configuração base do ESLint
- **`@types/node`** (^25.0.10): Tipos TypeScript para Node.js
- **`@types/react`** (^19.2.5): Tipos TypeScript para React
- **`@types/react-dom`** (^19.2.3): Tipos TypeScript para React DOM
- **`@vitejs/plugin-react`** (^5.1.1): Plugin oficial do Vite para React
- **`babel-plugin-react-compiler`** (^1.0.0): Compilador experimental do React para otimizações automáticas
- **`eslint`** (^9.39.1): Linter JavaScript/TypeScript
- **`eslint-config-prettier`** (^10.1.8): Desabilita regras do ESLint que conflitam com Prettier
- **`eslint-plugin-prettier`** (^5.5.5): Executa Prettier como regra do ESLint
- **`eslint-plugin-react-hooks`** (^7.0.1): Regras do ESLint para React Hooks
- **`eslint-plugin-react-refresh`** (^0.4.24): Suporte para Fast Refresh do React
- **`globals`** (^16.5.0): Variáveis globais para ESLint
- **`prettier`** (^3.8.1): Formatador de código
- **`prettier-plugin-tailwindcss`** (^0.7.2): Plugin do Prettier para ordenar classes Tailwind
- **`tw-animate-css`** (^1.4.0): Animações CSS para Tailwind
- **`typescript-eslint`** (^8.46.4): Integração TypeScript com ESLint

### ⚙️ Configurações

#### **Vite (`vite.config.ts`)**

- Plugin React com suporte ao React Compiler
- Plugin Tailwind CSS integrado
- Alias de caminho `@` configurado para `./src`

#### **TypeScript (`tsconfig.json` e `tsconfig.app.json`)**

- Target: ES2022
- Modo strict habilitado
- Module resolution: bundler
- Path aliases: `@/*` → `./src/*`
- Verificações rigorosas: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

#### **ESLint (`eslint.config.js`)**

- Configuração flat config (ESLint 9+)
- Integração com TypeScript ESLint
- Regras para React Hooks
- Suporte para Fast Refresh
- Integração com Prettier
- Ignora diretório `dist`

#### **Prettier (`.prettierrc`)**

- Aspas simples
- Ponto e vírgula obrigatório
- Trailing comma: all
- Tab width: 2 espaços
- Print width: 100 caracteres
- Arrow parens: avoid
- Plugin Tailwind CSS para ordenação automática de classes

#### **shadcn/ui (`components.json`)**

- Estilo: New York
- Base color: neutral
- CSS variables habilitadas
- Biblioteca de ícones: Lucide
- Aliases configurados para componentes, utils, hooks

### 🛠️ Scripts Disponíveis

```bash
# Instalar
yarn

# Desenvolvimento
yarn dev          # Inicia servidor de desenvolvimento
yarn preview      # Preview da build de produção

# Build
yarn build        # Compila TypeScript e gera build de produção

# Qualidade de Código
yarn lint         # Executa ESLint
yarn lint:fix     # Executa ESLint e corrige problemas automaticamente
yarn format       # Formata código com Prettier
yarn format:check # Verifica formatação sem modificar arquivos

# i18n (tipos)
yarn i18n:interface # Gera tipos TS a partir das traduções (autocomplete no t('...'))
```

### 📁 Estrutura do Projeto

```
daniel-porto/
├── public/              # Arquivos estáticos (imagens, ícones, etc.)
│   ├── logo-dark.png
│   └── logo-light.png
├── src/
│   ├── components/      # Componentes React
│   │   ├── layout/      # Componentes de layout (Header, Footer, etc.)
│   │   │   └── header.tsx
│   │   └── ui/          # Componentes shadcn/ui
│   │       ├── button.tsx
│   │       ├── button-variants.ts
│   │       ├── dialog.tsx
│   │       ├── language-selector.tsx
│   │       ├── source-code-viewer.tsx
│   │       └── theme-toggle-button.tsx
│   ├── hooks/           # Hooks customizados do React
│   │   ├── use-language.ts
│   │   ├── use-source-code.ts
│   │   └── use-theme.ts
│   ├── lib/             # Funções utilitárias e helpers
│   │   ├── i18n.ts
│   │   ├── react-i18next.d.ts
│   │   └── utils.ts
│   ├── locales/         # Arquivos de tradução i18n
│   │   ├── en/
│   │   │   └── translation.json
│   │   ├── pt/
│   │   │   └── translation.json
│   │   └── resources.d.ts
│   ├── stores/          # Stores Zustand
│   │   ├── index.ts
│   │   └── theme-store.ts
│   ├── App.tsx          # Componente raiz
│   ├── main.tsx         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais e Tailwind CSS
├── .eslint.config.js    # Configuração ESLint
├── .prettierrc          # Configuração Prettier
├── components.json      # Configuração shadcn/ui
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript base
├── tsconfig.app.json    # Configuração TypeScript da aplicação
└── vite.config.ts       # Configuração Vite
```

### 🎯 Recursos

- ⚡ **Desempenho**: Vite para builds rápidos e HMR instantâneo
- 🎨 **Estilização**: Tailwind CSS com sistema de design customizável
- 🔒 **Type Safety**: TypeScript com modo strict
- 🧹 **Code Quality**: ESLint + Prettier configurados
- 🚀 **React Compiler**: Otimizações automáticas de performance
- 📦 **Componentes**: shadcn/ui para componentes reutilizáveis
- 🎯 **Path Aliases**: Imports limpos com `@/`
- 🌗 **Tema**: Toggle light/dark com persistência (Zustand + `localStorage`)
- 🌍 **i18n**: Inglês/Português com `react-i18next` + tipos TS gerados para as chaves de tradução
- 🧩 **Visualizador de Código**: Modal que exibe o código fonte do componente com syntax highlighting (Prism)

---

## 📝 License

© 2026 Daniel Porto. All rights reserved.
