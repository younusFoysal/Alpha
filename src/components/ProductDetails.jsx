import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
    const carImages = [
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
        "/images/car4.jpg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-8">
            {/* Image Carousel */}
            <div className="w-full md:w-1/2">
                <Slider {...settings}>
                    {carImages.map((image, index) => (
                        <div key={index} className="p-2">
                            <img
                                src={image}
                                alt={`Car ${index + 1}`}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-2xl font-bold">Car Model XYZ</h1>
                <p className="text-gray-600">Price: $25,000</p>
                <p className="text-gray-800">
                    This is a detailed description of the car. It highlights its features,
                    specifications, and other details that make it an attractive choice.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
