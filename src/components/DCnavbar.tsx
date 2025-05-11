// import mnmLogo from "../assets/MNM_logo.svg";
import fbLogo from "../assets/FB_logo.svg";
import { Link } from "react-router-dom";
import react from "../assets/react.svg";
import "../Style.css";

const DCnavbar = () => {
    return (
        <nav className="DCnavbar">
            {/*Parte sinistra della navbar */}
            <div className="DCleftNav">
                <Link to="/" className="DCnavIcon">
                    <img src={react} className="DCnavIcon" alt="Logo MNM" />
                </Link>
                <Link to="/" className="MNMbutton">
                    Home
                </Link>
            </div>

            <div className="DCrightNav">
                <div className="DCnavLinkBlock">
                    <Link to="/CD-Eventi" className="DCnavLink">
                        Eventi
                    </Link>

                    <Link to="/CD-Professionisti" className="DCnavLink">
                        Professionisti
                    </Link>

                    <Link to="/CD-Info" className="DCnavLink">
                        Info & contatti
                    </Link>
                </div>
                <a
                    href=""
                    className="DCnavSocial"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={fbLogo} className="DCnavIcon" alt="Facebook" />
                </a>
            </div>
        </nav>
    );
};

export default DCnavbar;
