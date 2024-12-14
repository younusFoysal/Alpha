import React from 'react';
import "./modal.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CarModel from "./CarModel.jsx";
import {IoMdArrowRoundBack} from "react-icons/io";


// eslint-disable-next-line react/prop-types
const Modalbox = ({isModalOpen, closeModal}) => {

    console.log(isModalOpen)


    return (
        <div className=" modal-overlay overflow-hidden" style={isModalOpen ? {top: "0"} : {}}>

            <div className="modal-content h-full">

                <div className="h-full">

                    <div className="flex justify-between items-center flex-col sm:flex-row sm:items-center pt-4">

                        <button onClick={closeModal}
                                className="flex justify-center items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg mb-4 sm:mb-0">
                            <IoMdArrowRoundBack/>Close 360° View
                        </button>

                        <h2 className="text-xl font-bold text-center sm:text-left sm:ml-4">Lamborghini Murciélago LP
                            670</h2>

                        <div className="flex flex-col items-baseline sm:items-end mt-2 sm:mt-0">
                            <span className="text-2xl font-bold">₹ 13.42 Lakh</span>
                            <span className="text-gray-500 line-through">₹ 13.62 Lakh</span>
                        </div>

                    </div>


                    <div className="border border-gray-950 h-full overflow-hidden rounded-xl mt-5">

                        <Canvas camera={{position: [3, 3, 7], fov: 50}}>
                            <ambientLight intensity={2}/>

                            <directionalLight position={[3, 5, 2]} intensity={3.0} castShadow={true}/>

                            <pointLight position={[3, 3, 2]} intensity={3.5} color="white" castShadow={true}/>
                            <pointLight position={[-3, 3, 2]} intensity={3.5} color="white" castShadow={true}/>

                            <spotLight position={[3, 6, 1]} intensity={3.0} angle={0.5} color="white"
                                       castShadow={true}/>
                            <spotLight position={[-3, 6, 1]} intensity={3.0} angle={0.5} color="white"
                                       castShadow={true}/>

                            {/* Reflected Light for Ground Lighting */}
                            <rectAreaLight
                                width={10}
                                height={10}
                                color="white"
                                intensity={2.0}
                                position={[0, -2, 0]}
                                rotation={[-Math.PI / 2, 0, 0]} // Place it beneath the ground
                                castShadow={true}
                            />

                            <ambientLight intensity={0.5} color="white"/>

                            <CarModel/>
                            <OrbitControls
                                enablePan={false} // Disable panning
                                minPolarAngle={0} // Minimum vertical angle (optional)
                                maxPolarAngle={89 * (Math.PI / 180)} // Maximum vertical angle (90 degrees)
                                minDistance={2} // Set minimum zoom distance
                                maxDistance={10} // Set maximum zoom distance
                            />
                        </Canvas>


                    </div>


                </div>


            </div>
        </div>
    );
};

export default Modalbox;