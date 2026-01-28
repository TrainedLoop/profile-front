import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

function getSystemTheme(): Theme {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function applyTheme(theme: Theme) {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
}

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: getSystemTheme(),
      setTheme: theme => {
        set({ theme });
        applyTheme(theme);
      },
      toggleTheme: () => {
        set(state => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          applyTheme(newTheme);
          return { theme: newTheme };
        });
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => state => {
        if (state?.theme) {
          applyTheme(state.theme);
        } else {
          applyTheme(getSystemTheme());
        }
      },
    },
  ),
);

// Apply theme immediately to prevent flash (before React hydration)
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('theme-storage');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.state?.theme) {
        applyTheme(parsed.state.theme);
      } else {
        applyTheme(getSystemTheme());
      }
    } catch {
      applyTheme(getSystemTheme());
    }
  } else {
    applyTheme(getSystemTheme());
  }
}
