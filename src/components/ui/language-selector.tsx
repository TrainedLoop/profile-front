import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/use-language';
import { cn } from '@/lib/utils';

export function LanguageSelector() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
    { code: 'pt' as const, label: 'Português', flag: '🇧🇷' },
  ] as const;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t('language.selectLanguageAriaLabel')}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('language.selectLanguage')}</DialogTitle>
          <DialogDescription>{t('language.selectLanguageDescription')}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4">
          {languages.map(lang => (
            <Button
              key={lang.code}
              variant={language === lang.code ? 'default' : 'outline'}
              className={cn(
                'w-full justify-start',
                language === lang.code && 'bg-primary text-primary-foreground',
              )}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="mr-2 text-lg">{lang.flag}</span>
              {lang.label}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
