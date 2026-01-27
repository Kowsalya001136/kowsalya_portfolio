import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

const AnimatedSphere = ({ position, color, speed = 1, distort = 0.4, scale = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) => {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-5">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[10, 10, 5]} intensity={0.5} color="#00e5ff" />
          
          <AnimatedSphere position={[-2.5, 1, 0]} color="#00e5ff" speed={1.5} distort={0.5} scale={0.8} />
          <AnimatedSphere position={[2.5, -1, -1]} color="#8b5cf6" speed={1} distort={0.3} scale={0.6} />
          <AnimatedSphere position={[0, 2, -2]} color="#06b6d4" speed={2} distort={0.4} scale={0.4} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
