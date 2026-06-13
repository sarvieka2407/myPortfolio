import IDCard from "./IDCard";
import "./components/Hero.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "./data/portfolio";

export default function Hero() {
  return (
    <section id="profile" className="hero">
      {/* Left — ID Card */}
      <div className="hero__left">
        <IDCard />
      </div>
      {/* Right — Bio */}
      <div className="hero__right">
        <div className="hero__about-label">
          <span className="hero__star">★</span>
          <span>About Me</span>
        </div>

<h1 className="hero__headline">
  Building technology,
  <br />
  <span className="headline-purple">communities</span>, and
  <br />
  experiences.
</h1>
        <p className="hero__bio">{profile.bio}</p>

      <div className="hero__links">
          <a href={profile.github} className="hero__link-btn github">
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a href={profile.linkedin} className="hero__link-btn linkedin">
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>

          <a href={`mailto:${profile.email}`} className="hero__link-btn email">
            <HiOutlineMail />
            <span>Email</span>
          </a>
      </div>
      </div>
    </section>
  );
}