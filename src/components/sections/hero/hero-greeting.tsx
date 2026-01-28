import { useTranslation } from 'react-i18next';
import { SourceCodeHover } from '@/components/ui/source-code-hover';

export function HeroGreeting() {
  const { t } = useTranslation();

  return (
    <SourceCodeHover
      filePath="components/sections/hero/hero-greeting.tsx"
      fileName="hero-greeting.tsx"
      className="space-y-1"
    >
      <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase sm:text-base">
        {t('hero.greeting')}
      </p>
    </SourceCodeHover>
  );
}
