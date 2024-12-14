import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Modalbox from "./modal.jsx";
import CarDetails from "./CarDetails.jsx";
import {LuRotate3D} from "react-icons/lu";




// Load the 360° Car Model



const ProductCarousel = () => {

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    // Handlers for opening and closing modal
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const images  = [
        { id: 1, src: "/images/car1.png" },
        { id: 2, src: "/images/car4.png" },
        { id: 3, src: "/images/car3.png" },
        { id: 4, src: "/images/car2.png" },


    ];



    return (<>


            {/* Image Carousel */}
            <div className=" relative w-full max-w-3xl mx-auto p-4">
                {/* Main Carousel */}
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    pagination={{clickable: true}}
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
                                    className="absolute w-44 flex justify-center gap-2  items-center shadow-lg bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-sky-700 z-10"
                                >
                                    <span className=" text-sm md:text-sm sm:text-sm flex md:gap-2"> Click to View 360° <LuRotate3D className="mt-1" /> </span>
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


        </>
    );
};

export default ProductCarousel;
