import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/header';
import { SiteMetricsCards } from '@/components/metrics/site-metrics-cards';

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-5xl space-y-10">
            <SiteMetricsCards />

            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
                {t('home.title')}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                {t('home.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
