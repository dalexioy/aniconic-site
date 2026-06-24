import { useProjects } from "../../hooks/useProjects";
import { ProjectRow } from "../ProjectRow/ProjectRow";
import "./Projects.css";

export function Projects() {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <section className="projects">
        <p>Loading projects...</p>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="projects">
        <p>No projects published yet.</p>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="table-head">
        <span>Ϙ</span>
        <span>Project</span>
        <span>Disciplines</span>
        <span>Year</span>
        <span>Location</span>
      </div>

      {projects.map((project) => (
        <ProjectRow key={project._id} project={project} />
      ))}
    </section>
  );
}