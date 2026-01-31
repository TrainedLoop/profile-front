import { useEffect, useState } from 'react';
import { onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

export type MetricKey = 'FCP' | 'LCP' | 'TTFB' | 'LOAD';
export type MetricsState = Partial<Record<MetricKey, number>>;

function storeMetric(set: React.Dispatch<React.SetStateAction<MetricsState>>, metric: Metric) {
  set(prev => ({ ...prev, [metric.name as MetricKey]: metric.value }));
}

function captureLoadMetric(set: React.Dispatch<React.SetStateAction<MetricsState>>) {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (!nav) return;
    const fetchStart = nav.fetchStart;
    // loadEventEnd can be 0 if read before the browser has committed it; prefer full load time
    const loadEnd = nav.loadEventEnd > 0 ? nav.loadEventEnd : nav.domContentLoadedEventEnd;
    if (loadEnd > fetchStart) {
      set(prev => ({ ...prev, LOAD: loadEnd - fetchStart }));
    }
  } catch {
    // ignore in unsupported environments
  }
}

export function useWebVitals(): MetricsState {
  const [metrics, setMetrics] = useState<MetricsState>({});

  useEffect(() => {
    const opts = { reportAllChanges: true } as const;
    onFCP(m => storeMetric(setMetrics, m), opts);
    onLCP(m => storeMetric(setMetrics, m), opts);
    onTTFB(m => storeMetric(setMetrics, m), opts);

    const runLoadMetric = () => {
      captureLoadMetric(setMetrics);
      // If nav timing wasn't ready yet (loadEventEnd 0), try again after a tick
      requestAnimationFrame(() => captureLoadMetric(setMetrics));
    };

    if (document.readyState === 'complete') {
      runLoadMetric();
    } else {
      window.addEventListener('load', runLoadMetric, { once: true });
    }
  }, []);

  return metrics;
}
