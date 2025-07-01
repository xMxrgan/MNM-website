import "../Style.css";
import TodaysDate from "../components/todaysDate";
import NavBar from "../components/MNMnavbar";
import MNMeventsCarousel from "../components/MNMcoursesEventsCarousel";

import Loc01_2017 from "../assets/MNMevents/IMG_4291.png";
import Loc02_2017 from "../assets/MNMevents/IMG_4292.png";
import Loc03_2017 from "../assets/MNMevents/IMG_4295.png";
import Loc04_2017 from "../assets/MNMevents/IMG_4296.png";
import Loc05_2017 from "../assets/MNMevents/IMG_4298.png";
import Loc01_2018 from "../assets/MNMevents/IMG_4301.png";
import Loc02_2018 from "../assets/MNMevents/IMG_4304.png";
import Loc03_2018 from "../assets/MNMevents/IMG_4309.png";
import Loc04_2018 from "../assets/MNMevents/IMG_4312.png";
import Loc01_2019 from "../assets/MNMevents/IMG_4313.png";
import Loc02_2019 from "../assets/MNMevents/IMG_4314.png";
import Loc03_2019 from "../assets/MNMevents/IMG_4319.png";
import Loc04_2019 from "../assets/MNMevents/IMG_4322.png";
import Loc05_2019 from "../assets/MNMevents/IMG_4332.png";
import Loc06_2019 from "../assets/MNMevents/IMG_4334.png";
import Loc01_2020 from "../assets/MNMevents/IMG_4335.png";
import Loc01_2021 from "../assets/MNMevents/IMG_4348.png";
import Loc02_2021 from "../assets/MNMevents/IMG_4352.png";
import Loc01_2022 from "../assets/MNMevents/IMG_4360.png";
import Loc01_2023 from "../assets/MNMevents/IMG_4361.png";
import Loc02_2023 from "../assets/MNMevents/IMG_4363.png";
import Loc03_2023 from "../assets/MNMevents/IMG_4364.png";
import Loc04_2023 from "../assets/MNMevents/IMG_4366.png";
import Loc05_2023 from "../assets/MNMevents/IMG_4368.png";
import Loc06_2023 from "../assets/MNMevents/IMG_4369.png";
import Loc07_2023 from "../assets/MNMevents/IMG_4370.png";
import Loc08_2023 from "../assets/MNMevents/IMG_4371.png";
import Loc09_2023 from "../assets/MNMevents/IMG_4372.png";
import Loc10_2023 from "../assets/MNMevents/IMG_4373.png";
import Loc11_2023 from "../assets/MNMevents/IMG_4374.png";
import Loc01_2024 from "../assets/MNMevents/IMG_3661.png";
import Loc02_2024 from "../assets/MNMevents/IMG_3663.png";
import Loc03_2024 from "../assets/MNMevents/IMG_4376.png";
import Loc04_2024 from "../assets/MNMevents/IMG_4381.png";
import Loc05_2024 from "../assets/MNMevents/IMG_4383.png";
import Loc06_2024 from "../assets/MNMevents/IMG_4389.png";
import Loc01_2025 from "../assets/MNMevents/IMG_4390.png";
import Loc02_2025 from "../assets/MNMevents/IMG_4391.png";
import Loc03_2025 from "../assets/MNMevents/IMG_4411.png";
import Loc04_2025 from "../assets/MNMevents/IMG-20250611-WA0030.png";

const Eventi = () => {
    return (
        <>
            <NavBar />
            <TodaysDate />

            <div className="year">Anno 2025</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2025}
                        title="Centenario della scuola d'infanzia di Concamarise"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2025}
                        title="Donne in musica e poesia"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2025}
                        title="Carneval e tradizion"
                    />
                </div>
            </div>

            <div className="year">Anno 2024</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc06_2024}
                        title="Mercatini di Natale"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc05_2024}
                        title="Festa di metà estate"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc04_2024}
                        title="Centro estivo"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2024}
                        title="Note di femminilità"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2024}
                        title="La festa dei nonni, super nonni!"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2024}
                        title="Chiesa Antica di Concamarise in festa"
                    />
                </div>
            </div>

            <div className="year">Anno 2023</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc11_2023}
                        title="Un'appuntamento imperdibile"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc10_2023}
                        title="Libiam, è Natal"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc09_2023}
                        title="E poi sapete come andò a finire"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc08_2023}
                        title="Ricorda chi si dimentica"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc07_2023}
                        title="Meravigliosi anni '80"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc06_2023}
                        title="Fine estate party"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc05_2023}
                        title="ConcHistioria"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc04_2023}
                        title="Melodie in fiore"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2023}
                        title="Libiam, è Natal"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2023}
                        title="Invocando l'aurora"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2023}
                        title="Creiamo insieme"
                    />
                </div>
            </div>

            <div className="year">Anno 2022</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2022}
                        title="La festa dei nonni, super nonni!"
                    />
                </div>
            </div>

            <div className="year">Anno 2021</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2021}
                        title="Creiamo insieme"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2021}
                        title="Scambiamoci il nostro tempo"
                    />
                </div>
            </div>

            <div className="year">Anno 2020</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2020}
                        title="Serate di ballo e animazione"
                    />
                </div>
            </div>

            <div className="year">Anno 2019</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc06_2019}
                        title="Ti vengo a trovare"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc05_2019}
                        title="Tombola di Natale"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc04_2019}
                        title="Na molonara fora dal comune"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2019}
                        title="Canti in villa"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2019}
                        title="Racconti di vita, un percorso autobiografico di storie e tradizioni"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2019}
                        title="Giornata della memoria"
                    />
                </div>
            </div>

            <div className="year">Anno 2018</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc04_2018}
                        title="Un sogno nel cuore"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2018}
                        title="Nonni in festa, viva i nonni!"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2018}
                        title="Il tempo cammina i suoi passi"
                    />
                </div>

                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2018}
                        title="Mi na olta..."
                    />
                </div>
            </div>

            <div className="year">Anno 2017</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc05_2017}
                        title="Silenziose armonie"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc04_2017}
                        title="Inaugurazione del 'Centro Sollievo' di Bovolone"
                    />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc03_2017}
                        title="Sentire, vedere, toccare, gustare"
                    />
                </div>

                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc02_2017}
                        title="Festa dei nonni"
                    />
                </div>

                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel
                        image={Loc01_2017}
                        title="La musica più bella dagli anni '30 agli anni '70"
                    />
                </div>
            </div>
        </>
    );
};

export default Eventi;
