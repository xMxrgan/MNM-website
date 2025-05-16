import "../Style.css";
import TodaysDate from "../components/todaysDate";
import NavBar from "../components/MNMnavbar";
import MNMeventsCarousel from "../components/MNMcoursesEventsCarousel";

import Loc01_2017 from "../assets/MNMcourses/aiuto_per_la_famiglia_2021.png";

const Eventi = () => {
    return (
        <>
            <NavBar />
            <TodaysDate />

            <div className="year">Anno 2025</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2024</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2023</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2022</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2021</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2020</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2019</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2018</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>

            <div className="year">Anno 2017</div>
            <div className="mnm-events-carousel-wrapper">
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
                <div className="mnm-events-carousel-slide">
                    <MNMeventsCarousel image={Loc01_2017} title="Aperitivi" />
                </div>
            </div>
        </>
    );
};

export default Eventi;
