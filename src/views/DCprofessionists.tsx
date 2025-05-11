import DCnavbar from "../components/DCnavbar";
import "../Style.css";

const DCprofessionists = () => {
    // Temporary array to fix the missing props error
    const Morgan = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];

    const Morgan2 = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];

    const Morgan3 = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];

    const Morgan4 = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];

    return (
        <>
            <DCnavbar />
            <div className="professionist-carousel">
                <ProfessionistCarousel professionists={Morgan} />
                <ProfessionistCarousel professionists={Morgan2} />
                <ProfessionistCarousel professionists={Morgan3} />
                <ProfessionistCarousel professionists={Morgan4} />
            </div>

            <div className="">
                <h1>Torna più tardi...</h1>
            </div>
        </>
    );
};

export default DCprofessionists;
