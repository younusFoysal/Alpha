import React, {useEffect, useState} from 'react';
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {FaIndianRupeeSign} from "react-icons/fa6";

ChartJS.register(ArcElement, Tooltip, Legend);

const PriceCalculator = () => {

    const [invitesNumber, setInvitesNumber] = useState(7115);
    const [duration, setDuration] = useState(77);
    const [cost, setCost] = useState(0);

    const calculateCost = () => {
        setCost(invitesNumber * duration);
    };

    useEffect(() => {
        calculateCost();
    }, [invitesNumber, duration]);

    const chartData = {
        labels: ['Number of Invites', 'Duration (Days)'],
        datasets: [
            {
                data: [invitesNumber, duration * 30],
                backgroundColor: ['#336699', '#99CCFF'],
                borderWidth: 0,
            },
        ],
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div>
            <div className="max-w-3xl p-6  mb-10">
                <h1 className="text-2xl font-bold mb-6 text-blue-900">Price Calculator</h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    <div className="space-y-6">
                        <div className="text-center mb-4">
                            <p className="text-sm text-gray-600">Total Cost</p>
                            <p className="text-4xl font-bold text-sky-700">
                                {formatCurrency(cost)}
                            </p>
                        </div>

                        <div className="relative h-64 w-64 mx-auto">
                            <Doughnut
                                data={chartData}
                                options={{
                                    plugins: {legend: {display: false}},
                                    rotation: -90,
                                    circumference: 180,
                                    cutout: "60%",
                                    maintainAspectRatio: true,
                                    responsive: true,
                                }}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[rgb(203, 255, 241)]"></div>
                                    <span>Total Invites</span>
                                </div>
                                <span>{invitesNumber}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[rgb(0, 200, 150)]"></div>
                                    <span>Duration (Days)</span>
                                </div>
                                <span>{duration * 30} Days</span>
                            </div>
                            <div className="flex justify-between items-center font-semibold pt-2 border-t">
                                <span>Total Cost</span>
                                <span>{formatCurrency(cost)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <label className="flex justify-between text-sm font-medium mb-2">
                                <span>Number of Invites</span>
                                <span>{invitesNumber}</span>
                            </label>
                            <input
                                type="range"
                                min="1000"
                                max="50000"
                                value={invitesNumber}
                                onChange={(e) => setInvitesNumber(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                style={{
                                    background: `linear-gradient(to right, #2563EB 0%, #2563EB ${
                                        ((invitesNumber - 1000) / (50000 - 1000)) * 100
                                    }%, #E5E7EB ${
                                        ((invitesNumber - 1000) / (50000 - 1000)) * 100
                                    }%, #E5E7EB 100%)`,
                                }}
                            />
                        </div>

                        <div>
                            <label className="flex justify-between text-sm font-medium mb-2">
                                <span>Duration of Event</span>
                                <span>{duration} Months</span>
                            </label>
                            <input
                                type="range"
                                min="6"
                                max="84"
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                style={{
                                    background: `linear-gradient(to right, #2563EB 0%, #2563EB ${
                                        ((duration - 6) / (84 - 6)) * 100
                                    }%, #E5E7EB ${
                                        ((duration - 6) / (84 - 6)) * 100
                                    }%, #E5E7EB 100%)`,
                                }}
                            />
                        </div>

                        <button
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium shadow-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                            <FaIndianRupeeSign size={15}/>
                            PAY NOW
                        </button>

                        <p className="text-xs text-gray-500">*Processing fee and other loan charges are not
                            included.</p>

                        <p className="text-xs text-gray-500">
                            <span className="font-semibold">Disclaimer:</span> Applicable rate of charges can vary
                            subject to credit profile. Loan approval is at the sole discretion of the finance partner.
                        </p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default PriceCalculator;
