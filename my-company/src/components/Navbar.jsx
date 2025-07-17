import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/About" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/Services" style={{ marginRight: "10px" }}>
        Services
      </Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
