import { SourceCodeHover } from '@/components/ui/source-code-hover';
type Tone = 'good' | 'meh' | 'poor' | 'neutral';

function toneClass(tone: Tone) {
  switch (tone) {
    case 'good':
      return 'text-emerald-600 dark:text-emerald-400';
    case 'meh':
      return 'text-amber-600 dark:text-amber-400';
    case 'poor':
      return 'text-rose-600 dark:text-rose-400';
    case 'neutral':
      return 'text-muted-foreground';
  }
}

interface MetricCardProps {
  label: string;
  description: string;
  valueText: string;
  tone: Tone;
}

export function MetricCard({ label, description, valueText, tone }: MetricCardProps) {
  return (
    <SourceCodeHover
      filePath="components/metrics/metric-card.tsx"
      fileName="metric-card.tsx"
      className="bg-card text-card-foreground border-border rounded-xl border px-4 py-2"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-muted-foreground text-xs leading-none font-medium">{label}</div>
      </div>
      <div className="text-muted-foreground text-xs leading-snug">{description}</div>
      <div className={`mt-1 text-2xl leading-snug font-semibold tabular-nums ${toneClass(tone)}`}>
        {valueText}
      </div>
    </SourceCodeHover>
  );
}
