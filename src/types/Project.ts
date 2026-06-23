export type ProjectStatus =
  | "Concept"
  | "In Progress"
  | "Completed"
  | "Published";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  order: number;

  symbol: string;
  title: string;
  subtitle?: string;

  disciplines: string[];
  year: number;
  location: string;

  client?: string;
  status?: ProjectStatus;

  description: string;
  services?: string[];

  coverImage?: ProjectImage;
  hoverImages: ProjectImage[];
  gallery: ProjectImage[];

  seoTitle?: string;
  seoDescription?: string;
}