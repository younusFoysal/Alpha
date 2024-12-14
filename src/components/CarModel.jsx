import React, {useEffect} from "react";
import {useGLTF} from "@react-three/drei";
import {CgSpinner} from "react-icons/cg";


const CarModel = () => {
    const { scene, isLoading, gltf } = useGLTF("/images/car.glb");


    useEffect(() => {
        return () => {
            if (gltf) {
                gltf.scene.traverse((child) => {
                    if (child.material) {
                        child.material.dispose();
                    }
                    if (child.geometry) {
                        child.geometry.dispose();
                    }
                });
            }
        };
    }, [gltf]);

    if (isLoading) {
        return <CgSpinner className="animate-spin z-50" />;
    }

    // eslint-disable-next-line react/no-unknown-property
    return <primitive object={scene} scale={1.5} />;
};

export default CarModel;