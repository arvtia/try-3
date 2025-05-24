import { useRef, useEffect, useState } from "react";
const Navbar = () => {
  const dropdownRef = useRef(null)
  const burgerRef = useRef(null)
  const navbarMenuRef = useRef(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsDropdownOpen(false)
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <p className="is-size-4 has-text-weight-bold has-icon-right">
            Ducks
            <span>
              <i className="bi bi-feather2" />
            </span>
          </p>
        </a>

        <button
          ref={burgerRef}
          className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        ref={navbarMenuRef}
        className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
        id="navbarBasicExample"
      >
        <div className="navbar-start">
          <a className="navbar-item" href="#">Home</a>
          <a className="navbar-item" href="#">Documentation</a>

          <div ref={dropdownRef} className="navbar-item has-dropdown is-hoverable">
            <button className="navbar-link" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              More
            </button>
            <div className={`navbar-dropdown ${isDropdownOpen ? "" : "is-hidden"}`} id="dropdownwalatab">
              <a className="navbar-item" href="#">About</a>
              <a className="navbar-item" href="#">Jobs</a>
              <a className="navbar-item" href="#">Contact</a>
              <a className="navbar-item" href="#">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons is-flex is-align-items-center">
              <div className="control is-expanded">
                <input className="input" type="text" placeholder="Search" />
              </div>
              <div className="control">
                <button className="button has-icon-left has-icon is-text button-navbar">
                  <span>
                    <i className="bi bi-search" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
