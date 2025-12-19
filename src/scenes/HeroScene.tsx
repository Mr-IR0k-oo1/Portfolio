import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const HeroScene: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="orange" />
            
            <group>
                 {/* Recreating some geometric shapes from the original design */}
                <Box position={[-2, 1, -2]} args={[1, 1, 1]}>
                    <meshStandardMaterial color={'#ff6b35'} wireframe />
                </Box>
                <Sphere position={[2, -1, -3]} args={[0.5, 32, 32]}>
                    <meshStandardMaterial color={'#4a9eff'} transparent opacity={0.6} />
                </Sphere>
                <Torus position={[0, 0, -5]} args={[3, 0.2, 16, 100]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                     <meshStandardMaterial color={'#9d4edd'} wireframe />
                </Torus>
            </group>
            
            <Stars />
        </>
    );
};

function Stars() {
  const group = useRef<THREE.Group>(null);
  const stars = new Array(100).fill(0).map(() => ({
    pos: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 10 - 15],
    speed: Math.random() * 0.02
  }));

  useFrame(() => {
    if (group.current) {
        group.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={group}>
      {stars.map((star, i) => (
        <mesh key={i} position={star.pos as [number, number, number]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
}

export default HeroScene;
