import React from 'react';
import { Info, Calendar, Gauge, Settings2, Shield, MapPin } from 'lucide-react';
import CarData from "./CarData.jsx";



const CarOverview  = () => {
    return (
        <div className="max-w-3xl p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Car Overview</h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <CarData
                        icon={<Calendar className="w-5 h-5" />}
                        label="Model"
                        value="Murciélago LP 650"
                    />
                    <CarData
                        icon={<Calendar className="w-5 h-5" />}
                        label="Year"
                        value="2002–2010"
                    />
                    <CarData
                        icon={<Info className="w-5 h-5" />}
                        label="Fuel Type"
                        value="Petrol"
                    />
                    <CarData
                        icon={<Gauge className="w-5 h-5" />}
                        label="Mileage"
                        value="332K km/hr"
                    />
                    <CarData
                        icon={<Settings2 className="w-5 h-5" />}
                        label="Transmission"
                        value="Automatic (Torque Convertor)"
                    />
                    <CarData
                        icon={<Info className="w-5 h-5" />}
                        label="Price"
                        value="₹1,783,000"
                    />
                    <CarData
                        icon={<Shield className="w-5 h-5" />}
                        label="Insurance Validity"
                        value="Jul 2025"
                    />
                    <CarData
                        icon={<Shield className="w-5 h-5" />}
                        label="Insurance Type"
                        value="Comprehensive"
                    />
                    <CarData
                        icon={<MapPin className="w-5 h-5" />}
                        label="Car Location"
                        value="Sohna Road, Gurgaon"
                    />
                </div>
            </div>
        </div>
    );
};

export default CarOverview;