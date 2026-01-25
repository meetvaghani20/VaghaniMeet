import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#7928ca"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </Sphere>
  );
};

const ThreeBackground = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      opacity: 0.6,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00d4ff" />
        <group position={[1.5, 0, 0]}> {/* Position it to the right side generally */}
             <AnimatedSphere />
        </group>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
