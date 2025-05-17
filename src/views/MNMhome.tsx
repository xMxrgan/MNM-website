import MNMlogo from "../assets/MNMlogo.png";
import Donation from "../assets/5x1000.jpg";

import "../Style.css";

const Home = () => {
    return (
        <>
            <div>
                <img src={MNMlogo} className="mnm-logo" />
                <p className="mnm-motto">
                    "Ci sono luoghi al mondo dove più che le regole, è
                    importante la gentilezza"
                </p>
                <img src={Donation} className="donation-banner" />
            </div>
        </>
    );
};

export default Home;
