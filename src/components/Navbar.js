import react from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useTheme } from "../themeContext";

const Navbar = (props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="toggle">
        <label>
          <input
            className="checkbox"
            type="checkBox"
            checked={theme === 'dark'}
            onChange={() => toggleTheme()}
          />
        <span />
        </label>
      </div>
    </nav>
  );
};
export default Navbar;
