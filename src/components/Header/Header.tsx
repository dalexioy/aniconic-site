import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        aniconic.
      </Link>
    </header>
  );
}