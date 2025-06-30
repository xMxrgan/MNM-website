import { Link } from "react-router-dom";
import "../Style.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footerBar">
            <div className="footerCopyright">
                Copyright © {currentYear} Associazione Mano nella Mano O.D.V.
            </div>
            <div className="footerContainer">
                <Link to="/terms">Termini e condizioni</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/about">Chi Siamo</Link>
                <Link to="/Contatti">Contatti</Link>
                <Link to="/Contributi">Contributi pubblici</Link>
            </div>
        </footer>
    );
};

export default Footer;
