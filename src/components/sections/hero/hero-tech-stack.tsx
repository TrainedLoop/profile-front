import { useTranslation } from 'react-i18next';
import { SourceCodeHover } from '@/components/ui/source-code-hover';
import { TECH_STACK } from './constants';

export function HeroTechStack() {
  const { t } = useTranslation();

  return (
    <SourceCodeHover
      filePath="components/sections/hero/hero-tech-stack.tsx"
      fileName="hero-tech-stack.tsx"
      className="flex flex-wrap items-center justify-center gap-3 pt-6"
    >
      <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase sm:text-sm">
        {t('hero.techStack')}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {TECH_STACK.map(tech => (
          <span
            key={tech}
            className="bg-muted text-muted-foreground hover:bg-muted/80 rounded-full px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </SourceCodeHover>
  );
}
