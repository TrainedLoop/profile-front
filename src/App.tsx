import { Header } from '@/components/layout/header';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
              Hello World
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
              React + TypeScript + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
