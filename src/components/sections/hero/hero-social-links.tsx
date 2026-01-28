import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { SourceCodeHover } from '@/components/ui/source-code-hover';
import { SOCIAL_LINKS } from './constants';

export function HeroSocialLinks() {
  const { t } = useTranslation();

  return (
    <SourceCodeHover
      filePath="components/sections/hero/hero-social-links.tsx"
      fileName="hero-social-links.tsx"
      className="flex items-center justify-center gap-4 pt-4"
    >
      {SOCIAL_LINKS.map(({ href, icon: Icon, ariaLabelKey, external }) => (
        <Button key={href} variant="ghost" size="icon" className="h-10 w-10" asChild>
          <a
            href={href}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            aria-label={t(ariaLabelKey)}
          >
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </SourceCodeHover>
  );
}
