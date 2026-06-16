import "./components/Journey.css";
import { journey } from "./data/portfolio";
import { useState, useRef } from "react";
import ArtifactViewer from "./components/ArtifactViewer";
 
export default function Journey() {
  const [openArchive, setOpenArchive] = useState(null);
  const [openAchievement, setOpenAchievement] = useState(null);
  const [activeArtifact, setActiveArtifact] = useState(null);
  const archiveGridRef = useRef(null);

  const scrollArchive = (direction) => {
    if (!archiveGridRef.current) return;
    const scrollAmount = 320;
    if (direction === 'left') {
      archiveGridRef.current.scrollLeft -= scrollAmount;
    } else {
      archiveGridRef.current.scrollLeft += scrollAmount;
    }
  };

  const scrollAchievementArchive = (e, direction) => {
    const btn = e.currentTarget;
    const container = btn.closest(".journey__achievement-archive");
    const grid = container ? container.querySelector(".journey__achievement-evidence-grid") : null;
    if (!grid) return;
    const scrollAmount = 300;
    if (direction === 'left') {
      grid.scrollLeft -= scrollAmount;
    } else {
      grid.scrollLeft += scrollAmount;
    }
  };

  return (
    <section id = "journey"className="journey">

      <div className="journey__header">
        <div className="journey__header-chapter">04</div>
        <div className="journey__header-content">
          <span className="journey__eyebrow">PORTFOLIO VOLUME IV</span>
          <h2 className="journey__title">Journey Archive</h2>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="journey__section">
        <div className="journey__label">
          <span>ACADEMIC FOUNDATION</span>
          <h3>Education</h3>
        </div>

        <div className="journey__content">
          {journey.education.map((edu, index) => (
            <div className="journey__card" key={index}>
              <div className="journey__card-header">
                <h4>{edu.degree}</h4>
                <span>{edu.duration}</span>
              </div>

              <p>{edu.university}</p>

              <div className="journey__subjects">
                {edu.core.map((subject, subIndex) => (
                  <span key={subIndex}>{subject}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="journey__section">
        <div className="journey__label">
          <span>PROFESSIONAL JOURNEY</span>
          <h3>Experience</h3>
        </div>

        <div className="journey__content">

          <div className="journey__timeline">

            {journey.experience.map((item, index) => (
              <div className="journey__timeline-item journey__timeline-item--expandable" key={index}>

                <div className="journey__timeline-dot" />

                <div className="journey__timeline-content">

                  <div className="journey__timeline-header">
                    <h4>{item.title}</h4>
                    <span>{item.duration}</span>
                  </div>

                  <p className="journey__timeline-company">
                    {item.company}
                  </p>

                  <p className="journey__timeline-description">
                    {item.description}
                  </p>

                  {item.skills && item.skills.length > 0 && (
                    <div className="journey__skills-container">
                      <div className="journey__skills-label">Skills</div>
                      <div className="journey__skills">
                        {item.skills.map((skill, skillIndex) => (
                          <span className="journey__skill-pill" key={skillIndex}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="journey__section">
        <div className="journey__label">
          <span>LEADERSHIP RECORDS</span>
          <h3>Leadership & Activities</h3>
        </div>

        <div className="journey__content">

          <div className="journey__timeline">

            {journey.leadership.map((item, index) => (
              <div
                className="journey__timeline-item journey__timeline-item--expandable"
                key={index}
              >

                <div className="journey__timeline-dot leadership-dot" />

                <div className="journey__timeline-content">

                  <div className="journey__timeline-header">
                    <h4>{item.role}</h4>
                    <span>{item.duration}</span>
                  </div>

                  <p className="journey__timeline-company">
                    {item.organization}
                  </p>

                  <p className="journey__timeline-description">
                    {item.description}
                  </p>

                  {item.skills && item.skills.length > 0 && (
                    <div className="journey__skills-container">
                      <div className="journey__skills-label">
                        Skills
                      </div>

                      <div className="journey__skills">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            className="journey__skill-pill"
                            key={skillIndex}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Archive Toggle */}

                  {item.proofImages && (
                    <button
                      className="journey__archive-toggle"
                      onClick={() =>
                        setOpenArchive(
                          openArchive === index ? null : index
                        )
                      }
                    >
                      {openArchive === index
                        ? "CLOSE_ARCHIVE.LOG ×"
                        : `OPEN_ARCHIVE.LOG (+)`}
                    </button>
                  )}

                  {/* Archive Drawer */}

                  {openArchive === index && (
                    <div className="journey__archive">

                      <div className="journey__archive-header">
                        <span>
                          ARCHIVE_RECORDS.LOG
                        </span>

                        <div className="journey__archive-controls">
                          <button 
                            className="journey__archive-btn journey__archive-btn--left"
                            onClick={() => scrollArchive('left')}
                            aria-label="Scroll left"
                          >
                            ←
                          </button>
                          <button 
                            className="journey__archive-btn journey__archive-btn--right"
                            onClick={() => scrollArchive('right')}
                            aria-label="Scroll right"
                          >
                            →
                          </button>
                        </div>
                      </div>

                      <div className="journey__archive-grid" ref={archiveGridRef}>

                        {item.proofImages.map(
                          (proof, proofIndex) => (
                            <div
                              className="journey__archive-item"
                              key={proofIndex}
                            >
                              <img
                                src={proof.image}
                                alt={proof.caption}
                                onClick={() => setActiveArtifact({ image: proof.image, caption: proof.caption })}
                              />

                              <p>{proof.caption}</p>
                            </div>
                          )
                        )}

                      </div>

                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="journey__section">
        <div className="journey__label">
          <span>MILESTONES</span>
          <h3>Achievements</h3>
        </div>

        <div className="journey__content journey__achievements-list">
          {journey.achievements.map((item, index) => {
            const isExpanded = openAchievement === index;
            const identifier = `${item.title}_${item.badge}`
              .toUpperCase()
              .replace(/[^A-Z0-9]+/g, "_")
              .replace(/^_+|_+$/g, "");

            return (
              <div
                className={`journey__achievement-card ${
                  isExpanded ? "journey__achievement-card--expanded" : ""
                }`}
                key={index}
              >
                <div className="journey__achievement-header">
                  <div className="journey__achievement-meta">
                    <span className="journey__achievement-badge">{item.badge}</span>
                    <span className="journey__achievement-org">{item.organization}</span>
                  </div>
                  <span className="journey__achievement-year">{item.year}</span>
                </div>

                <h4 className="journey__achievement-title">{item.title}</h4>

                {/* SECTION A — Achievement highlight callout */}
                {item.highlight && (
                  <div className="journey__achievement-highlight">
                    {item.highlight}
                  </div>
                )}

                {/* SECTION B — Context / project rationale */}
                {item.context && (
                  <div className="journey__achievement-project-overview">
                    <span className="journey__achievement-overview-label">PROJECT_OVERVIEW</span>
                    <p className="journey__achievement-context">{item.context}</p>
                  </div>
                )}

                {/* Fallback for entries that still use plain description */}
                {!item.highlight && item.description && (
                  <p className="journey__achievement-desc">{item.description}</p>
                )}

                <button
                  className="journey__achievement-toggle"
                  onClick={() => setOpenAchievement(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "CLOSE ACHIEVEMENT ARCHIVE ↑" : "OPEN ACHIEVEMENT ARCHIVE ↓"}
                </button>

                {isExpanded && (
                  <div className="journey__achievement-archive">
                    <div className="journey__archive-panel-header">
                      <span className="journey__archive-log-label">
                        ACHIEVEMENT_ARCHIVE.LOG
                      </span>
                      <span className="journey__archive-status-pill">
                      </span>
                    </div>

                    <div className="journey__archive-identifier">
                      {identifier}
                    </div>

                    <div className="journey__archive-divider" />

                    {/* PROJECT OVERVIEW */}
                    <div className="journey__archive-section">
                      <span className="journey__archive-section-label">PROJECT_OVERVIEW</span>
                      <h5 className="journey__archive-project-name">{item.projectName}</h5>
                      <p className="journey__archive-project-desc">{item.projectDescription}</p>
                    </div>

                    {/* METRICS ROW */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="journey__archive-metrics">
                        {item.metrics.map((metric, metricIdx) => (
                          <span className="journey__archive-metric-pill" key={metricIdx}>
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="journey__archive-divider" />

                    {/* CERTIFICATE RECORD */}
                    {item.certificate && (
                      <div className="journey__cert-section">
                        <span className="journey__archive-section-label">CERTIFICATE_RECORD</span>

                        <div
                          className="journey__cert-frame"
                          onClick={() => setActiveArtifact({ image: item.certificate.image, caption: item.certificate.title })}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === "Enter" && setActiveArtifact({ image: item.certificate.image, caption: item.certificate.title })}
                          title="Open certificate"
                          aria-label={item.certificate.title}
                        >
                          <img
                            src={item.certificate.image}
                            alt={item.certificate.title}
                            className="journey__cert-img"
                          />
                        </div>
                      </div>
                    )}

                    <div className="journey__archive-divider" />

                    {/* EVIDENCE GALLERY */}
                    {item.evidence && item.evidence.length > 0 && (
                      <div className="journey__archive-gallery-wrapper">
                        <div className="journey__archive-gallery-header">
                          <span className="journey__archive-section-label">EVIDENCE_RECORDS.LOG</span>
                          <div className="journey__archive-gallery-controls">
                            <button
                              className="journey__archive-gallery-btn"
                              onClick={(e) => scrollAchievementArchive(e, "left")}
                              aria-label="Scroll left"
                            >
                              ←
                            </button>
                            <button
                              className="journey__archive-gallery-btn"
                              onClick={(e) => scrollAchievementArchive(e, "right")}
                              aria-label="Scroll right"
                            >
                              →
                            </button>
                          </div>
                        </div>

                        <div className="journey__achievement-evidence-grid">
                          {item.evidence.map((proof, proofIdx) => (
                            <div className="journey__achievement-evidence-item" key={proofIdx}>
                              <div className="journey__achievement-evidence-image-wrapper">
                                <img
                                  src={proof.image}
                                  alt={proof.caption}
                                  className="journey__achievement-evidence-img"
                                  onClick={() => setActiveArtifact({ image: proof.image, caption: proof.caption })}
                                />
                              </div>
                              <p className="journey__achievement-evidence-caption">{proof.caption}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ArtifactViewer
        isOpen={!!activeArtifact}
        onClose={() => setActiveArtifact(null)}
        image={activeArtifact?.image}
        caption={activeArtifact?.caption}
      />

    </section>
  );
}