import { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const burgerRef = useRef(null);
  const navbarMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">Ducks</a>

        <button
          ref={burgerRef}
          className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
          aria-expanded={isMenuOpen}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        ref={navbarMenuRef}
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item" href="#">Home</a>
          <a className="navbar-item" href="#">Documentation</a>

          <div ref={dropdownRef} className="navbar-item has-dropdown">
            <button
              className="navbar-link"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              More
            </button>
            <div className={`navbar-dropdown ${isDropdownOpen ? "is-active" : ""}`}>
              <a className="navbar-item" href="#">About</a>
              <a className="navbar-item" href="#">Jobs</a>
              <a className="navbar-item" href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;