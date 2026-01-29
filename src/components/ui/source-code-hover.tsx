import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Code } from 'lucide-react';

import { SourceCodeViewer } from '@/components/ui/source-code-viewer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SourceCodeHoverProps = {
  filePath: string;
  fileName?: string;
  className?: string;
  children: React.ReactNode;
};

const LONG_PRESS_MS = 450;
const MOVE_TOLERANCE_PX = 12;

export function SourceCodeHover({ filePath, fileName, className, children }: SourceCodeHoverProps) {
  const { t } = useTranslation();

  const [showOverlay, setShowOverlay] = useState(false);
  const pressTimerRef = useRef<number | null>(null);
  const startPointRef = useRef<{ x: number; y: number } | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showOverlay) return;

    function onDocumentPointerDown(e: PointerEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (overlayRef.current?.contains(target)) return;
      if (rootRef.current?.contains(target)) {
        // Tap anywhere else inside the block closes the overlay.
        setShowOverlay(false);
      }
    }

    document.addEventListener('pointerdown', onDocumentPointerDown as unknown as EventListener);
    return () => {
      document.removeEventListener(
        'pointerdown',
        onDocumentPointerDown as unknown as EventListener,
      );
    };
  }, [showOverlay]);

  function clearPressTimer() {
    if (pressTimerRef.current) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    // Only long-press on touch/pen. Desktop uses hover.
    if (e.pointerType !== 'touch' && e.pointerType !== 'pen') return;

    startPointRef.current = { x: e.clientX, y: e.clientY };
    clearPressTimer();

    pressTimerRef.current = window.setTimeout(() => {
      setShowOverlay(true);
      pressTimerRef.current = null;
    }, LONG_PRESS_MS);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!startPointRef.current) return;
    if (!pressTimerRef.current) return;

    const dx = e.clientX - startPointRef.current.x;
    const dy = e.clientY - startPointRef.current.y;
    if (Math.hypot(dx, dy) > MOVE_TOLERANCE_PX) {
      clearPressTimer();
      startPointRef.current = null;
    }
  }

  function onPointerUpOrCancel() {
    clearPressTimer();
    startPointRef.current = null;
  }

  return (
    <div
      ref={rootRef}
      className={cn('group relative', className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUpOrCancel}
      onPointerCancel={onPointerUpOrCancel}
      onPointerLeave={onPointerUpOrCancel}
    >
      <div
        ref={overlayRef}
        className={cn(
          'absolute top-2 right-2 z-10',
          // Desktop: show on hover/focus. Touch: show via state.
          showOverlay
            ? 'opacity-100'
            : 'pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100',
          'transition-opacity',
        )}
      >
        <SourceCodeViewer
          filePath={filePath}
          fileName={fileName}
          trigger={
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShowOverlay(false)}
            >
              <Code className="h-4 w-4" />
              <span className="sr-only">{t('header.viewSourceCode')}</span>
            </Button>
          }
        />
      </div>

      {children}
    </div>
  );
}
