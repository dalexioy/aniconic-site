import { useEffect, useState } from "react";
import { fetchProjects } from "../sanity/fetch";
import type { SanityProject } from "../sanity/types";

export function useProjects() {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        console.log("SANITY PROJECTS:", data);
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return {
    projects,
    loading,
  };
}