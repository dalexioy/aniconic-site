import { Link } from "react-router-dom";
import type { Project } from "../../types/Project";
import "./ProjectRow.css";
import { getProjectHoverImages } from "../../lib/image";
import { Image } from "../Image/Image";

type ProjectRowProps = {
  project: Project;
};


export function ProjectRow({ project }: ProjectRowProps) {
  const hoverImages = getProjectHoverImages(project);
  return (
    <Link className="project-row" to={`/project/${project.slug}`}>
      <div className="project-row__main">
        <span>{project.symbol}</span>
        <span>{project.title}</span>
        <span>{project.disciplines.join(", ")}</span>
        <span>{project.year}</span>
        <span>{project.location}</span>
      </div>

      {(hoverImages.length > 0 || project.description) && (
        <div className="project-row__preview">
          <div className="project-row__images">
            {hoverImages.map((image) => (
              <Image key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>

          {project.description && (
            <p>
              {project.description} <strong>[explore]</strong>
            </p>
          )}
        </div>
      )}
    </Link>
  );
}