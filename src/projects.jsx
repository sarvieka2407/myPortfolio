import { useState } from "react";
import "./components/projects.css";
import { projects } from "./data/portfolio";


export default function Projects() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index, e) => {
    // If user clicked a link, allow the navigation
    if (e.target.closest("a")) {
      return;
    }
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="projects" className="projects">

      <div className="projects__header">
        <span className="projects__eyebrow">PORTFOLIO VOLUME II</span>
        <h2 className="projects__title">Featured Projects</h2>
        <p className="projects__subtitle">
          A curated selection of technical explorations, where clean
          architecture meets intentional design.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <div
            className={`projects__card ${activeCard === i ? "projects__card--revealed" : ""}`}
            key={i}
            onClick={(e) => handleCardClick(i, e)}
          >

            {/* ── Screenshot layer (slides up on hover) ── */}
            <div className="projects__visual-layer">
              <div className="projects__image-wrapper">
                {project.image
                  ? <img src={project.image} alt={project.name} className="projects__image" />
                  : <div className="projects__image-placeholder">
                      <div className="projects__placeholder-icon">⊞</div>
                    </div>
                }
                <span className="projects__year">{project.year}</span>
              </div>

              <div className="projects__card-body">
                <h3 className="projects__name">{project.name}</h3>
                <p className="projects__desc">{project.description}</p>
                <div className="projects__tags">
                  {project.stack.map((tag, j) => (
                    <span className="projects__tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Report layer (slides in from below on hover) ── */}
            <div className="projects__report-layer">
              <div className="projects__report-inner">
                <div className="projects__report-header">
                  <span className="projects__report-label">PROJECT_REPORT.LOG</span>
                  <span className="projects__report-status">● {project.status}</span>
                </div>

                <div className="projects__report-divider" />

                <p className="projects__report-desc">{project.description}</p>

                <div className="projects__report-stack">
                  <span className="projects__report-key">Tech Stack:</span>
                  <span className="projects__report-val">
                    {project.stack.join("  ·  ")}
                  </span>
                </div>

                <div className="projects__report-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="projects__report-link">
                      Open Project →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="projects__report-link">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="projects__footer">
        <span className="projects__page">PAGE 02 / 03</span>
        <span className="projects__index">PROJECTS_INDEX →</span>
      </div>

    </section>
  );
}
