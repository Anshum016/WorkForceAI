// src/components/Carousel.jsx
import React, { useState } from 'react';
import WORKFORCEAI from '../assets/WORKFORCEAI.svg'

const images = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <div className="relative w-full px-3 md:max-w-5xl md:h-96 mx-auto overflow-hidden mb-20">
            <img
                src={images[current]}
                alt="carousel-slide"
                className="w-full md:h-96 object-cover rounded-3xl"
            />
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded cursor-pointer">
                ◀
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded cursor-pointer">
                ▶
            </button>
        </div>
    );
};

export default Carousel;
