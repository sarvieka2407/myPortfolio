import { useEffect } from "react";

export default function ArtifactViewer({ isOpen, onClose, image, caption }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="artifact-viewer__backdrop" onClick={onClose}>
      <div
        className="artifact-viewer__modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="artifact-viewer__header">
          <span className="artifact-viewer__header-label">ARCHIVE_ARTIFACT.LOG</span>
          <button
            className="artifact-viewer__close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            × CLOSE
          </button>
        </div>

        <div className="artifact-viewer__img-area">
          <img
            src={image}
            alt={caption || "Artifact Image"}
            className="artifact-viewer__img"
          />
        </div>

        <div className="artifact-viewer__caption-area">
          <span className="artifact-viewer__caption-label">ARTIFACT_DESCRIPTION</span>
          <p className="artifact-viewer__caption-text">{caption || "No description provided."}</p>
        </div>
      </div>
    </div>
  );
}
