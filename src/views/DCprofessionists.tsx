import DCnavbar from "../components/DCnavbar";
import Professionist from "../components/professionistsCarousel";
import "../Style.css";

const DCprofessionists = () => {
    // Temporary empty array to fix the missing props error
    const dummyProfessionists: any[] = [];

    return (
        <>
            <div>
                <DCnavbar />
                <Professionist professionists={dummyProfessionists} />
                <h1>Torna più tardi...</h1>
            </div>
        </>
    );
};

export default DCprofessionists;
