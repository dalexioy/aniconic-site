import type { Project, ProjectImage } from "../types/Project";

export function getProjectCover(project: Project): ProjectImage | null {
  return project.coverImage ?? project.gallery[0] ?? project.hoverImages[0] ?? null;
}

export function getProjectGallery(project: Project): ProjectImage[] {
  return project.gallery;
}

export function getProjectHoverImages(project: Project): ProjectImage[] {
  return project.hoverImages.slice(0, 3);
}

export function getImageAlt(image: ProjectImage, fallback: string): string {
  return image.alt || fallback;
}