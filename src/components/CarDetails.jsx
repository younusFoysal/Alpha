import React from 'react';
import { Heart, Mail, CheckCircle, Info, ChevronRight } from 'lucide-react';



// eslint-disable-next-line react/prop-types
const CarDetails = ({title, distance, fuelType, transmission, location, price, originalPrice, emi, discount, shortlistedCount,}) => {
    return (
        <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-blue-900">{title}</h2>
                <button className="text-gray-400 hover:text-red-500 flex-col justify-center items-center">
                    <Heart className="w-6 h-6 items-center"/>
                    <span className="text-xs">{shortlistedCount} people shortlisted</span>
                </button>
            </div>

            {/* Car Details */}
            <div className="flex gap-4 text-sm text-gray-600 mb-3">
                <span>{distance}</span>
                <span>•</span>
                <span>{fuelType}</span>
                <span>•</span>
                <span>{transmission}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span>{location}</span>
                <ChevronRight className="w-4 h-4"/>
            </div>

            {/* Assured Badge */}
            <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                <CheckCircle className="w-4 h-4"/>
                <span>High quality, less driven</span>
                <Info className="w-4 h-4 text-gray-400"/>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mb-2">
                <span className="text-2xl font-bold">₹{price.toFixed(2)} Lakh</span>
                <span className="text-gray-500 line-through">₹{originalPrice.toFixed(2)} Lakh</span>
            </div>

            {/* EMI */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-700">₹{emi.toFixed(0)}/m</span>
                <button className="text-blue-600 flex items-center gap-1">
                    View benefits <ChevronRight className="w-4 h-4"/>
                </button>
            </div>

            {/* Discount Badge */}
            <div className="flex items-center gap-2 text-emerald-600 mb-4">
        <span className="flex items-center">
          <span className="text-lg">₹</span>
            {discount.toLocaleString()}
        </span>
                <span>Weekend Special Sale</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <button className="flex-1 bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800">
                    BOOK NOW
                    <div className="text-xs">100% refundable</div>
                </button>
                <button className="flex-1 bg-sky-500 text-white py-3 rounded-md font-semibold hover:bg-sky-600">
                    FREE TEST DRIVE
                </button>
            </div>

            {/* Share Section */}
            <div className="mt-4 pt-4 border-t flex items-center gap-4">
                <span className="text-gray-600">Share with a friend :</span>
                <div className="flex gap-3">
                    <button className="text-blue-700 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"
                             fill="currentColor">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </button>
                    <button className="text-blue-700 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"
                             fill="currentColor">
                            <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </button>
                    <button className="text-blue-700 hover:text-blue-800">
                        <Mail className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;