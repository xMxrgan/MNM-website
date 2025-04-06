// import mnmLogo from "../assets/MNM_logo.svg";
import fbLogo from "../assets/FB_logo.svg";
import { Link } from "react-router-dom";
import react from "../assets/react.svg";
import "../Style.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            {/*Parte sinistra della navbar */}
            <div className="leftNav">
                {" "}
                <Link to="/" className="navIcon">
                    <img src={react} className="navIcon" alt="Logo MNM" />
                </Link>
                <Link to="/daily-center" className="DCbutton">
                    Centro Diurno
                </Link>
            </div>

            <div className="rightNav">
                {" "}
                <div className="navLinkBlock">
                    <Link to="/" className="navLink">
                        Home
                    </Link>

                    <Link to="/info" className="navLink">
                        Info
                    </Link>

                    <Link to="/contacts" className="navLink">
                        Contattaci
                    </Link>
                </div>
                <a
                    href="https://www.facebook.com/ManonellaManoAssociazione/?locale=it_IT"
                    className="navSocial"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={fbLogo} className="navIcon" alt="Facebook" />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
