import { Linkedin, Github, Mail } from 'lucide-react';

export const TECH_STACK = ['React', 'TypeScript', 'C#', 'React Native', 'Node.js'] as const;

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/daniel-porto',
    icon: Linkedin,
    ariaLabelKey: 'hero.social.linkedin' as const,
    external: true,
  },
  {
    href: 'https://github.com/dankobaia',
    icon: Github,
    ariaLabelKey: 'hero.social.github' as const,
    external: true,
  },
  {
    href: 'mailto:contato@danielporto.com.br',
    icon: Mail,
    ariaLabelKey: 'hero.social.email' as const,
    external: false,
  },
] as const;

export const SECTION_IDS = {
  contact: 'contact',
  projects: 'projects',
  metrics: 'site-metrics',
} as const;

export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/daniel-porto';
