"use client";

import { useState, useEffect } from "react";

export default function Feedback() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            quote: "“Cute 100% vegan Italian restaurant with delicious homemade food. Staff is super nice and welcoming and the ambience is a mix of classical and relaxed Italian vibes. Food was definitely outstanding and for a fair price.”",
            author: "John Doe"
        },
        {
            quote: "“Amazing experience! The food is always fresh, and the ambiance is just perfect for a relaxed evening with friends. Highly recommend it!”",
            author: "Jane Smith"
        },
        {
            quote: "“The best vegan pizza in town! The crust was perfectly crispy, and the toppings were full of flavor. Definitely a new favorite place for me.”",
            author: "Alice Williams"
        }
    ];

    const slidesToShow = [...slides, ...slides];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesToShow.length);
        }, 5000); // 5-second delay for each slide transition

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [slidesToShow.length]); // This effect runs when the length of slides changes

    return (
        <div className="w-full py-28 bg-white bg-local  flex items-center justify-center flex-col">
            <h1 className="text-sm tracking-widest text-strongText uppercase font-medium ">
                What Our Customers Say
            </h1>

            <div className="mt-6 px-4 w-full xl:w-3/4 relative overflow-hidden">
                <div
                    className="w-full flex items-center justify-start transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slidesToShow.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex items-center justify-center flex-col flex-shrink-0"
                        >
                            <h1 className="font-playfair font-normal text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl text-center text-textWeak px-4">
                                {slide.quote}
                            </h1>
                            <h6 className="text-textWeak mt-3 font-normal text-base tracking-wider">{slide.author}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
