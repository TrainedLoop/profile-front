import { useTranslation } from 'react-i18next';
import { SourceCodeHover } from '@/components/ui/source-code-hover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HighlightCarousel } from './highlight-carousel';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  companyId: string;
  index: number;
}

export function ProjectCard({ project, companyId }: ProjectCardProps) {
  const { t } = useTranslation();

  const translatedCategories = project.highlightCategories?.map(category => ({
    category: t(
      `projects.companies.${companyId}.projects.${project.name}.categories.${category.category}.name`,
    ),
    items: category.items.map((_, itemIndex) =>
      t(
        `projects.companies.${companyId}.projects.${project.name}.categories.${category.category}.items.${itemIndex}`,
      ),
    ),
  }));

  return (
    <Card className="w-full max-w-full overflow-hidden transition-shadow hover:shadow-md">
      <SourceCodeHover
        filePath={`components/sections/projects/project-card.tsx`}
        fileName="project-card.tsx"
        className="w-full max-w-full overflow-hidden"
      >
        <CardHeader>
          <CardTitle className="wrap-break-words text-lg">
            {t(`projects.companies.${companyId}.projects.${project.name}.name`)}
          </CardTitle>
          {project.period && (
            <CardDescription className="text-xs font-medium">{project.period}</CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="overflow-wrap-anywhere wrap-break-words text-sm leading-relaxed">
            {t(`projects.companies.${companyId}.projects.${project.name}.description`)}
          </p>

          {translatedCategories && translatedCategories.length > 0 ? (
            <HighlightCarousel categories={translatedCategories} />
          ) : (
            project.highlights &&
            project.highlights.length > 0 && (
              <ul className="space-y-2 text-sm">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </SourceCodeHover>
    </Card>
  );
}
