import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// A simple rotating wireframe sphere
function Sphere() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#888" wireframe />
    </mesh>
  );
}

// Main component rendering the Canvas and sphere
export default function RotatingSphere() {
  return (
    <Canvas className="w-full h-[70vh] md:h-[80vh]" camera={{ position: [0, 0, 5] }} style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <Sphere />
    </Canvas>
  );
}