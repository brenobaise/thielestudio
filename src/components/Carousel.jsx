import React, { useState, useEffect } from "react";

const images = [
    "/nobg-logo.png",
    "/brazil.png",
    "/italy.png"
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full mt-10 ">
            <div className="relative h-56  md:h-96 overflow-hidden rounded-lg">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 md:object-contain ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
