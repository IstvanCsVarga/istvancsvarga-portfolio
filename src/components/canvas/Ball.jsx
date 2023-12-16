import React, { Suspense } from "react";
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

// const Ball = (props, isMobile) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           map={decal}
//           position={[0, 0, 1]}
//           flatShading
//           rotation={[2 * Math.PI, 0, 6.25]}
//         />
//       </mesh>
//     </Float>
//   );
// };

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  const geometryArgs = isMobile ? [1, 0] : [1, 1]; // Less detail for mobile
  const floatIntensity = isMobile ? 1 : 2; // Less intense floating effect for mobile

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={floatIntensity}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={geometryArgs} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {!isMobile && ( // Only render Decal if not on mobile
          <Decal
            map={decal}
            position={[0, 0, 1]}
            flatShading
            rotation={[2 * Math.PI, 0, 6.25]}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {


  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
