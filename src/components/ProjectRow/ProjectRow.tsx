import { Link } from "react-router-dom";
import type { SanityProject } from "../../sanity/types";
import { urlFor } from "../../sanity/image";
import { Image } from "../Image/Image";
import "./ProjectRow.css";

type ProjectRowProps = {
  project: SanityProject;
};

export function ProjectRow({ project }: ProjectRowProps) {
  const hoverImages = project.hoverImages?.slice(0, 3) ?? [];

  return (
    <Link className="project-row" to={`/project/${project.slug.current}`}>
      <div className="project-row__main">
        <span>{project.symbol}</span>
        <span>{project.title}</span>
        <span>{project.disciplines?.join(", ")}</span>
        <span>{project.year}</span>
        <span>{project.location}</span>
      </div>

      {(hoverImages.length > 0 || project.hoverDescription) && (
        <div className="project-row__preview">
          <div className="project-row__images">
            {hoverImages.map((image, index) => (
              <Image
                key={image.asset._ref}
                src={urlFor(image).width(500).height(350).url()}
                alt={`${project.title} preview ${index + 1}`}
              />
            ))}
          </div>

          {project.hoverDescription && (
            <p>
              {project.hoverDescription} <strong>[explore]</strong>
            </p>
          )}
        </div>
      )}
    </Link>
  );
}