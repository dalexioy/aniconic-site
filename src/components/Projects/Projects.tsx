import { getProjects } from "../../services/projectService";
import { ProjectRow } from "../ProjectRow/ProjectRow";
import "./Projects.css";

export function Projects() {
  const projects = getProjects();

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
        <ProjectRow key={project.id} project={project} />
      ))}
    </section>
  );
}