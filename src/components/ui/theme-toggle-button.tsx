import { Moon, Sun } from 'lucide-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ThemeToggleButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'onToggle'
> {
  isDark?: boolean;
  onToggle?: (isDark: boolean) => void;
}

export const ThemeToggleButton = React.forwardRef<HTMLButtonElement, ThemeToggleButtonProps>(
  ({ isDark: controlledIsDark, onToggle, className, ...props }, ref) => {
    const [internalIsDark, setInternalIsDark] = React.useState(false);

    const isDark = controlledIsDark !== undefined ? controlledIsDark : internalIsDark;

    const handleClick = () => {
      const newValue = !isDark;
      if (controlledIsDark === undefined) {
        setInternalIsDark(newValue);
      }
      onToggle?.(newValue);
    };

    return (
      <button
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className={cn(
          'relative inline-flex h-10 w-10 items-center justify-center',
          'rounded-lg text-sm font-medium',
          'bg-primary text-primary-foreground',
          'cursor-pointer',
          'hover:bg-primary/90',
          'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:pointer-events-none disabled:opacity-50',
          'transition-colors',
          className,
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <Sun
          className={cn(
            'h-5 w-5 transition-all duration-300',
            isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90',
          )}
        />
        <Moon
          className={cn(
            'absolute h-5 w-5 transition-all duration-300',
            isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0',
          )}
        />
      </button>
    );
  },
);

ThemeToggleButton.displayName = 'ThemeToggleButton';

export default ThemeToggleButton;
