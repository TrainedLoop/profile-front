import { useEffect, useState } from 'react';
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

export type MetricKey = 'FCP' | 'LCP' | 'INP' | 'CLS' | 'TTFB';
export type MetricsState = Partial<Record<MetricKey, number>>;

function storeMetric(set: React.Dispatch<React.SetStateAction<MetricsState>>, metric: Metric) {
  set(prev => ({ ...prev, [metric.name as MetricKey]: metric.value }));
}

export function useWebVitals(): MetricsState {
  // CLS/INP can remain unset if nothing happens; start at 0 so the UI doesn't stay "—"
  const [metrics, setMetrics] = useState<MetricsState>({ CLS: 0, INP: 0 });

  useEffect(() => {
    const opts = { reportAllChanges: true } as const;
    onFCP(m => storeMetric(setMetrics, m), opts);
    onLCP(m => storeMetric(setMetrics, m), opts);
    onINP(m => storeMetric(setMetrics, m), opts);
    onCLS(m => storeMetric(setMetrics, m), opts);
    onTTFB(m => storeMetric(setMetrics, m), opts);
  }, []);

  return metrics;
}
