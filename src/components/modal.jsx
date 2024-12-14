import React from 'react';
import "./modal.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CarModel from "./CarModel.jsx";


// eslint-disable-next-line react/prop-types
const Modalbox = ({isModalOpen, closeModal}) => {

    console.log(isModalOpen)


    return (
        <div className=" modal-overlay" style={isModalOpen ? {top: "0"} : {}}>

            <div className="modal-content">

                <div className="">

                    <div className="flex justify-between items-center">

                        <button onClick={closeModal} className="close-modal-button">
                            Close
                        </button>


                        <h2 className="text-blue-700">Modal Title</h2>
                        <p className="text-blue-700">This is the modal content.</p>

                    </div>

                    <div className="border border-gray-950 h-screen mt-5">

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