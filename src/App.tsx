import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { SiteMetricsCards } from '@/components/metrics/site-metrics-cards';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-5xl space-y-12 sm:space-y-16">
            <Hero />
            <SiteMetricsCards />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
