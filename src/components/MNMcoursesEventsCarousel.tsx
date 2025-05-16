import React from "react";

const MNMeventsCarousel = ({
    image,
    title,
}: {
    image: string;
    title: string;
}) => {
    const chooseYear: number = 2025; // To initialize the year

    return (
        <div className="mnm-events-carousel">
            {/* Your carousel content here */}
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>Year: {chooseYear}</p>
        </div>
    );
};

export default MNMeventsCarousel;
