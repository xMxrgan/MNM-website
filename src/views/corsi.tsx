import { Link } from "react-router-dom";
import "../Style.css";

const Corsi = () => {
    return (
        <div>
            <Link to="/" className="HomeButton">
                Home
            </Link>
            <h1>Corsi</h1>
        </div>
    );
};

export default Corsi;
