import ActivityCard from "../components/activityCard";
import TodaysDate from "../components/todaysDate";
import "../Style.css";

import ProvaImmagine from "../assets/react.svg";
import PetTherapy from "../assets/IMG_3614.png";

const Activities = () => {
    return (
        <>
            <TodaysDate />
            <div className="activities-container">
                <div className="leftColumnActivities">
                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Pet Therapy"
                        dateAndTime="Sempre"
                        description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        dateAndTime="Sempre"
                        description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        dateAndTime="Sempre"
                        description="Lorem ipsum dolor sit amet, bibendum non venenatis nisl tempor. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                bibendum non venenatis nisl tempor."
                    />
                </div>

                <div className="rightColumnActivities">
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        dateAndTime="Sempre"
                        description="Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        dateAndTime="Sempre"
                        description="Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        dateAndTime="Sempre"
                        description="Lorem ipsum dolor sit amet,
                bibendum non venenatis nisl tempor. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                    />
                </div>
            </div>
        </>
    );
};

export default Activities;
