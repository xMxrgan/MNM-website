import { Link } from "react-router-dom";
import "../Style.css";

const Footer = () => {
    return (
        <footer className="footerBar">
            <div className="footerCopyright">
                Copyright © 2025 Associazione Mano nella Mano O.D.V.
            </div>
            <div className="footerContainer">
                <Link to="/terms">Termini e condizioni</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/about">Chi Siamo</Link>
                <Link to="/contact">Contatti</Link>
            </div>
        </footer>
    );
};

export default Footer;
