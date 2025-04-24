import ActivityCard from "../components/activityCard";
import TodaysDate from "../components/todaysDate";
import "../Style.css";

// import ProvaImmagine from "../assets/react.svg";
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
            dateAndTimeConcamarise="Sempre"
            dateAndTimeBovolone="Sempre"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          />

          <ActivityCard
            imageSrc={PetTherapy}
            title="Pet Therapy"
            dateAndTimeConcamarise="Concamarise giovedì 9:30/11:30"
            dateAndTimeBovolone="Bovolone 9:30/11:30"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          />

          <ActivityCard
            imageSrc={PetTherapy}
            title="Pet Therapy"
            dateAndTimeConcamarise="Sempre"
            dateAndTimeBovolone="Sempre"
            description="Lorem ipsum dolor sit amet, \nLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          />
        </div>

        <div className="rightColumnActivities">
          <ActivityCard
            imageSrc={PetTherapy}
            title="Pet Therapy"
            dateAndTimeConcamarise="Sempre"
            dateAndTimeBovolone="Sempre"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          />
          <ActivityCard
            imageSrc={PetTherapy}
            title="Pet Therapy"
            dateAndTimeConcamarise="Sempre"
            dateAndTimeBovolone="Sempre"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          />
          <ActivityCard
            imageSrc={PetTherapy}
            title="Pet Therapy"
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
