import ActivityCard from "../components/activityCard";
import TodaysDate from "../components/todaysDate";
import NavBar from "../components/MNMnavbar";

import PetTherapy from "../assets/MNMactivities/dogs.png";
import MusicTherapy from "../assets/MNMactivities/instruments.png";
import CognitiveStimulation from "../assets/MNMactivities/stimolazioneCognitiva.jpg";
import ArtTherapy from "../assets/MNMactivities/artTherapy.jpg";
import SewingActivity from "../assets/MNMactivities/sewing.jpeg";
import SingingTherapy from "../assets/MNMactivities/singers.jpg";
import AutoMutuoAiuto from "../assets/MNMactivities/automutuoaiuto.jpg";
import GinnasticaDolce from "../assets/MNMactivities/ginnastica_dolce.jpg";
import Socializing from "../assets/MNMactivities/socializing.jpg";

import "../Style.css";

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
                        dateAndTimeConcamarise="🔄 Via Piazza Ex Chiesa Antica (Concamarise) — Ciclica"
                        description="La pet therapy, o interventi assistiti con gli animali (IAA), è un'attività che proponiamo per migliorare la qualità della vita di persone con Alzheimer o decadimento cognitivo, grazie alla presenza di animali addestrati e professionisti qualificati."
                    />

                    <ActivityCard
                        imageSrc={MusicTherapy}
                        title="Musicoterapia"
                        dateAndTimeConcamarise="🕤 Via Piazza Ex Chiesa Antica (Concamarise) — Giovedì 9:30 / 11:30"
                        dateAndTimeBovolone="🕘 Villa Panteo Zampieri (Bovolone) — Venerdì 9:00 / 11:00"
                        description="Attività musicali di movimento che favoriscono la comunicazione e la socializzazione."
                    />

                    <ActivityCard
                        imageSrc={GinnasticaDolce}
                        title="Ginnastica dolce"
                        dateAndTimeConcamarise="🕒 Via Piazza Ex Chiesa Antica (Concamarise) — Mercoledì 15:00 / 16:00"
                        dateAndTimeBovolone="🕒 Villa Panteo Zampieri (Bovolone) — Lunedì 15:00 / 16:00"
                        description="Semplici giochi ed esercizi, adibiti all'attivazione di capacità motorie e residue del vostro caro."
                    />
                    <ActivityCard
                        imageSrc={SewingActivity}
                        title="Renata e le sue amiche"
                        dateAndTimeConcamarise="🕘 Via Piazza Ex Chiesa Antica (Concamarise) — Mercoledì 9:00 / 11:00"
                        description="Esecuzione lavori manuali, maglia, cucito, uncinetto ed altro. Ritrovare la serenità con un gomitolo..."
                    />
                    <ActivityCard
                        imageSrc={AutoMutuoAiuto}
                        title="Auto mutuo aiuto"
                        dateAndTimeConcamarise="🔄 Via Piazza Ex Chiesa Antica (Concamarise) — Una volta al mese."
                        dateAndTimeBovolone="🔄 Villa Panteo Zampieri (Bovolone) — Una volta al mese."
                        description="Appuntamenti condotti da psicologi che sanno guidare nel difficile percorso di affiancamento."
                    />
                </div>

                <div className="rightColumnActivities">
                    <ActivityCard
                        imageSrc={CognitiveStimulation}
                        title="Stimolazione cognitiva"
                        dateAndTimeConcamarise="🕒 Via Piazza Ex Chiesa Antica (Concamarise) — Lunedì 15:00 / 17:00"
                        dateAndTimeBovolone="🕒 Villa Panteo Zampieri (Bovolone) — Martedì 15:00 / 17:00"
                        description="Incontri guidati da psicologhe ed educatrici che puntano al mantenimento delle abilità cognitive residue."
                    />
                    <ActivityCard
                        imageSrc={SingingTherapy}
                        title="Cantoterapia"
                        dateAndTimeConcamarise="🔄 Via Piazza Ex Chiesa Antica (Concamarise) — Ciclico"
                        dateAndTimeBovolone=""
                        description="La cantoterapia è una nuova forma di arte terapia che sfrutta gli effetti terapeutici del canto. 'Canta che ti passa'."
                    />
                    <ActivityCard
                        imageSrc={Socializing}
                        title="Socializzazione"
                        dateAndTimeConcamarise=""
                        dateAndTimeBovolone=""
                        description=""
                    />
                    <ActivityCard
                        imageSrc={ArtTherapy}
                        title="Arte terapia"
                        dateAndTimeConcamarise="🕓 Via Piazza Ex Chiesa Antica (Concamarise) — Mercoledì 16:00 / 17:30"
                        description=""
                    />
                </div>
            </div>
        </>
    );
};

export default Activities;
