import fbLogo from "../assets/FB_logo.svg";
import { Link, NavLink } from "react-router-dom";
import MNMlogo from "../assets/MNMlogo.png";
import "../Style.css";

const DCnavbar = () => {
    return (
        <nav className="DCnavbar">
            {/*Parte sinistra della navbar */}
            <div className="DCleftNav">
                <NavLink to="/" className="DCnavIcon">
                    <img src={MNMlogo} className="DCnavIcon" alt="Logo MNM" />
                </NavLink>
                <Link to="/" className="MNMbutton">
                    Associazione
                </Link>
            </div>

            <div className="DCrightNav">
                <div className="DCnavLinkBlock">
                    <NavLink to="/CD-Eventi" className="DCnavLink">
                        Eventi
                    </NavLink>

                    <NavLink to="/CD-Professionisti" className="DCnavLink">
                        Professionisti
                    </NavLink>

                    <NavLink to="/CD-Info" className="DCnavLink">
                        Info & contatti
                    </NavLink>
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
