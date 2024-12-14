import React from "react";
import {useGLTF} from "@react-three/drei";


const CarModel = () => {
    const gltf = useGLTF("/images/car.glb");
    // eslint-disable-next-line react/no-unknown-property
    return <primitive object={gltf.scene} scale={1.5} />;
};

export default CarModel;