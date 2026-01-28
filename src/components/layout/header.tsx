import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/use-theme';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import { SourceCodeViewer } from '@/components/ui/source-code-viewer';
import { LanguageSelector } from '@/components/ui/language-selector';

export function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 border-border fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={isDark ? '/logo-dark.png' : '/logo-light.png'}
            alt={t('header.logoAlt')}
            className="h-8 w-auto sm:h-10"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <LanguageSelector />

          {/* Source Code Viewer */}
          <SourceCodeViewer filePath="components/layout/header.tsx" fileName="header.tsx" />

          {/* Theme Toggle */}
          <ThemeToggleButton
            isDark={isDark}
            onToggle={() => toggleTheme()}
            className="hover:bg-accent text-foreground bg-transparent"
            aria-label={isDark ? t('header.switchToLightMode') : t('header.switchToDarkMode')}
          />
        </div>
      </div>
    </header>
  );
}
