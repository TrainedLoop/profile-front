import { useEffect, useState, useMemo } from 'react';

// Pre-load all source files using import.meta.glob
// This works in both dev and production builds
// The glob pattern matches all TS/TSX/JS/JSX files relative to hooks/
// With ?raw query, returns Promise<{ default: string }>
const sourceFiles = import.meta.glob('../**/*.{ts,tsx,js,jsx}', {
  query: '?raw',
  eager: false,
}) as Record<string, () => Promise<{ default: string }>>;

/**
 * Hook to load source code from a file automatically
 * @param filePath - Path relative to src/ (e.g., 'components/layout/Header.tsx')
 * @returns The source code as a string, or null if loading
 */
export function useSourceCode(filePath: string | undefined): string | null {
  // Normalize the file path to match glob pattern
  const normalizedPath = useMemo(() => {
    if (!filePath) return null;

    let path = filePath;

    // Remove common prefixes
    if (path.startsWith('@/')) {
      path = path.slice(2);
    } else if (path.startsWith('/src/')) {
      path = path.slice(6);
    } else if (path.startsWith('src/')) {
      path = path.slice(5);
    }

    // Convert to glob pattern format (relative to hooks/)
    return `../${path}`;
  }, [filePath]);

  const [sourceCode, setSourceCode] = useState<string | null>(null);

  useEffect(() => {
    if (!normalizedPath) {
      // Use requestAnimationFrame to avoid synchronous setState
      const frame = requestAnimationFrame(() => {
        setSourceCode(null);
      });
      return () => cancelAnimationFrame(frame);
    }

    let cancelled = false;

    async function loadSourceCode() {
      // Type guard: normalizedPath is not null here
      const path = normalizedPath;
      if (!path) return;

      try {
        // Find matching file in the glob results
        const fileLoader = sourceFiles[path];

        if (!fileLoader) {
          console.warn(`Source file not found: ${path}`);
          if (!cancelled) setSourceCode(null);
          return;
        }

        // Load the file content
        // import.meta.glob with ?raw returns { default: string }
        const result = await fileLoader();
        const content = result.default;
        if (!cancelled) setSourceCode(content);
      } catch (error) {
        console.error(`Failed to load source code from ${filePath}:`, error);
        if (!cancelled) setSourceCode(null);
      }
    }

    loadSourceCode();

    return () => {
      cancelled = true;
    };
  }, [normalizedPath, filePath]);

  return sourceCode;
}
