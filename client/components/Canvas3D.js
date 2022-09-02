import { Canvas } from "react-three-fiber";
import Box from "./Box";
import React from "react";

const Canvas3D = () => {
  return (
    <Canvas style={{ overflow: "visible" }}>
      <Box />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    </Canvas>
  );
};

export default Canvas3D;
