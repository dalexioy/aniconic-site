import { useEffect, useState } from "react";
import { fetchProject } from "../sanity/fetch";
import type { SanityProject } from "../sanity/types";

export function useProject(slug: string | undefined) {
  const [project, setProject] = useState<SanityProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      if (!slug) {
        setProject(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchProject(slug);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [slug]);

  return {
    project,
    loading,
  };
}