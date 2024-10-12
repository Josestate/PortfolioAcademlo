import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function My3DModel({tooglerLigth}) {
  const gltf = useGLTF(tooglerLigth ? '/mylogoblue.glb': '/mylogoWhite.glb');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      const { x, y } = state.mouse;
      modelRef.current.rotation.y = x * Math.PI * 0.2; // Rotación en el eje Y basada en la posición del mouse
      modelRef.current.rotation.x = y * Math.PI * 0.2; // Rotación limitada en el eje X
    }
  }); 

  return <primitive ref={modelRef} object={gltf.scene} scale={0.4} />;
}

function Logothree({tooglerLigth}) {
  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={2}/>
      {/* <OrbitControls minDistance={5} maxDistance={10} /> */}
      <My3DModel tooglerLigth={tooglerLigth} />
    </Canvas>
  );
}

export default Logothree;