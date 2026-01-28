import { HeroGreeting } from './hero-greeting';
import { HeroNameTitle } from './hero-name-title';
import { HeroDescription } from './hero-description';
import { HeroCTAButtons } from './hero-cta-buttons';
import { HeroSocialLinks } from './hero-social-links';
import { HeroTechStack } from './hero-tech-stack';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-4xl space-y-10 text-center">
          <HeroGreeting />
          <HeroNameTitle />
          <HeroDescription />
          <HeroCTAButtons />
          <HeroSocialLinks />
          <HeroTechStack />
        </div>
      </div>
    </section>
  );
}
