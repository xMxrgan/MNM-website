import "../Style.css";
import TodaysDate from "../components/todaysDate";
import NavBar from "../components/MNMnavbar";
import MNMeventsCarousel from "../components/MNMcoursesEventsCarousel";

import Loc01_2017 from "../assets/MNMcourses/corso_formazione_2017.png";
import Loc01_2020 from "../assets/MNMcourses/ciclo_serate_informative_2020.png";
import Loc02_2020 from "../assets/MNMcourses/gestire_anziano_2020.png";
import Loc03_2020 from "../assets/MNMcourses/gestire_anziano_2_2020.png";
import Loc01_2021 from "../assets/MNMcourses/aiuto_per_la_famiglia_2021.png";
import Loc02_2021 from "../assets/MNMcourses/domiciliarita2.0_2021.png";
import Loc03_2021 from "../assets/MNMcourses/aiuto_per_la_famiglia_2021.png";
import Loc04_2021 from "../assets/MNMcourses/mappa_per_capire_2021.png";
import Loc05_2021 from "../assets/MNMcourses/tra_gioco_e_illusione_2021.png";
import Loc01_2022 from "../assets/MNMcourses/domiciliarita2.0_2022.png";
import Loc01_2023 from "../assets/MNMcourses/difficile_arte_dell_aver_cura_2023.png";
import Loc02_2023 from "../assets/MNMcourses/musicoterapia_per_il_caregiver_2023.png";
import Loc03_2023 from "../assets/MNMcourses/domiciliarita2.0_2023.png";
import Loc01_2024 from "../assets/MNMcourses/corso_smartphone_maggio_2024.png";
import Loc02_2024 from "../assets/MNMcourses/musicoterapia_benessere_caregiver_2024.png";
import Loc03_2024 from "../assets/MNMcourses/corso_smartphone_ottobre_2024.png";
import Loc01_2025 from "../assets/MNMcourses/corso_smartphone_maggio_2025.png";

const Corsi = () => {
    return (
        <>
            <NavBar />
            <TodaysDate />

            <div className="description">
                La nostra O.D.V. offre incontri mirati all'approfondimento
                tramite formazione / informazione sul miglior modo di
                approcciarsi al proprio familiare. Sono incontri dedicati a
                tutti i tipi di caregivers (familiari, badanti, assistenti,
                etc.)
            </div>

            <div className="year">Anno 2025</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2025}
                        title="L'utilizzo dello smartphone"
                        pdfUrl={Loc01_2025}
                    />
                </div>
            </div>

            <div className="year">Anno 2024</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2024}
                        title="L'utilizzo dello smartphone"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2024}
                        title="Musicoterapia per il benessere del caregiver"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2024}
                        title="L'utilizzo dello smartphone"
                    />
                </div>
            </div>

            <div className="year">Anno 2023</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2023}
                        title="Domiciliarità 2.0"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2023}
                        title="Musicoterapia per il benessere del caregiver"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2023}
                        title="La difficile 'arte' dell'aver cura"
                    />
                </div>
            </div>

            <div className="year">Anno 2022</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2022}
                        title="Domiciliarità 2.0"
                    />
                </div>
            </div>

            <div className="year">Anno 2021</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc05_2021}
                        title="Tra gioco ed illusione: il fenomeno del gioco d'azzardo"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc04_2021}
                        title="Una mappa per capire, accettare ed aiutare una persona con demenza"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2021}
                        title="Aperitivi tematici"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2021}
                        title="Domiciliarità 2.0"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2021}
                        title="Un aiuto per la tua famiglia"
                    />
                </div>
            </div>

            <div className="year">Anno 2020</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2020}
                        title="Gestione dell'anziano nella sua totalità a domicilio"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2020}
                        title="Gesitre un anziano con problemi di memoria durante il COVID-19"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2020}
                        title="Martedì della salute"
                    />
                </div>
            </div>

            <div className="year">Anno 2017</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2017}
                        title="Corso di formazione"
                    />
                </div>
            </div>
        </>
    );
};

export default Corsi;
