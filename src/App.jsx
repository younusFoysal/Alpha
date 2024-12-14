import React from 'react';
import Navbar from "./components/navbar.jsx";
import ProductDetails from "./components/ProductCarousel.jsx";
import PriceCalculator from "./components/PriceCalculator.jsx";
import CarOverview from "./components/CarOverview.jsx";
import CarDetails from "./components/CarDetails.jsx";
import ProductCarousel from "./components/ProductCarousel.jsx";
import ExploreCars from "./components/ExploreCars.jsx";

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>

            <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">

                <div>
                    <ProductCarousel/>
                    <CarOverview/>
                    <PriceCalculator/>

                </div>

                <div>
                    {/* Product Details */}
                    <div className="flex items-center justify-center sticky top-8 mt-4">
                        <CarDetails
                            title="Lamborghini Murciélago LP 670–4 SuperVeloce Petrol AT 4WD"
                            distance="30K km"
                            fuelType="Petrol"
                            transmission="Automatic"
                            location="Spinny Car Hub, Universal Trade Tower, Sector 49, Gurgaon"
                            price={13.42}
                            originalPrice={13.62}
                            emi={24798}
                            discount={20000}
                            shortlistedCount={45}
                        />
                    </div>

                </div>

            </div>

            <ExploreCars/>


        </div>
    );
};

export default App;