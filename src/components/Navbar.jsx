import { NavLink } from "react-router";
import Logo from "./base/Logo";

function Navbar() {
  return (
    <nav className="p-3 bg-colorTheme shadow-md">
      <div className="flex items-center justify-between">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <ul className="flex items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              to={"/hadiths"}
            >
              Hadiths
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
