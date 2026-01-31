import { Linkedin, Github } from 'lucide-react';
import cvPdfUrl from '@/assets/profile.pdf';

export const TECH_STACK = ['React', 'TypeScript', 'C#', 'React Native', 'Node.js'] as const;

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/daniel-porto',
    icon: Linkedin,
    ariaLabelKey: 'hero.social.linkedin' as const,
    external: true,
  },
  {
    href: 'https://github.com/trainedloop',
    icon: Github,
    ariaLabelKey: 'hero.social.github' as const,
    external: true,
  },
] as const;

export const SECTION_IDS = {
  contact: 'contact',
  projects: 'projects',
  metrics: 'site-metrics',
} as const;

export const CV_PDF_URL = cvPdfUrl;

export const CONTACT_EMAIL_URL = 'mailto:contato@danielporto.com.br';
