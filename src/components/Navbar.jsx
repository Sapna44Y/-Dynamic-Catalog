import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => navigate("/")}>
          <span className="logo-icon">✨</span>
          <div className="logo-text-wrapper">
            <span className="logo-text">Dynamic</span>
            <span className="logo-text-highlight">Catalog</span>
          </div>
        </div>
        {location.pathname !== "/" && (
          <button className="back-button" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
