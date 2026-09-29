"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function PlateMesh() {
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2}>
        <cylinderGeometry args={[1.7, 1.9, 0.22, 64]} />
        <meshStandardMaterial color="#F3F4F6" metalness={0.3} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.22, 0]} rotation-x={-Math.PI / 2}>
        <cylinderGeometry args={[1.2, 1.35, 0.28, 64]} />
        <meshStandardMaterial color="#ff9f43" emissive="#ff9f43" emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[0, 0.42, 0]}>
        <sphereGeometry args={[0.75, 48, 48]} />
        <meshStandardMaterial color="#7ef9a6" emissive="#7ef9a6" emissiveIntensity={0.25} />
      </mesh>
    </group>
  );
}

export function FloatingPlate() {
  return (
    <div className="h-[360px] w-full max-w-[420px]">
      <Canvas camera={{ position: [0, 0.8, 5], fov: 42 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 4, 3]} intensity={1.8} />
        <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1}>
          <PlateMesh />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.6} />
      </Canvas>
    </div>
  );
}
