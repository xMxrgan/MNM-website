import DCnavbar from "../components/DCnavbar";
// import SubscriptionModule from "";
import WelcomeSeptember from "../assets/welcomeSemptember.jpg";
import "../Style.css";

const DailyCenter = () => {
    return (
        <>
            <DCnavbar />
            <div className="DChome-container">
                <div className="DChome-pic">
                    <a
                        href={WelcomeSeptember}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={WelcomeSeptember}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </a>
                </div>

                <h1>Prossima apertura settembre 2025</h1>
                <div>
                    Modulo d'iscrizione
                    <a href="" download />
                </div>
                <h3>
                    Per iscrizioni e informazioni contattare:
                    <br />
                    <a href="mailto:centrodiurnoricreativo@gmail.com">
                        info@dailycenter.it
                    </a>
                </h3>
            </div>
        </>
    );
};

export default DailyCenter;
