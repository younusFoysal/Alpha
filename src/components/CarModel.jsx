import React from "react";
import {useGLTF} from "@react-three/drei";

const CarModel = () => {
    const gltf = useGLTF("/src/assets/images/car.glb");
    return <primitive object={gltf.scene} scale={1.5} />;
};

export default CarModel;