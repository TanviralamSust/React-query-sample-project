import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

export default function Nav() {
  return (
    <>
      <div className="navbar">
        <NavLink className="nav-items" to="/">
          Home
        </NavLink>
        <NavLink
          className={(navInfo) =>
            navInfo.isActive ? "nav-items-active" : "nav-items"
          }
          to="/user/:id"
        >
          User
        </NavLink>

        <NavLink
          className={(navInfo) =>
            navInfo.isActive ? "nav-items-active" : "nav-items"
          }
          to="/user-create/:id"
        >
          UserIntegration
        </NavLink>
      </div>
    </>
  );
}
