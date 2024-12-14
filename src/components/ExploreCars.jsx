import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'



import { FreeMode, Pagination, Autoplay  } from 'swiper/modules';
import CarCard from "./CarCard.jsx";

const car = [
    {
        "id": "1",
        "name": "2021 Mahindra Thar LX 4 STR",
        "price": 1294000,
        "originalPrice": 1299000,
        "image": "/src/assets/cars/1.jpg",
        "kilometers": 64000,
        "fuel": "Diesel",
        "transmission": "Automatic",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 23643,
        "savings": 5000
    },
    {
        "id": "2",
        "name": "2022 Mahindra Thar LX 4 STR",
        "price": 1342000,
        "originalPrice": 1362000,
        "image": "/src/assets/cars/5.jpg",
        "kilometers": 30000,
        "fuel": "Petrol",
        "transmission": "Automatic",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 24798,
        "savings": 20000
    },
    {
        "id": "3",
        "name": "2021 Mahindra Scorpio S9",
        "price": 1377000,
        "originalPrice": 1398000,
        "image": "/src/assets/cars/6.png",
        "kilometers": 48000,
        "fuel": "Diesel",
        "transmission": "Manual",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 25447,
        "savings": 21000
    },
    {
        "id": "4",
        "name": "2021 Mahindra Scorpio S5",
        "price": 1207000,
        "originalPrice": 1251000,
        "image": "/src/assets/cars/4.jpg",
        "kilometers": 45000,
        "fuel": "Diesel",
        "transmission": "Manual",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 22774,
        "savings": 44000
    },
    {
        "id": "5",
        "name": "2020 Hyundai Creta SX",
        "price": 1150000,
        "originalPrice": 1180000,
        "image": "/src/assets/cars/7.jpg",
        "kilometers": 35000,
        "fuel": "Petrol",
        "transmission": "Automatic",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 21745,
        "savings": 30000
    },
    {
        "id": "6",
        "name": "2019 Maruti Suzuki Vitara Brezza ZDi+",
        "price": 950000,
        "originalPrice": 990000,
        "image": "/src/assets/cars/8.jpg",
        "kilometers": 52000,
        "fuel": "Diesel",
        "transmission": "Manual",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 18750,
        "savings": 40000
    },
    {
        "id": "7",
        "name": "2021 Tata Harrier XT Plus",
        "price": 1500000,
        "originalPrice": 1530000,
        "image": "/src/assets/cars/9.jpg",
        "kilometers": 30000,
        "fuel": "Diesel",
        "transmission": "Automatic",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 27756,
        "savings": 30000
    },
    {
        "id": "8",
        "name": "2020 Kia Seltos HTK Plus",
        "price": 1300000,
        "originalPrice": 1350000,
        "image": "/src/assets/cars/10.jpg",
        "kilometers": 41000,
        "fuel": "Petrol",
        "transmission": "Manual",
        "location": "Spinny Hub, Universal Trade Tower, Sohna Road",
        "emi": 24000,
        "savings": 50000
    }
]


const ExploreCars = () => {
    return (
        <div className="w-full p-6  mb-10">
            <h1 className="text-2xl font-bold mb-6 text-blue-900">Explore Cars</h1>

            <div>
                <div className="my-10 mb-16">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        //autoplay={false}
                        pagination={false}
                        modules={[FreeMode, Autoplay]}
                        className="mb-4 h-full"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            car.map((item, index) => (
                                <SwiperSlide key={index}><CarCard car={item}/></SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>


        </div>
    );
};

export default ExploreCars;