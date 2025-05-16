import DCnavbar from "../components/DCnavbar";
import TodaysDate from "../components/todaysDate";
import "../Style.css";

const DCevents = () => {
    return (
        <>
            <DCnavbar />
            <TodaysDate />
            <div className="DCevents-container"></div>
        </>
    );
};

export default DCevents;
