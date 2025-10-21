import "../styles/globals.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header_content">
          <nav>
            <div className="logo">
              <h1>DEEPCODE</h1>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
