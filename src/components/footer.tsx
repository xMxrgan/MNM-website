import { Link } from "react-router-dom";
import "../Style.css";

const Footer = () => {
    return (
        <footer className="footerBar">
            <div className="footerCopyright">
                Copyright © 2025 Associazione Mano nella Mano O.D.V.
            </div>
            <span className="footerContainer">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </span>
        </footer>
    );
};

export default Footer;
