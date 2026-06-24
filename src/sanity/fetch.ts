import { sanityClient } from "./client";
import { PROJECT_QUERY, PROJECTS_QUERY } from "./queries";
import type { SanityProject } from "./types";

export async function fetchProjects(): Promise<SanityProject[]> {
  return sanityClient.fetch(PROJECTS_QUERY);
}

export async function fetchProject(
  slug: string
): Promise<SanityProject | null> {
  return sanityClient.fetch(PROJECT_QUERY, {
    slug,
  });
}