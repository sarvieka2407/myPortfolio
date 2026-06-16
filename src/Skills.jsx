import "./components/Skills.css";

export default function Skills() {
  return (
    <div className="archive__bg">
      <section id = "skills" className="archive">

        <div className="archive__header">
          <div className="archive__header-chapter">02</div>
          <div className="archive__header-content">
          <span className="archive__eyebrow">PORTFOLIO VOLUME II</span>
          <h2 className="archive__title">Technical Skills</h2>
        </div>
      </div>

        <div className="archive__cards">

          <div className="archive__card archive__card--pink">
            <div className="archive__tab">ARCHIVE_01</div>
            <div className="archive__content">
              <h3>CORE_LANGUAGES.LOG</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
          </div>

          <div className="archive__card archive__card--green">
            <div className="archive__tab">ARCHIVE_02</div>
            <div className="archive__content">
              <h3>FRAMEWORKS_SYSTEM</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>FastAPI</li>
                <li>SQLAlchemy</li>
              </ul>
            </div>
          </div>

          <div className="archive__card archive__card--purple">
            <div className="archive__tab">ARCHIVE_03</div>
            <div className="archive__content">
              <h3>DEV_TOOLS.CFG</h3>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>NumPy</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="archive__footer">
          <span>CRC32: 0x8F2C4A11</span>
          <span>LAST_INDEXED: JUN_2026</span>
        </div>

      </section>
    </div>
  );
}