import { useTranslation } from 'react-i18next';
import { Mail, BarChart3, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SourceCodeHover } from '@/components/ui/source-code-hover';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { SECTION_IDS, LINKEDIN_PROFILE_URL } from './constants';

export function HeroCTAButtons() {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection();

  return (
    <SourceCodeHover
      filePath="components/sections/hero/hero-cta-buttons.tsx"
      fileName="hero-cta-buttons.tsx"
      className="space-y-4"
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="group relative w-full cursor-pointer sm:w-auto"
          onClick={() => scrollToSection(SECTION_IDS.contact)}
        >
          {t('hero.cta.contact')}
          <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="group w-full cursor-pointer sm:w-auto"
          onClick={() => scrollToSection(SECTION_IDS.projects)}
        >
          {t('hero.cta.viewProjects')}
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="group w-full cursor-pointer sm:w-auto"
          onClick={() => scrollToSection(SECTION_IDS.metrics)}
        >
          {t('hero.cta.viewMetrics')}
          <BarChart3 className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
        </Button>

        <Button variant="ghost" size="lg" className="group w-full sm:w-auto" asChild>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {t('hero.cta.downloadCV')}
          </a>
        </Button>
      </div>
    </SourceCodeHover>
  );
}
