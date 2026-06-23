import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { getProjectBySlug } from "../services/projectService";
import { getProjectSeoTitle, getProjectSeoDescription } from "../lib/seo";

import { Layout } from "../layout/Layout";
import { ProjectGallery } from "../components/ProjectGallery/ProjectGallery";
import { ProjectNavigation } from "../components/ProjectNavigation/ProjectNavigation";

import "./ProjectPage.css";

export function ProjectPage() {
  const { id } = useParams();

  const project = getProjectBySlug(id);

  useEffect(() => {
    if (!project) return;

    document.title = getProjectSeoTitle(project);

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", getProjectSeoDescription(project));
  }, [project]);

  if (!project) {
    return (
      <Layout>
        <p className="not-found">Project not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.section
        className="project-detail"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="project-detail__top">
          <h2>{project.title}</h2>
        </div>

        <div className="project-detail__meta">
          <span>{project.disciplines.join(", ")}</span>
          <span>{project.year}</span>
          <span>{project.location}</span>
        </div>

        {project.description && (
          <p className="project-detail__description">{project.description}</p>
        )}

        <ProjectGallery images={project.gallery} title={project.title} />

        <ProjectNavigation currentId={project.id} />

        <Link className="back-link" to="/">
          ← Back to index
        </Link>
      </motion.section>
    </Layout>
  );
}