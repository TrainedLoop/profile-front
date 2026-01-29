export interface ProjectHighlight {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  period?: string;
  highlights?: string[];
  highlightCategories?: ProjectHighlight[];
}

export interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  projects: Project[];
}
