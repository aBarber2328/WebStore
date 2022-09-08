import { Canvas } from "react-three-fiber";
import Box from "./Box";
import React from "react";
import Model from "./Model";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";

const Canvas3D = () => {
  return (
    // <Canvas>
    //   <Box />
    //   <OrbitControls />
    //   <ambientLight intensity={0.5} />
    //   <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    //   <pointLight position={[-10, -10, -10]} />
    // </Canvas>
    <Canvas>
      <ambientLight />
      <directionalLight color="red" position={[0, 0, 5]} />
      <OrbitControls autoRotate />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
