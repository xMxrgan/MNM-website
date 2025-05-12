import ActivityCard from "../components/activityCard";
import TodaysDate from "../components/todaysDate";
import NavBar from "../components/MNMnavbar";
import "../Style.css";
import PetTherapy from "../assets/dogs.png";
import MusicTherapy from "../assets/instruments.png";

const Activities = () => {
    return (
        <>
            <NavBar />
            <TodaysDate />
            <div className="activities-container">
                <div className="leftColumnActivities">
                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Pet Therapy"
                        dateAndTimeConcamarise="🔄 CICLICA "
                        description="La pet therapy, o interventi assistiti con gli animali (IAA), è un'attività che proponiamo per migliorare la qualità della vita di persone con Alzheimer o decadimento cognitivo, grazie alla presenza di animali addestrati e professionisti qualificati."
                    />

                    <ActivityCard
                        imageSrc={MusicTherapy}
                        title="Musicoterapia"
                        dateAndTimeConcamarise="🕤 CONCAMARISE — Giovedì 9:30 / 11:30"
                        dateAndTimeBovolone="🕤 BOVOLONE — Venerdì 9:30 / 11:30"
                        description="La musicoterapia è un'attività che utilizziamo per stimolare emozioni, ricordi e comunicazione nelle persone con Alzheimer, attraverso l’ascolto, il canto e l’uso di strumenti musicali, guidati da terapisti specializzati."
                    />

                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Ginnastica dolce"
                        dateAndTimeConcamarise="Sempre"
                        dateAndTimeBovolone="Sempre"
                        description="Lorem ipsum dolor sit amet, \nLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                    />
                </div>

                <div className="rightColumnActivities">
                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Stimolazione cognitiva"
                        dateAndTimeConcamarise="🕒 CONCAMARISE — 15:00 / 17:00"
                        dateAndTimeBovolone="🕒 BOVOLONE — 15:00 / 17:00"
                        description="La stimolazione cognitiva è un’attività che proponiamo per mantenere attive le funzioni mentali nelle persone con Alzheimer, attraverso esercizi mirati svolti in piccoli gruppi guidati da professionisti specializzati."
                    />
                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Cantoterapia"
                        dateAndTimeConcamarise="Sempre"
                        dateAndTimeBovolone="Sempre"
                        description="La cantoterapia è un’attività che utilizziamo per stimolare memoria, linguaggio ed emozioni nelle persone con Alzheimer, attraverso il canto di gruppo, il ritmo e il coinvolgimento attivo guidato da operatori specializzati."
                    />
                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Socializzazione"
                        dateAndTimeConcamarise="Sempre"
                        dateAndTimeBovolone="Sempre"
                        description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                    />
                    <ActivityCard
                        imageSrc={PetTherapy}
                        title="Arte terapia"
                        dateAndTimeConcamarise="Sempre"
                        dateAndTimeBovolone="Sempre"
                        description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                    />
                </div>
            </div>
        </>
    );
};

export default Activities;
