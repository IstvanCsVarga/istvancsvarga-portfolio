import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const SimpleBall = (props) => {
  return (
    <mesh castShadow receiveShadow scale={1.75}>
      <icosahedronGeometry args={[1, 0]} /> 
      <meshStandardMaterial color="#fff8eb" />
    </mesh>
  );
};


const Ball = (props, isMobile) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          flatShading
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set an event listener to check if the user is on mobile or not
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial state of the isMobile variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle
    // the change of the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);

      // Add the callback function as a listener to the query
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Remove the callback function from the query
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    };
  }, []);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {/* <Ball imgUrl={icon} isMobile={isMobile} /> */}
        {isMobile ? <SimpleBall /> : <Ball imgUrl={icon} />}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
