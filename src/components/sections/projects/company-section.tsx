import { useTranslation } from 'react-i18next';
import { MapPin, Briefcase, ExternalLink } from 'lucide-react';
import { SourceCodeHover } from '@/components/ui/source-code-hover';
import type { Company } from './types';
import { ProjectCard } from './project-card';

interface CompanySectionProps {
  company: Company;
}

function getWebsiteLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export function CompanySection({ company }: CompanySectionProps) {
  const { t } = useTranslation();

  return (
    <SourceCodeHover
      filePath={`components/sections/projects/company-section.tsx`}
      fileName="company-section.tsx"
      className="space-y-6"
    >
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-4">
            {company.logoUrl && (
              <div className="border-border/50 rounded-lg border bg-white p-2.5 shadow-sm">
                <img
                  src={company.logoUrl}
                  alt={`${t(`projects.companies.${company.name}.name`)} Logo`}
                  className="h-8 w-auto"
                />
              </div>
            )}
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
              {t(`projects.companies.${company.name}.name`)}
            </h2>
          </div>
          <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 shrink-0" />
              <span>{t(`projects.companies.${company.name}.role`)}</span>
            </div>
            {company.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{t(`projects.companies.${company.name}.location`)}</span>
              </div>
            )}
            {company.websiteUrl && (
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground inline-flex items-center gap-2 underline-offset-4 hover:underline"
                aria-label={`${t(`projects.companies.${company.name}.name`)} website`}
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span>{getWebsiteLabel(company.websiteUrl)}</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t(`projects.companies.${company.name}.description`)}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4">
          {company.projects.map((project, index) => (
            <ProjectCard
              key={`${company.id}-${index}`}
              project={project}
              companyId={company.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </SourceCodeHover>
  );
}
