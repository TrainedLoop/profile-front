import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MetricCard } from '@/components/metrics/metric-card';
import { useWebVitals, type MetricKey } from '@/components/metrics/use-web-vitals';
import { SourceCodeHover } from '@/components/ui/source-code-hover';

type Tone = 'good' | 'meh' | 'poor' | 'neutral';

const METRICS_ORDER: MetricKey[] = ['FCP', 'LCP', 'INP', 'CLS', 'TTFB'];

function classify(metric: MetricKey, value: number): Exclude<Tone, 'neutral'> {
  // Thresholds from Web Vitals guidance
  switch (metric) {
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'meh' : 'poor';
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'meh' : 'poor';
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'meh' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'meh' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'meh' : 'poor';
  }
}

function valueToText(metric: MetricKey, value: number) {
  if (metric === 'CLS') return value.toFixed(3);
  return `${Math.round(value)}ms`;
}

export function SiteMetricsCards() {
  const { t } = useTranslation();
  const metrics = useWebVitals();

  const items = useMemo(
    () =>
      METRICS_ORDER.map(key => {
        const value = metrics[key];
        const tone: Tone = value === undefined ? 'neutral' : classify(key, value);
        return {
          key,
          label: t(`metrics.${key.toLowerCase()}`),
          description: t(`metrics.${key.toLowerCase()}_desc`),
          valueText: value === undefined ? '—' : valueToText(key, value),
          tone,
        };
      }),
    [metrics, t],
  );

  return (
    <section id="site-metrics" aria-label={t('metrics.title')} className="space-y-3">
      <SourceCodeHover
        filePath="components/metrics/site-metrics-cards.tsx"
        fileName="site-metrics-cards.tsx"
        className="flex items-baseline justify-between gap-4"
      >
        <h2 className="text-foreground text-sm font-semibold tracking-wide">
          {t('metrics.title')}
        </h2>
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground text-xs">{t('metrics.note')}</p>
        </div>
      </SourceCodeHover>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(item => (
          <MetricCard
            key={item.key}
            label={item.label}
            description={item.description}
            valueText={item.valueText}
            tone={item.tone}
          />
        ))}
      </div>
    </section>
  );
}
