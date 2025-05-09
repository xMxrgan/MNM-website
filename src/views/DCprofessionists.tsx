import DCnavbar from "../components/DCnavbar";
import Professionist from "../components/professionistsCarousel";
import "../Style.css";

const DCprofessionists = () => {
    // Temporary array to fix the missing props error
    const dummyProfessionists = [
        { name: "Morgan", description: "Figo", photo: "default.jpg" },
    ];

    return (
        <>
            <DCnavbar />
            <Professionist professionists={dummyProfessionists} />
            <div>
                <h1>Torna più tardi...</h1>
                <h1>Torna più tardi...</h1>
                <h1>Torna più tardi...</h1>
            </div>
        </>
    );
};

export default DCprofessionists;
