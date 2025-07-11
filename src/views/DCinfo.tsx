import { useRef, useEffect, useState } from "react";
import DCnavbar from "../components/DCnavbar";
import "../Style.css";

const DCinfoContacts = () => {
    // Percorsi delle immagini nella public folder o src/assets se importate
    const images = [
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
        "../src/assets/foto_prova.jpg",
    ];

    const carouselRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const carousel = carouselRef.current;
        let animationId: number;

        const scroll = () => {
            if (!paused && carousel) {
                if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                    carousel.scrollLeft = 0;
                }
                carousel.scrollLeft += 40;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [paused]);

    return (
        <>
            <DCnavbar />

            <div className="DCinfoContacts">
                <h2>Galleria</h2>
                {/* Carosello immagini */}
                <div
                    className="carousel"
                    ref={carouselRef}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="carousel-image">
                            <img src={src} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>

                {/* Info contatti */}
                <div className="contact-info">
                    <div className="contacts">
                        <h2>Contattaci</h2>
                        <p>
                            <strong>Indirizzo:</strong> Via Lucio Battisti 16,
                            37050 Concamarise Verona
                        </p>
                        <p>
                            <strong>Telefono:</strong> +39 xxxxxxxxxx
                        </p>
                        <p>
                            <strong>Email:</strong> xxxxxxx@xxxxxxx,it
                        </p>
                        <p>
                            <strong>Orari:</strong> Lun-Ven, 7:00 - 18:00
                        </p>
                    </div>
                </div>
                <div className="DCmap-position">
                    <div className="map-container">
                        <iframe
                            src=""
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Mappa Sede"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DCinfoContacts;
