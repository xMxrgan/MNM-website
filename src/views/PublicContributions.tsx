import year2024 from "../assets/Contributions/ContributiMNM2024.jpg";
import "../Style.css";

const PublicContributions = () => {
    return (
        <div className="DCcontributions-container">
            <a
                href={year2024}
                rel="noopener noreferrer"
                className="DCcontributions-link"
            >
                Modulo contributi 2024
            </a>
        </div>
    );
};

export default PublicContributions;
