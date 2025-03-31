'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  PerspectiveCamera,
  useGLTF,
  MeshDistortMaterial,
  ContactShadows
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Link from 'next/link';

interface SceneProps {
  mouse: React.MutableRefObject<[number, number]>;
}

function Scene({ mouse }: SceneProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        mouse.current[1] / viewport.height,
        0.1
      );
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        mouse.current[0] / viewport.width,
        0.1
      );
    }
  });

  return (
    <>
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh ref={mesh} scale={[2, 2, 2]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#4338ca"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.5}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.5}
        scale={10}
        blur={2}
        far={4}
      />
    </>
  );
}

export default function ModernHero3D() {
  const mouse = useRef<[number, number]>([0, 0]);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = [
        (event.clientX - window.innerWidth / 2) * 0.1,
        (event.clientY - window.innerHeight / 2) * 0.1
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);
    setTextOpacity(1);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-full relative">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 5]}
          fov={45}
        />
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <Scene mouse={mouse} />
        <Environment preset="city" />
        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: textOpacity, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
                  Transformons vos idées
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                  en réalité digitale
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                Création et Refonte de sites web professionnels à La Rochelle
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-primary-600 transition-all hover:scale-105 shadow-lg text-center"
              >
                Démarrer un projet
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/30 text-center"
              >
                Voir mes réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
