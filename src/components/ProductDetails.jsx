import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";



const ProductDetails = () => {

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    const images  = [
        "/src/assets/images/car1.png",
        "/src/assets/images/car2.png",
        "/src/assets/images/car3.png",
        "/src/assets/images/car4.png",
        "/src/assets/images/car5.png",
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
            <div className="w-full max-w-4xl mx-auto p-4">
                {/* Main Carousel */}
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Navigation, Thumbs]}
                    className="w-full rounded-lg"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Car Image ${index + 1}`}
                                className="w-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnail Carousel */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="mt-4"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="cursor-pointer object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
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
