import React from 'react';
import "./modal.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CarModel from "./CarModel.jsx";


const Modalbox = ({isModalOpen, closeModal}) => {

    console.log(isModalOpen)

    return (
        <div className=" modal-overlay" style={isModalOpen ? {top: "0"} : {}}>

            <div className="modal-content border border-purple-950">

                <div className="">

                    <div className="flex justify-between items-center">

                        <button onClick={closeModal} className="close-modal-button">
                            Close
                        </button>


                        <h2 className="text-blue-700">Modal Title</h2>
                        <p className="text-blue-700">This is the modal content.</p>

                    </div>

                    <div className="border border-gray-950 h-screen mt-16">

                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <CarModel />
                            <OrbitControls />
                        </Canvas>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default Modalbox;