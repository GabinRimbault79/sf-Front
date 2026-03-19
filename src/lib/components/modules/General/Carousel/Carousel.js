import React, { useState, useEffect, Children, useCallback } from 'react';

export default function Carousel({ classCarousel, children, slideInterval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = Children.map(children, (child) => child.props.src);
    const [activeSlide, setActiveSlide] = useState(currentIndex);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
        setActiveSlide(index);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextSlide = useCallback(() => { // Utilisez useCallback pour mémoriser la fonction
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images]);

    useEffect(() => {
        const carouselInterval = setInterval(goToNextSlide, slideInterval);

        return () => {
            clearInterval(carouselInterval);
        };
    }, [images, slideInterval, goToNextSlide]);

    const currentImage = images[currentIndex];

    return (
        <div className={"carousel " + classCarousel}>
            <img src={currentImage} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-navigation">
                <button type="button" className={"carousel-button"} onClick={goToPreviousSlide} aria-label="Previous slide">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button type="button" className={"carousel-button"} onClick={goToNextSlide} aria-label="Next slide">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="slide-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`slide-indicator ${index === activeSlide ? 'active' : ''}`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === activeSlide ? "true" : undefined}
                        onClick={() => handleSlideChange(index)}
                    ></button>
                ))}
            </div>
        </div>

    );
}
