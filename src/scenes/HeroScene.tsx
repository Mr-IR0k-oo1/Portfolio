import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Stars as DreiStars } from '@react-three/drei';
import * as THREE from 'three';

const HeroScene: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ff5722" />
            
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <mesh position={[-2, 1, -2]}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <MeshTransmissionMaterial 
                  backside 
                  samples={4} 
                  thickness={1} 
                  chromaticAberration={0.02} 
                  anisotropy={0.1} 
                  distortion={0.1} 
                  distortionScale={0.1} 
                  temporalDistortion={0.1} 
                  color="#ff6b35"
                />
              </mesh>
            </Float>

            <Float speed={3} rotationIntensity={2} floatIntensity={1}>
              <mesh position={[3, -1, -2]}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshTransmissionMaterial 
                  backside 
                  samples={4} 
                  thickness={2} 
                  chromaticAberration={0.05} 
                  anisotropy={0.1} 
                  distortion={0.5} 
                  distortionScale={0.1} 
                  temporalDistortion={0.1} 
                  color="#4a9eff"
                />
              </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <mesh position={[-0.5, -2, -4]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
                <torusGeometry args={[3, 0.05, 16, 100]} />
                <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={2} />
              </mesh>
            </Float>
            
            <DreiStars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Rig />
        </>
    );
};

function Rig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.pointer.x * 2), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.pointer.y * 2), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default HeroScene;
