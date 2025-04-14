import ActivityCard from "../components/activityCard";
import TodaysDate from "../components/todaysDate";
import "../Style.css";

import ProvaImmagine from "../assets/react.svg";

const Activities = () => {
    return (
        <>
            <TodaysDate />
            <div className="activities-container">
                <div className="leftColumnActivities">
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        description="Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        description="Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        description="Lorem ipsum dolor sit amet,
                bibendum non venenatis nisl tempor."
                    />
                </div>

                <div className="rightColumnActivities">
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        description="Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        description="Lorem ipsum dolor sit amet,"
                    />
                    <ActivityCard
                        imageSrc={ProvaImmagine}
                        title="Esempio di prova"
                        description="Lorem ipsum dolor sit amet,
                bibendum non venenatis nisl tempor."
                    />
                </div>
            </div>
        </>
    );
};

export default Activities;
