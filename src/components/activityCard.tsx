import { useState, useRef, useEffect } from "react";
import "../Style.css";

const ActivityCard = ({
  imageSrc,
  title,
  description,
  dateAndTimeConcamarise,
  dateAndTimeBovolone,
}: {
  imageSrc: string;
  title: string;
  description: string;
  dateAndTimeConcamarise?: string;
  dateAndTimeBovolone?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLFormElement>(null);

  const toggleCard = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      ref={cardRef}
      className={`activity-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleCard}
    >
      <img src={imageSrc} alt={title} className="activity-card-img" />
      <div className="activity-card-content">
        <h2 className="activity-card-title">{title}</h2>
        <span className="activity-card-icon">⬇️</span>
      </div>
      <div
        className={`activity-card-description ${isExpanded ? "visible" : ""}`}
      >
        <div className="activity-card-time-box">
          {" "}
          <h3 className="activity-card-time">{dateAndTimeConcamarise}</h3>
          <h3 className="activity-card-time">{dateAndTimeBovolone}</h3>
        </div>

        <p>{description}</p>
      </div>
    </form>
  );
};

export default ActivityCard;
