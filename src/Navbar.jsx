import { useState, useEffect } from "react";
import "./components/Navbar.css";

const navLinks = ["Profile", "Skills", "Projects", "Journey"];

export default function Navbar({ name = "Sarvika Sharma" }) {
  const [active, setActive] = useState("Profile");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActive(link);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${isOpen ? "navbar--open" : ""}`}>
      <span className="navbar__name">{name}</span>

      <button
        className={`navbar__hamburger ${isOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <ul className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`navbar__link ${
                active === link ? "navbar__link--active" : ""
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          </li>
        ))}
        <li className="navbar__mobile-only">
          <a
            href="/resume.pdf"
            className="navbar__connect navbar__connect--mobile"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </li>
      </ul>

      <a
        href="/resume.pdf"
        className="navbar__connect navbar__connect--desktop"
        rel="noopener noreferrer"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
}