import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import "./style.css";

import Car from "./Car";
import { Ground } from "./Ground";
import { Rings } from "./Rings";

// LoaderScreen komponenti
function LoaderScreen() {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#0d0d0d",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      zIndex: 9999,
      transition: "opacity 0.8s ease",
    }}>
      <span>Loading....</span>
    </div>
  );
}

// Sahna komponenti
function CarShow() {
  return (
    <>
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        minDistance={2.8}
        maxDistance={8}
        enablePan={false}
      />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={["#0d0d0d"]} attach="background" />
      <CubeCamera resolution={512} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} resolution={512} />
            <Car />
          </>
        )}
      </CubeCamera>

      <hemisphereLight intensity={0.7} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={10}
        position={[0, 7, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <Rings />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.07}
          width={100}
          height={100}
          kernelSize={4}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
    </>
  );
}

// Asosiy App komponenti
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Sahna yuklangach loaderni yo'q qilish
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1 sekunddan so'ng yuklandi deb hisoblaymiz

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!isLoaded && <LoaderScreen />}
      <Suspense fallback={null}>
        <Canvas
          shadows
          gl={(renderer) => {
            renderer.useLegacyLights = false;
            return renderer;
          }}
        >
          <CarShow />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
