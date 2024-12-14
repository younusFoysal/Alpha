import React from 'react';

const CarData = ({ icon, label, value }) => {
    return (
        <div className="flex items-start gap-3 p-4">
            <div className="text-blue-600">
                {icon}
            </div>
            <div>
                <p className="text-gray-500 text-sm">{label}</p>
                <p className="font-semibold text-gray-900">{value}</p>
            </div>
        </div>
    );
};

export default CarData;