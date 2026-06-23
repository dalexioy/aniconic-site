import type { Project } from "../types/Project";

const SITE_NAME = "Aniconic";

export function getProjectSeoTitle(project: Project): string {
  return project.seoTitle ?? `${project.title} | ${SITE_NAME}`;
}

export function getProjectSeoDescription(project: Project): string {
  return (
    project.seoDescription ??
    project.description ??
    `${project.title} project by ${SITE_NAME}.`
  );
}

export function getHomeSeoTitle(): string {
  return `${SITE_NAME} | Creative Direction • Design • Construction`;
}

export function getHomeSeoDescription(): string {
  return "Aniconic is a multidisciplinary studio specialising in architecture, creative direction, interior design, branding and construction.";
}