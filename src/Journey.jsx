import "./components/Journey.css";
import { journey } from "./data/portfolio";
import { useState, useRef } from "react";
 
export default function Journey() {
  const [openArchive, setOpenArchive] = useState(null);
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

  return (
    <section id = "journey"className="journey">

      <div className="journey__header">
        <span className="journey__eyebrow">PORTFOLIO VOLUME III</span>
        <h2 className="journey__title">Journey Archive</h2>
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

        <div className="journey__content journey__achievements">

          {journey.achievements.map((item, index) => (
            <div className="journey__achievement" key={index}>
              <h4>{item.title}</h4>
              <span>{item.type}</span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}