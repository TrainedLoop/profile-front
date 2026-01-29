import type { Company } from './types';

/**
 * Companies data structure.
 * All string fields here are i18n keys that map
 * to the translations defined in the locale JSON files.
 */
export const COMPANIES: Company[] = [
  {
    id: 'purple-metrics',
    name: 'purpleMetrics',
    role: 'purpleMetrics',
    period: 'purpleMetrics',
    location: 'purpleMetrics',
    description: 'purpleMetrics',
    logoUrl: '/purplemetrics.svg',
    websiteUrl: 'https://www.purplemetrics.com.br/',
    projects: [
      {
        name: 'purpleDashboardV2',
        description: 'purpleDashboardV2',
        technologies: [
          'React 19',
          'TypeScript',
          'Vite',
          'React Router v7',
          'React Query',
          'Tailwind CSS',
          'Recharts',
          'Zustand',
          'i18next',
          'Storybook',
          'Docker',
        ],
        highlightCategories: [
          {
            category: 'architecture',
            items: ['0', '1', '2', '3'],
          },
          {
            category: 'dataFetching',
            items: ['0', '1', '2'],
          },
          {
            category: 'devops',
            items: ['0', '1', '2', '3', '4'],
          },
          {
            category: 'designSystem',
            items: ['0', '1'],
          },
          {
            category: 'quality',
            items: ['0', '1'],
          },
        ],
      },
    ],
  },
  {
    id: 'fu2re',
    name: 'fu2re',
    role: 'fu2re',
    period: 'fu2re',
    location: 'fu2re',
    description: 'fu2re',
    logoUrl: '/fu2re.jpg',
    websiteUrl: 'https://fu2re.com.br/',
    projects: [
      {
        name: 'smartVision',
        description: 'smartVision',
        technologies: [
          'React',
          'Redux',
          'Styled Components',
          'C#',
          '.NET 10',
          'MySQL',
          'MongoDB',
          'Hangfire',
          'Azure Queue',
          'Azure Container Apps',
          'CQRS',
        ],
        highlightCategories: [
          {
            category: 'backend',
            items: ['0', '1', '2', '3', '4', '5'],
          },
          {
            category: 'frontend',
            items: ['0', '1', '2'],
          },
          {
            category: 'devops',
            items: ['0', '1'],
          },
        ],
      },
      {
        name: 'smartAssets',
        description: 'smartAssets',
        technologies: ['React', 'Python', 'Bottle', 'PostgreSQL', 'Azure', 'GNSS'],
        highlightCategories: [
          {
            category: 'frontend',
            items: ['0', '1', '2', '3'],
          },
          {
            category: 'backend',
            items: ['0', '1', '2', '3', '4'],
          },
        ],
      },
    ],
  },
  {
    id: 'fulllab',
    name: 'fulllab',
    role: 'fulllab',
    period: 'fulllab',
    location: 'fulllab',
    description: 'fulllab',
    logoUrl: '/fulllab.jpg',
    websiteUrl: 'https://fulllab.com.br/',
    projects: [
      {
        name: 'mobfiq',
        description: 'mobfiq',
        technologies: [
          'C#',
          '.NET Core',
          '.NET 4.5',
          'Dependency Injection',
          'API REST',
          'MySQL',
          'Dapper',
        ],
        highlightCategories: [
          {
            category: 'architecture',
            items: ['0', '1'],
          },
          {
            category: 'integration',
            items: ['0', '1', '2', '3', '4'],
          },
        ],
      },
      {
        name: 'moblite',
        description: 'moblite',
        technologies: ['C#', '.NET Core', 'MongoDB', 'Selenium', 'Web Scraping'],
        highlightCategories: [
          {
            category: 'integration',
            items: ['0', '1', '2', '3'],
          },
        ],
      },
    ],
  },
];
