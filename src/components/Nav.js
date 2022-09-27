import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

export default function Nav() {
  return (
    <>
      <div className="navbar">
        <Link className="nav-items" to="/">
          Home
        </Link>

        <Link className="nav-items" to="/user-create/:id">
          UserIntegration
        </Link>
      </div>
    </>
  );
}
