import NavBar from "../components/MNMnavbar";
import MNMlogo from "../assets/MNMlogo.png";

const Home = () => {
    return (
        <>
            <NavBar />
            <div>
                <img src={MNMlogo} className="mnm-logo" />
                <p className="mnm-motto">
                    "Ci sono luoghi al mondo dove più che le regole, è
                    importante la gentilezza"
                </p>
            </div>
        </>
    );
};

export default Home;
