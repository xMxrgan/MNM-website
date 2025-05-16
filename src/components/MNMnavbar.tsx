import fbLogo from "../assets/FB_logo.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MNMlogo from "../assets/MNMlogo.png";
import "../Style.css";

const NavBar = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <nav className="navbar">
            {/*Parte sinistra della navbar */}
            <div className="leftNav">
                <NavLink to="/" className="navIcon">
                    <img src={MNMlogo} className="navIcon" alt="Logo MNM" />
                </NavLink>
                <NavLink to="/Centro-Diurno" className="DCbutton">
                    Centro Diurno
                </NavLink>
            </div>

            <div className="rightNav">
                <div className="navLinkBlock">
                    <NavLink
                        to="/"
                        className={`navLink${activePath === "/" ? " active" : ""}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/Attività"
                        className={`navLink${activePath === "/Attività" ? " active" : ""}`}
                    >
                        Attività
                    </NavLink>
                    <NavLink
                        to="/Corsi"
                        className={`navLink${activePath === "/Corsi" ? " active" : ""}`}
                    >
                        Corsi
                    </NavLink>
                    <NavLink
                        to="/Eventi"
                        className={`navLink${activePath === "/Eventi" ? " active" : ""}`}
                    >
                        Eventi
                    </NavLink>
                    <NavLink
                        to="/Info"
                        className={`navLink${activePath === "/Info" ? " active" : ""}`}
                    >
                        Info & contatti
                    </NavLink>
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
