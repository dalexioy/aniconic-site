import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ontsrijc",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});