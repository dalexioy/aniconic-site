import { Link } from "react-router-dom";
import { 
  getNextProject,
  getPreviousProject,
} from "../../services/projectService";
import "./ProjectNavigation.css";

type Props = {
  currentId: string;
};

export function ProjectNavigation({ currentId }: Props) {
  const previous = getPreviousProject(currentId);
  const next = getNextProject(currentId);

  return (
    <nav className="project-navigation">
      <div>
        {previous && <Link to={`/project/${previous.slug}`}>← {previous.title}</Link>}
      </div>

      <div>
        {next && <Link to={`/project/${next.slug}`}>{next.title} →</Link>}
      </div>
    </nav>
  );
}