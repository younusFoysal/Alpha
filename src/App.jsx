import React from 'react';
import Navbar from "./components/navbar.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import PriceCalculator from "./components/PriceCalculator.jsx";

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <ProductDetails/>
            <PriceCalculator/>
        </div>
    );
};

export default App;