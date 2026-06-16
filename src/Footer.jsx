import "./components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__divider" />

      <div className="footer__content">

        <div className="footer__left">
          <span>LAST_UPDATED //</span>
          <strong>2026</strong>
        </div>

        <div className="footer__center">
          SARVIKA_SHARMA.PORTFOLIO
        </div>

        <div className="footer__right">
          END_OF_RECORD
          <span className="footer__icon">⌲</span>
        </div>

      </div>


    </footer>
  );
}