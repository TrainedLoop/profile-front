import { useTranslation } from 'react-i18next';
import { SourceCodeHover } from '@/components/ui/source-code-hover';

export function HeroDescription() {
  const { t } = useTranslation();

  return (
    <SourceCodeHover
      filePath="components/sections/hero/hero-description.tsx"
      fileName="hero-description.tsx"
      className="mx-auto max-w-3xl space-y-4"
    >
      <p className="text-muted-foreground text-lg leading-relaxed sm:text-xl md:text-2xl">
        {t('hero.description')}
      </p>
      <p className="text-muted-foreground/80 mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
        {t('hero.subdescription')}
      </p>
    </SourceCodeHover>
  );
}
