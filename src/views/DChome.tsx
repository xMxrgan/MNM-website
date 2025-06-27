import DCnavbar from "../components/DCnavbar";
import SubscriptionModule from "../assets/Modulo_iscrizione_centro_diurno.pdf";
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

                <a
                    href={SubscriptionModule}
                    download="Modulo_iscrizione_centro_diurno.pdf"
                >
                    Scarica il modulo d'iscrizione
                </a>

                <h3>
                    Per iscrizioni e informazioni contattare:
                    <br />
                    <a href="mailto:centrodiurnoricreativo@gmail.com">
                        centrodiurnoricreativo@gmail.com
                    </a>
                    <br />
                    O chiamare:
                    <br />
                    +39 351 8852169
                    <br />
                </h3>
            </div>
        </>
    );
};

export default DailyCenter;
