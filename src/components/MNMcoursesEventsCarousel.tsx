const MNMeventsCarousel = ({
    image,
    title,
    pdfUrl
}: {
    image: string;
    title: string;
    pdfUrl?: string;
}) => {
    return (
        <div className="mnm-events-carousel">
            <img className="mnm-events-carousel-img" src={image} alt={title} />
            <div className="mnm-events-carousel-content">
                <div className="mnm-events-carousel-title-container">
                    <h2 className="mnm-events-carousel-title">{title}</h2>
                </div>
                {pdfUrl && (
                    <a href={pdfUrl} className="mnm-events-carousel-download">
                        Scarica
                    </a>
                )}
            </div>
        </div>
    );
};

export default MNMeventsCarousel;
