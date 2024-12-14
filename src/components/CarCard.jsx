import React from 'react';
import { Heart, MapPin } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const CarCard = ({ car }) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover md:h-56 lg:h-64"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition">
                    <Heart className="w-5 h-5 text-gray-600"/>
                </button>
                {car?.savings && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-sm">
                        Save ₹{car?.savings.toLocaleString()}
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car?.name}</h3>

                <div className="flex justify-between items-baseline mb-3">
                    <div>
                        <span className="text-xl font-bold">{formatPrice(car?.price)}</span>
                        {car?.originalPrice > car?.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                                {formatPrice(car?.originalPrice)}
                            </span>
                        )}
                    </div>
                    <div className="text-sm text-gray-600">
                        EMI from ₹{car?.emi}/m
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-3 sm:grid-cols-3 lg:grid-cols-2">
                    <div className="flex items-center gap-1 text-gray-600">
                        <span className="font-medium">{car?.kilometers} km</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <span className="font-medium">{car?.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <span className="font-medium">{car?.transmission}</span>
                    </div>
                </div>

                <div className="flex items-start gap-1 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                    <span>{car?.location}</span>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
