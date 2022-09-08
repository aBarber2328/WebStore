import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/winking_face/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default Model;
