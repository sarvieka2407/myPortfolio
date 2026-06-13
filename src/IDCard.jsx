import "./components/IDCard.css";
import { profile } from "./data/portfolio";
import { useRef } from "react";
import profilePic from "./assets/pfp.png";

export default function IDCard() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div className="idcard__lanyard">
      <div className="idcard__clip">
        <div className="idcard__clip-neck" />
        <div className="idcard__clip-hook" />
      </div>

      <div
        className="idcard__card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="idcard__photo-wrapper">
          <img
            src={profilePic}
            alt="Sarvika Sharma"
            className="idcard__photo"
          />
        </div>

        <h2 className="idcard__name">{profile.name}</h2>
        <p className="idcard__title">{profile.title}</p>

        <div className="idcard__divider" />

        <div className="idcard__info">
          <div className="idcard__info-row">
            <span className="idcard__info-label">University</span>
            <span className="idcard__info-value">{profile.university}</span>
          </div>
          <div className="idcard__info-row">
            <span className="idcard__info-label">Year</span>
            <span className="idcard__info-value">{profile.year}</span>
          </div>
          <div className="idcard__info-row">
            <span className="idcard__info-label">Degree</span>
            <span className="idcard__info-value idcard__info-value--accent">{profile.track}</span>
          </div>
        </div>
      </div>
    </div>
  );
}