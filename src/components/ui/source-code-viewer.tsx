import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';
import { Highlight, themes, type Language, type RenderProps } from 'prism-react-renderer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSourceCode } from '@/hooks/use-source-code';
import { useTheme } from '@/hooks/use-theme';

interface SourceCodeViewerProps {
  sourceCode?: string;
  filePath?: string;
  fileName?: string;
  language?: string;
  trigger?: React.ReactNode;
  className?: string;
}

export function SourceCodeViewer({
  sourceCode: providedSourceCode,
  filePath,
  fileName,
  language = 'tsx',
  trigger,
  className,
}: SourceCodeViewerProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();
  const loadedSourceCode = useSourceCode(filePath || '');

  // Use provided sourceCode or loaded from filePath
  const sourceCode = providedSourceCode || loadedSourceCode || '';

  // Extract fileName from filePath if not provided and detect language from extension
  const displayFileName =
    fileName || (filePath ? filePath.split('/').pop() || 'source.tsx' : 'source.tsx');

  // Detect language from file extension if not provided
  const detectedLanguage = useMemo(
    () =>
      language ||
      (displayFileName.includes('.') ? displayFileName.split('.').pop()?.toLowerCase() : 'tsx') ||
      'tsx',
    [language, displayFileName],
  );

  // Use predefined themes from prism-react-renderer
  const theme = useMemo(() => (isDark ? themes.dracula : themes.github), [isDark]);

  const defaultTrigger = (
    <Button variant="ghost" size="icon" className={cn('h-8 w-8', className)}>
      <Code className="h-4 w-4" />
      <span className="sr-only">{t('header.viewSourceCode')}</span>
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="flex max-h-[90vh] flex-col p-0 sm:max-w-[90vw]">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>
            {t('sourceCode.title')}: {displayFileName}
          </DialogTitle>
          <DialogDescription>{t('sourceCode.description')}</DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            'mx-6 mb-6 flex-1 overflow-auto rounded-lg border',
            isDark ? 'bg-muted/20' : 'bg-muted',
          )}
        >
          {sourceCode ? (
            <Highlight code={sourceCode} language={detectedLanguage as Language} theme={theme}>
              {({
                className: prismClassName,
                style,
                tokens,
                getLineProps,
                getTokenProps,
              }: RenderProps) => (
                <pre
                  className={cn(prismClassName, 'm-0 min-h-full p-4 text-sm')}
                  style={{ ...style, backgroundColor: 'transparent' }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} className="flex gap-4">
                      <span className="text-muted-foreground w-8 shrink-0 text-right select-none">
                        {i + 1}
                      </span>
                      <span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          ) : (
            <div className="text-muted-foreground flex items-center justify-center py-8">
              {t('sourceCode.loading')}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
