import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
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
  const { theme } = useTheme();
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

  // Select theme based on current theme - memoized to update when theme changes
  const syntaxTheme = useMemo(() => (theme === 'dark' ? dracula : oneLight), [theme]);

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
        <div className="mx-6 mb-6 flex-1 overflow-auto rounded-lg border">
          {sourceCode ? (
            <SyntaxHighlighter
              key={theme}
              language={detectedLanguage}
              style={syntaxTheme}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'transparent',
                fontSize: '0.875rem',
                lineHeight: '1.5',
              }}
              showLineNumbers
              wrapLines
              wrapLongLines
              PreTag="div"
            >
              {sourceCode}
            </SyntaxHighlighter>
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
