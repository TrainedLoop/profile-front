import { useTranslation } from 'react-i18next';
import { COMPANIES } from './data';
import { CompanySection } from './company-section';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="space-y-16 py-12 sm:py-16">
      <div className="space-y-2 text-center">
        <h1 className="text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
          {t('projects.title')}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="space-y-20">
        {COMPANIES.map(company => (
          <CompanySection key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
}
