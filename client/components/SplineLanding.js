//import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
//import { Canvas, useFrame } from "@react-three/fiber";

import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera } from "@react-three/drei";

export default function SplineLanding({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/gj9XL0OmiXk3c3GX/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#8accfd"]} />
      <group {...props} dispose={null}>
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
          castShadow
          receiveShadow
          position={[86.16, 174.68, -327.09]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[2.57, 11.28, 1]}
        />
        <mesh
          name="Background1"
          geometry={nodes.Background1.geometry}
          material={materials["Background1 Material"]}
          castShadow
          receiveShadow
          position={[0.75, 93.5, -929.5]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-677.99}
          shadow-camera-right={677.99}
          shadow-camera-top={677.99}
          shadow-camera-bottom={-677.99}
          position={[-138.33, 294.6, 300]}
          scale={[1, 1, 1.02]}
        />
        <group name="Bg-stuff" position={[-43.87, 293.79, -131.47]}>
          <mesh
            name="Helix 2"
            geometry={nodes["Helix 2"].geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[-472, -340.59, 84.14]}
            rotation={[2.99, -0.16, -1.97]}
          />
          <mesh
            name="Helix"
            geometry={nodes.Helix.geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[539.98, 52.83, -41.46]}
            rotation={[-3.13, 0.17, -2.15]}
          />
          <mesh
            name="Sphere 2"
            geometry={nodes["Sphere 2"].geometry}
            material={materials["Stuff-pink-light"]}
            castShadow
            receiveShadow
            position={[396.66, -317.98, 4.93]}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials["Stuff-pink-light"]}
            castShadow
            receiveShadow
            position={[269.41, 201.54, -22.51]}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes["Cylinder 2"].geometry}
            material={materials["Stuff-pink-light"]}
            castShadow
            receiveShadow
            position={[563.92, -25.84, -42.5]}
            rotation={[0, 0, -1.46]}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[420.19, -353.82, -26.82]}
            rotation={[0, 0, -1.81]}
          />
          <mesh
            name="Torus 2"
            geometry={nodes["Torus 2"].geometry}
            material={materials["Stuff-pink-light"]}
            castShadow
            receiveShadow
            position={[-583.92, -300, -62.62]}
          />
          <mesh
            name="Torus"
            geometry={nodes.Torus.geometry}
            material={materials["Stuff-pink-light"]}
            castShadow
            receiveShadow
            position={[-141.94, 193.75, 27.58]}
          />
          <mesh
            name="Star 2"
            geometry={nodes["Star 2"].geometry}
            material={materials["emoji-face"]}
            castShadow
            receiveShadow
            position={[104.24, 341.4, -32.45]}
            rotation={[0, 0, 0.02]}
          />
          <mesh
            name="Star"
            geometry={nodes.Star.geometry}
            material={materials["emoji-face"]}
            castShadow
            receiveShadow
            position={[-114.21, 124.53, 54.5]}
            rotation={[-0.22, 0.27, 0.7]}
          />
        </group>
        <group
          name="Emoji-4"
          position={[353, 106.77, -132.1]}
          rotation={[0.1, -0.17, -0.71]}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.red}
            castShadow
            receiveShadow
            position={[22.62, 26.39, 41.86]}
            rotation={[-0.29, 0.16, -0.35]}
          />
          <mesh
            name="Cube 2"
            geometry={nodes["Cube 2"].geometry}
            material={materials.red}
            castShadow
            receiveShadow
            position={[-23.94, 26.88, 41.68]}
            rotation={[-0.29, -0.16, 0.35]}
          />
          <mesh
            name="Cube 3"
            geometry={nodes["Cube 3"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-0.32, -20.91, 46.35]}
          />
          <mesh
            name="Sphere1"
            geometry={nodes.Sphere1.geometry}
            material={materials["emoji-face"]}
            castShadow
            receiveShadow
            position={[0, 0, -2.33]}
          />
        </group>
        <group
          name="Emoji-3"
          position={[-28.32, 450.33, -98.31]}
          rotation={[0, 0.07, 0.15]}
        >
          <mesh
            name="Sphere 21"
            geometry={nodes["Sphere 21"].geometry}
            material={materials["Sphere 21 Material"]}
            castShadow
            receiveShadow
            position={[28.87, -10.7, 37.24]}
            rotation={[0, 0.48, 0]}
          />
          <mesh
            name="Sphere2"
            geometry={nodes.Sphere2.geometry}
            material={materials["Sphere2 Material"]}
            castShadow
            receiveShadow
            position={[-29.83, -10.7, 37.14]}
            rotation={[0, -0.48, 0]}
          />
          <mesh
            name="Cube 31"
            geometry={nodes["Cube 31"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-29.48, 13.41, 33.94]}
            rotation={[-0.05, -0.34, 0.51]}
          />
          <mesh
            name="Cube 5"
            geometry={nodes["Cube 5"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-6.02, 2.06, 44.91]}
            rotation={[-0.02, -0.17, -0.07]}
            scale={[-1, 1, 1]}
          />
          <mesh
            name="Cube 4"
            geometry={nodes["Cube 4"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[5.95, 2.61, 44.91]}
            rotation={[0, 0.26, 0.02]}
          />
          <mesh
            name="Cube 21"
            geometry={nodes["Cube 21"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[8.63, 18.58, 40.6]}
            rotation={[0, 0.28, 0.02]}
          />
          <mesh
            name="Cube 32"
            geometry={nodes["Cube 32"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-0.42, -25.78, 44.21]}
          />
          <mesh
            name="Sphere3"
            geometry={nodes.Sphere3.geometry}
            material={materials["emoji-face"]}
            castShadow
            receiveShadow
            position={[0, 0, -2.33]}
          />
        </group>
        <group
          name="Emoji-2"
          position={[-401.83, 491.23, -90.89]}
          rotation={[0, 0, Math.PI / 9]}
        >
          <mesh
            name="Cube 33"
            geometry={nodes["Cube 33"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-32.03, 17.19, 27.82]}
            rotation={[0, -0.26, 0.87]}
          />
          <mesh
            name="Cube 22"
            geometry={nodes["Cube 22"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[8.37, 19.9, 39.22]}
            rotation={[0, 0.26, 0.02]}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-17.55, 4.47, 42.4]}
            rotation={[-0.09, 0, 0]}
          />
          <mesh
            name="Cube 41"
            geometry={nodes["Cube 41"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[15.62, 4.39, 46.32]}
            rotation={[0.15, 0.31, 3.14]}
          />
          <mesh
            name="Cube 34"
            geometry={nodes["Cube 34"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-0.42, -22.19, 44.21]}
          />
          <mesh
            name="Sphere4"
            geometry={nodes.Sphere4.geometry}
            material={materials["emoji-face"]}
            castShadow
            receiveShadow
            position={[0, 0, -2.33]}
          />
        </group>
        <group
          name="Emoji-1"
          position={[-333.66, 162.59, -50.41]}
          rotation={[-0.07, 0.1, 0.61]}
          scale={[2, 2, 1]}
        >
          <mesh
            name="Cube 42"
            geometry={nodes["Cube 42"].geometry}
            material={materials["Cube 42 Material"]}
            castShadow
            receiveShadow
            position={[-0.07, -18.99, 43.5]}
          />
          <mesh
            name="Cube 35"
            geometry={nodes["Cube 35"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[0.34, -22.99, 43.88]}
          />
          <mesh
            name="Cube 23"
            geometry={nodes["Cube 23"].geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[-9.05, 6.12, 45.07]}
            rotation={[0.12, -0.45, -0.18]}
            scale={[-1, 1, 1]}
          />
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={materials["emoji-eye"]}
            castShadow
            receiveShadow
            position={[7.72, 6.12, 45.07]}
            rotation={[-0.12, 0.42, 0.29]}
          />
          <mesh
            name="Sphere5"
            geometry={nodes.Sphere5.geometry}
            material={materials["emoji-face"]}
            castShadow
            receiveShadow
            position={[0, 0, -2.33]}
          />
        </group>
        <group
          name="Icon-text-2"
          position={[-565.69, 100.1, -69.28]}
          rotation={[-0.24, 0.13, 0.76]}
        >
          <mesh
            name="#"
            geometry={nodes["#"].geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[-25.74, -16.56, 7.22]}
            scale={1.27}
          />
          <mesh
            name="Rectangle 6"
            geometry={nodes["Rectangle 6"].geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[-0.06, 2.09, -18.97]}
            scale={4.05}
          />
        </group>
        <group
          name="Icon-love"
          position={[362.4, 246.11, -100.02]}
          rotation={[-0.19, -0.18, -0.8]}
        >
          <mesh
            name="icon-love"
            geometry={nodes["icon-love"].geometry}
            material={materials["ui-pink-dark"]}
            castShadow
            receiveShadow
            position={[0.63, 29.13, 7.11]}
          />
          <mesh
            name="Rectangle 61"
            geometry={nodes["Rectangle 61"].geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[-0.06, 2.09, -18.97]}
            scale={4.05}
          />
        </group>
        <group
          name="Icon-like"
          position={[-368.57, 126.84, -23.93]}
          rotation={[-0.09, 0.15, 0.58]}
        >
          <mesh
            name="Shape"
            geometry={nodes.Shape.geometry}
            material={materials["ui-pink-dark"]}
            castShadow
            receiveShadow
            position={[-17.47, -14.09, 5.85]}
            scale={0.93}
          />
          <mesh
            name="Ellipse"
            geometry={nodes.Ellipse.geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[0, 0, -11.26]}
          />
        </group>
        <group
          name="Icon-star"
          position={[266.57, 155.47, -15.11]}
          rotation={[-0.13, -0.23, -0.5]}
        >
          <mesh
            name="Star1"
            geometry={nodes.Star1.geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[-0.07, -0.6, 5.32]}
            scale={0.93}
          />
          <mesh
            name="Ellipse1"
            geometry={nodes.Ellipse1.geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[0, 0, -11.26]}
          />
        </group>
        <group
          name="Icon-play"
          position={[194.39, 396.82, -78.48]}
          rotation={[-0.01, -0.17, -0.03]}
        >
          <mesh
            name="Ellipse2"
            geometry={nodes.Ellipse2.geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[0, 0, -11.26]}
          />
          <mesh
            name="Triangle"
            geometry={nodes.Triangle.geometry}
            material={materials["ui-pink-dark"]}
            castShadow
            receiveShadow
            position={[4.9, -0.59, 2.26]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group
          name="Icon-text-1"
          position={[-89.62, 562.43, -128.14]}
          rotation={[0, 0, 0.24]}
        >
          <mesh
            name="Sphere 4"
            geometry={nodes["Sphere 4"].geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[47.2, 13.21, 5.23]}
            scale={[2.74, 2.72, 2.76]}
          />
          <mesh
            name="Sphere 3"
            geometry={nodes["Sphere 3"].geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[1.61, 13.15, 4.85]}
            scale={[2.74, 2.72, 2.76]}
          />
          <mesh
            name="Sphere 22"
            geometry={nodes["Sphere 22"].geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[-43.73, 13.09, 4.47]}
            scale={[2.74, 2.72, 2.76]}
          />
          <mesh
            name="Rectangle1"
            geometry={nodes.Rectangle1.geometry}
            material={materials["ui-purple"]}
            castShadow
            receiveShadow
            position={[-0.07, 5.88, -19.14]}
            scale={4.05}
          />
        </group>
        <group
          name="hand-r"
          position={[245.18, -238.36, 25.47]}
          rotation={[-0.26, -0.01, 0.07]}
        >
          <mesh
            name="hand"
            geometry={nodes.hand.geometry}
            material={materials.skin}
            castShadow
            receiveShadow
            position={[94.83, -164.05, 89.88]}
            rotation={[-Math.PI, 0, 2.59]}
            scale={3.38}
          />
          <mesh
            name="Nail-2"
            geometry={nodes["Nail-2"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[-174.91, 154.39, 103.47]}
            rotation={[-0.51, -0.07, 0.27]}
          />
          <mesh
            name="Nail-5"
            geometry={nodes["Nail-5"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[124.12, 41.44, 3.65]}
            rotation={[-1.79, -0.46, 0.07]}
          />
          <mesh
            name="Nail-4"
            geometry={nodes["Nail-4"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[33.56, 62.43, -7.41]}
            rotation={[-1.86, -0.35, -0.07]}
          />
          <mesh
            name="Nail-3"
            geometry={nodes["Nail-3"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[-61.31, 80.12, -7.96]}
            rotation={[-1.7, -0.34, -0.03]}
          />
          <mesh
            name="Nail-1"
            geometry={nodes["Nail-1"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[-90.66, -74.32, 21.73]}
            rotation={[-1.05, -0.77, -1.17]}
          />
        </group>
        <group
          name="hand-l"
          position={[76.01, 84.54, -121.82]}
          rotation={[0, 0, -0.04]}
        >
          <mesh
            name="hand1"
            geometry={nodes.hand1.geometry}
            material={materials.skin}
            castShadow
            receiveShadow
            position={[-249.13, -279.88, -11.64]}
            rotation={[0, 0, -0.55]}
            scale={[-3.38, 3.38, 3.38]}
          />
          <mesh
            name="Nail-51"
            geometry={nodes["Nail-51"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[88.44, -162.88, 28.06]}
            rotation={[-2.24, 0.7, -2.76]}
          />
          <mesh
            name="Nail-41"
            geometry={nodes["Nail-41"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[79.25, -15.27, 24.31]}
            rotation={[-2.25, 0.88, -2.76]}
          />
          <mesh
            name="Nail-31"
            geometry={nodes["Nail-31"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[45.93, 104.37, -8.77]}
            rotation={[-2.49, 0.44, -2.49]}
          />
          <mesh
            name="Nail-21"
            geometry={nodes["Nail-21"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[-79.44, 139.09, -28.77]}
            rotation={[-2.64, 0.23, -2.44]}
          />
          <mesh
            name="Nail-11"
            geometry={nodes["Nail-11"].geometry}
            material={materials.Nail}
            castShadow
            receiveShadow
            position={[-297.11, -28.99, 135.95]}
            rotation={[-1.14, -0.39, -1.3]}
            scale={0.99}
          />
        </group>
        <group name="Bubble-LOGO" position={[-33.42, 15.61, -10.49]}>
          <mesh
            name="Cube 8"
            geometry={nodes["Cube 8"].geometry}
            material={materials["Cube 8 Material"]}
            castShadow
            receiveShadow
            position={[157.64, 218.57, 108.95]}
            rotation={[0.26, -0.1, -0.35]}
          />
          <mesh
            name="Cube 6"
            geometry={nodes["Cube 6"].geometry}
            material={materials["Cube 6 Material"]}
            castShadow
            receiveShadow
            position={[-107.12, 177.56, -45.84]}
            rotation={[0, 0, 0.18]}
          />
          <mesh
            name="Cube 51"
            geometry={nodes["Cube 51"].geometry}
            material={materials["Cube 51 Material"]}
            castShadow
            receiveShadow
            position={[94.99, -71.97, -38.74]}
            rotation={[0, 0, -0.23]}
          />
          <mesh
            name="Cube 43"
            geometry={nodes["Cube 43"].geometry}
            material={materials["Cube 43 Material"]}
            castShadow
            receiveShadow
            position={[56.5, 130.07, -32.51]}
          />
          <mesh
            name="Cube 36"
            geometry={nodes["Cube 36"].geometry}
            material={materials["Cube 36 Material"]}
            castShadow
            receiveShadow
            position={[-98.5, -160.94, -20.39]}
          />
          <mesh
            name="Cube 17"
            geometry={nodes["Cube 17"].geometry}
            material={materials["Cube 17 Material"]}
            castShadow
            receiveShadow
            position={[154.42, 91.34, 77.07]}
            rotation={[0.15, -0.19, -0.9]}
          />
          <mesh
            name="Cube 24"
            geometry={nodes["Cube 24"].geometry}
            material={materials["Cube 24 Material"]}
            castShadow
            receiveShadow
            position={[9.9, 127.58, 49.23]}
            rotation={[0, 0, 0.37]}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={materials["Cube3 Material"]}
            castShadow
            receiveShadow
            position={[15.07, 18.2, 21.3]}
          />
        </group>
        <group name="Bubble-BG" position={[-41.24, 205.45, -309.36]}>
          <mesh
            name="Cube 10"
            geometry={nodes["Cube 10"].geometry}
            material={materials["Bubble-BG"]}
            castShadow
            receiveShadow
            position={[284.57, 206.97, 25.05]}
            rotation={[0, 0.09, 0]}
          />
          <mesh
            name="Cube 9"
            geometry={nodes["Cube 9"].geometry}
            material={materials["Bubble-BG"]}
            castShadow
            receiveShadow
            position={[-32.65, 188.59, 225.58]}
          />
          <mesh
            name="Cube 7"
            geometry={nodes["Cube 7"].geometry}
            material={materials["Bubble-BG"]}
            castShadow
            receiveShadow
            position={[-179.62, 12.16, 246.99]}
          />
          <mesh
            name="Cube 11"
            geometry={nodes["Cube 11"].geometry}
            material={materials["Cube 11 Material"]}
            castShadow
            receiveShadow
            position={[263.13, -4.45, 248.6]}
          />
          <mesh
            name="Cube 15"
            geometry={nodes["Cube 15"].geometry}
            material={materials["pink-stuff"]}
            castShadow
            receiveShadow
            position={[364.27, 320.29, 91.96]}
            rotation={[-0.22, 0.3, 0.16]}
          />
          <mesh
            name="Cube 12"
            geometry={nodes["Cube 12"].geometry}
            material={materials["pink-stuff"]}
            castShadow
            receiveShadow
            position={[510.29, -79.69, 92.38]}
            rotation={[0, 0, -0.77]}
          />
          <mesh
            name="Cube 16"
            geometry={nodes["Cube 16"].geometry}
            material={materials["pink-stuff"]}
            castShadow
            receiveShadow
            position={[-550.04, 35.89, 56.74]}
            rotation={[0, 0, 0.15]}
          />
          <mesh
            name="Cube 18"
            geometry={nodes["Cube 18"].geometry}
            material={materials["pink-stuff"]}
            castShadow
            receiveShadow
            position={[638.41, -229.43, 157.32]}
            rotation={[0.07, -0.09, 2.1]}
          />
          <mesh
            name="Cube 19"
            geometry={nodes["Cube 19"].geometry}
            material={materials["pink-stuff"]}
            castShadow
            receiveShadow
            position={[-149.21, 490.64, 43.09]}
            rotation={[0, 0, 0.6]}
          />
          <mesh
            name="Cube 13"
            geometry={nodes["Cube 13"].geometry}
            material={materials["pink-stuff"]}
            castShadow
            receiveShadow
            position={[-357.31, 278.94, 70.24]}
            rotation={[0, 0, 1.24]}
          />
        </group>
        <group
          name="Ins"
          position={[-32.41, 24.16, -9.56]}
          scale={[1.1, 1.14, 1.1]}
        >
          <mesh
            name="Boolean"
            geometry={nodes.Boolean.geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[0.04, -0.42, 9.55]}
            scale={0.97}
          >
            <mesh
              name="Rectangle 17"
              geometry={nodes["Rectangle 17"].geometry}
              material={materials["Rectangle 17 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[0.51, 0.52, -7.09]}
              scale={1.03}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials["Rectangle 2 Material"]}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, -5.15]}
              scale={1.03}
            />
          </mesh>
          <mesh
            name="Ellipse3"
            geometry={nodes.Ellipse3.geometry}
            material={materials["Ellipse3 Material"]}
            receiveShadow
            position={[39.91, 39.38, 5.21]}
          />
          <mesh
            name="Cylinder1"
            geometry={nodes.Cylinder1.geometry}
            material={materials["ui-white"]}
            receiveShadow
            position={[0.63, 0.25, 10.12]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Rectangle 16"
            geometry={nodes["Rectangle 16"].geometry}
            material={materials["Rectangle 16 Material"]}
            castShadow
            receiveShadow
            position={[0, 0, -25.66]}
          />
        </group>
        <group name="phone" position={[-32.4, -74.02, -68.32]}>
          <mesh
            name="Rectangle 4"
            geometry={nodes["Rectangle 4"].geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[61.26, 401.05, 13.24]}
          />
          <mesh
            name="Rectangle 3"
            geometry={nodes["Rectangle 3"].geometry}
            material={materials["ui-white"]}
            castShadow
            receiveShadow
            position={[-12.33, 401.05, 13.24]}
          />
          <mesh
            name="screen"
            geometry={nodes.screen.geometry}
            material={materials["phone-screen"]}
            castShadow
            receiveShadow
            position={[0, 0, 9.89]}
          />
          <mesh
            name="Boolean 2"
            geometry={nodes["Boolean 2"].geometry}
            material={materials["Boolean 2 Material"]}
            castShadow
            receiveShadow
            position={[0, 0, -1.2]}
          >
            <mesh
              name="Rectangle 62"
              geometry={nodes["Rectangle 62"].geometry}
              material={materials["pink-stuff"]}
              visible={false}
              castShadow
              receiveShadow
              position={[0.09, 398.52, 3.03]}
            />
            <mesh
              name="Boolean1"
              geometry={nodes.Boolean1.geometry}
              material={materials["pink-stuff"]}
              visible={false}
              castShadow
              receiveShadow
              position={[0, 0, -0.03]}
            >
              <mesh
                name="Rectangle 31"
                geometry={nodes["Rectangle 31"].geometry}
                material={materials["Rectangle 31 Material"]}
                visible={false}
                castShadow
                receiveShadow
                position={[0, 0, 7.44]}
              />
              <mesh
                name="Rectangle2"
                geometry={nodes.Rectangle2.geometry}
                material={materials["pink-stuff"]}
                visible={false}
                castShadow
                receiveShadow
                position={[0, 0, -15]}
              />
            </mesh>
          </mesh>
        </group>
        <PerspectiveCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[0, 0, 3090.87]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
          position={[0, 1, 0]}
        />
      </group>
    </>
  );
}

{
  /* <div style={{backgroundColor: "slateGrey", fontSize: '86px'}}></div> */
}
