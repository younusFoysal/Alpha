import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Modalbox from "./modal.jsx";
import CarDetails from "./CarDetails.jsx";




// Load the 360° Car Model



const ProductDetails = () => {

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    // Handlers for opening and closing modal
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const images  = [
        { id: 1, src: "/src/assets/images/car1.png" },
        { id: 2, src: "/src/assets/images/car4.png" },
        { id: 3, src: "/src/assets/images/car3.png" },
        { id: 4, src: "/src/assets/images/car2.png" },


    ];



    return (
        <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">

            {/* Image Carousel */}
            <div className=" relative w-full max-w-3xl mx-auto p-4">
                {/* Main Carousel */}
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    pagination={{ clickable: true }}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Navigation, Thumbs, Pagination]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="relative w-full rounded-lg"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={image.id} className="relative">
                            <img
                                src={image.src}
                                alt={`Car Image ${index + 1}`}
                                className="w-full object-cover rounded-lg"
                            />


                            {/* Show 360° Button Only on the First Image */}
                            {activeIndex === 0 && (
                                <button
                                    onClick={openModal}
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 z-10"
                                >
                                    View 360°
                                </button>
                            )}



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
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                className="cursor-pointer object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* 360° Viewer Modal */}
                {/* Modal component */}
                <Modalbox isModalOpen={isModalOpen} closeModal={closeModal}></Modalbox>





            </div>

            {/* Product Details */}
            <CarDetails/>
        </div>
    );
};

export default ProductDetails;
