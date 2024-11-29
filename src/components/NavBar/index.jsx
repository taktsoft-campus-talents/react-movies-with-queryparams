import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">Campus Talents Movies</NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/actors">Actors</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
