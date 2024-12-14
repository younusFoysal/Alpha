import React from 'react';
import Navbar from "./components/navbar.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import PriceCalculator from "./components/PriceCalculator.jsx";
import CarOverview from "./components/CarOverview.jsx";

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <ProductDetails/>
            <CarOverview/>
            <PriceCalculator/>
        </div>
    );
};

export default App;