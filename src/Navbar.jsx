import { useState, useEffect } from "react";
import "./components/Navbar.css";

const navLinks = ["Profile", "Skills", "Projects", "Journey"];

export default function Navbar({ name = "Sarvika Sharma" }) {
  const [active, setActive] = useState("Profile");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <span className="navbar__name">{name}</span>

<ul className="navbar__links">
  {navLinks.map((link) => (
    <li key={link}>
      <a
        href={`#${link.toLowerCase()}`}
        className={`navbar__link ${
          active === link ? "navbar__link--active" : ""
        }`}
        onClick={() => setActive(link)}
      >
        {link}
      </a>
    </li>
  ))}
</ul>

      <a href="/resume.pdf" className="navbar__connect"   rel="noopener noreferrer"
        target="_blank">
        Resume
      </a>
    </nav>
  );
}