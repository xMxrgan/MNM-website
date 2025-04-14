import ActivityCard from "../components/activityCard";
import "../Style.css";

import ProvaImmagine from "../assets/react.svg";

const Activities = () => {
    return (
        <div className="activities-container">
            <div className="leftColumnActivities">
                {" "}
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
    );
};

export default Activities;
