import DCnavbar from "../components/DCnavbar";
import "../Style.css";

const DCinfoContacts = () => {
    // Percorsi delle immagini nella public folder o src/assets se importate
    const images = [
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
    ];

    return (
        <>
            <DCnavbar />
            <div className="DCinfoContacts">
                {/* Carosello immagini */}
                <div className="carousel">
                    {images.map((src, index) => (
                        <div key={index} className="carousel-image">
                            <img src={src} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>

                {/* Info contatti */}
                <div className="contact-info">
                    <h2>Contattaci</h2>
                    <p>
                        <strong>Indirizzo:</strong> Via Roma 123, Napoli, Italia
                    </p>
                    <p>
                        <strong>Telefono:</strong> +39 081 123 4567
                    </p>
                    <p>
                        <strong>Email:</strong> info@esempio.it
                    </p>
                    <p>
                        <strong>Orari:</strong> Lun-Ven, 9:00 - 18:00
                    </p>
                </div>
            </div>
        </>
    );
};

export default DCinfoContacts;
