import React from 'react';

const CarDetails = () => {
    return (
            <div className="w-full md:w-1/2 space-y-4 rounded-xl shadow-sm border border-gray-100 p-4" >
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
    );
};

export default CarDetails;