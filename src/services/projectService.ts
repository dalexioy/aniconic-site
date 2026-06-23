import { orderedProjects, projects } from "../data/projects";
import type { Project } from "../types/Project";

export function getProjects(): Project[] {
  return orderedProjects;
}

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  if (!slug) return undefined;

  return projects.find((project) => project.slug === slug);
}

export function getProjectIndex(projectId: string): number {
  return orderedProjects.findIndex((project) => project.id === projectId);
}

export function getPreviousProject(projectId: string): Project | null {
  const index = getProjectIndex(projectId);

  if (index <= 0) return null;

  return orderedProjects[index - 1];
}

export function getNextProject(projectId: string): Project | null {
  const index = getProjectIndex(projectId);

  if (index === -1 || index >= orderedProjects.length - 1) return null;

  return orderedProjects[index + 1];
}