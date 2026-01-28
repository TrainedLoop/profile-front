import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import { SourceCodeHover } from '@/components/ui/source-code-hover';

export function HeroNameTitle() {
  const { t } = useTranslation();

  return (
    <SourceCodeHover
      filePath="components/sections/hero/hero-name-title.tsx"
      fileName="hero-name-title.tsx"
      className="space-y-6"
    >
      <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        {t('hero.name')}
      </h1>
      <div className="flex flex-col items-center gap-3">
        <p className="text-muted-foreground text-xl font-semibold sm:text-2xl md:text-3xl">
          {t('hero.title')}
        </p>
        <div className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{t('hero.location')}</span>
        </div>
      </div>
    </SourceCodeHover>
  );
}
