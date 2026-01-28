import { useMemo } from 'react';
import { useThemeStore } from '@/stores/theme-store';

export function useTheme() {
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  const isDark = useMemo(() => theme === 'dark', [theme]);
  const isLight = useMemo(() => theme === 'light', [theme]);

  return { theme, setTheme, toggleTheme, isDark, isLight };
}
