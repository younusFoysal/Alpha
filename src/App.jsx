import React from 'react';
import Navbar from "./components/navbar.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <ProductDetails/>
        </div>
    );
};

export default App;