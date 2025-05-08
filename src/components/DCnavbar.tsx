// import mnmLogo from "../assets/MNM_logo.svg";
import fbLogo from "../assets/FB_logo.svg";
import { Link } from "react-router-dom";
import react from "../assets/react.svg";
import "../Style.css";

const NavBar = () => {
  return (
    <nav className="DCnavbar">
      {/*Parte sinistra della navbar */}
      <div className="DCleftNav">
        <Link to="/" className="DCnavIcon">
          <img src={react} className="DCnavIcon" alt="Logo MNM" />
        </Link>
        <Link to="/Centro-Diurno" className="MNMbutton">
          Associazione
        </Link>
      </div>

      <div className="DCrightNav">
        <div className="DCnavLinkBlock">
          <Link to="/" className="DCnavLink">
            Home
          </Link>
          <Link to="/DCeventi" className="DCnavLink">
            Eventi
          </Link>

          <Link to="/DCprofessionist" className="DCnavLink">
            Professionisti
          </Link>

          <Link to="/DCgallery" className="DCnavLink">
          Galleria
          </Link>

          <Link to="/Dcinfo" className="DCnavLink">
            Info & contatti
          </Link>

        </div>
        <a
          href="https://www.facebook.com/ManonellaManoAssociazione/?locale=it_IT"
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

export default NavBar;
