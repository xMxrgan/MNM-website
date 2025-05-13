import "../Style.css"; // Importa lo stile CSS per il carousel (creeremo questo file dopo)
import React from "react";

interface Professionist {
    photo?: string;
    name: string;
    profession: string;
    description: string;
    // Add any other properties that might be needed
}

const ProfessionistCarousel = ({
    professionists,
}: {
    professionists: Professionist[];
}) => {
    const [selectedProfessionist, setSelectedProfessionist] =
        React.useState<Professionist | null>(null);

    const handleClick = (professionist: Professionist) => {
        setSelectedProfessionist(professionist);
    };

    return (
        <div className="professionist">
            {professionists.map(
                (professionist: Professionist, index: number) => (
                    <div key={index} className="professionist-item">
                        <img
                            src={professionist.photo}
                            alt={professionist.name}
                            className="professionist-photo"
                            onClick={() => handleClick(professionist)}
                        />
                        <p className="professionist-name">
                            {professionist.name}
                        </p>
                        <p className="professionist-profession">
                            {professionist.profession}
                        </p>
                    </div>
                ),
            )}

            {selectedProfessionist && (
                <div className="professionist-details">
                    <h2>{selectedProfessionist.name}</h2>
                    <p>{selectedProfessionist.description}</p>
                    {/* Altre informazioni desiderate */}
                </div>
            )}
        </div>
    );
};

export default ProfessionistCarousel;
