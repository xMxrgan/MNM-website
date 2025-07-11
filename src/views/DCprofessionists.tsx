import { useState } from "react";
import DCnavbar from "../components/DCnavbar";
import "../Style.css";

const DCprofessionists = () => {
    type Professionist = {
        name: string;
        profession: string;
        description: string;
        photo: string;
    };

    const Morgan1: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan2: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan3: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan4: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan5: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan6: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan7: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan8: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan9: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan10: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description: "Figo",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan11: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description:
                "Nam laudantium iste fugit dignissimos neque. Et rerum nemo repellat repudiandae aut laborum eum est. Labore accusamus velit voluptatibus eum sunt distinctio. Culpa architecto quis rem tempore minima consequatur reiciendis.",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];
    const Morgan12: Professionist[] = [
        {
            name: "Dr. Picariello",
            profession: "Sociologo",
            description:
                "Nam laudantium iste fugit dignissimos neque. Et rerum nemo repellat repudiandae aut laborum eum est. Labore accusamus velit voluptatibus eum sunt distinctio. Culpa architecto quis rem tempore minima consequatur reiciendis.",
            photo: "../src/assets/foto_prova.jpg",
        },
    ];

    const [selectedProf, setSelectedProf] = useState<Professionist | null>(
        null,
    );

    const ProfessionistGrid = ({
        professionists,
    }: {
        professionists: Professionist[];
    }) => (
        <div className="professionist-grid">
            {professionists.map((prof, index) => (
                <button
                    key={index}
                    className="professionist-card"
                    onClick={() => setSelectedProf(prof)}
                >
                    <img
                        src={prof.photo}
                        alt={prof.name}
                        className="profile-photo"
                    />
                    <h3>{prof.name}</h3>
                </button>
            ))}
        </div>
    );

    return (
        <>
            <DCnavbar />
            <div className="professionist-wrapper">
                <ProfessionistGrid professionists={Morgan1} />
                <ProfessionistGrid professionists={Morgan2} />
                <ProfessionistGrid professionists={Morgan3} />
                <ProfessionistGrid professionists={Morgan4} />
                <ProfessionistGrid professionists={Morgan5} />
                <ProfessionistGrid professionists={Morgan6} />
                <ProfessionistGrid professionists={Morgan7} />
                <ProfessionistGrid professionists={Morgan8} />
                <ProfessionistGrid professionists={Morgan9} />
                <ProfessionistGrid professionists={Morgan10} />
                <ProfessionistGrid professionists={Morgan11} />
                <ProfessionistGrid professionists={Morgan12} />
            </div>

            {selectedProf && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProf(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{selectedProf.name}</h2>
                        <p>
                            <strong>{selectedProf.profession}</strong>
                        </p>
                        <p>{selectedProf.description}</p>
                        <button onClick={() => setSelectedProf(null)}>
                            Chiudi
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DCprofessionists;
