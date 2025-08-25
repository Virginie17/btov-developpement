'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  PerspectiveCamera,
  MeshDistortMaterial,
  ContactShadows,
  Sparkles
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

interface SceneProps {
  mouse: { x: number; y: number };
  isMobile: boolean;
  scrollY: number;
}

function Scene({ mouse, isMobile, scrollY }: SceneProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Ajustement de la taille en fonction de la largeur de l'écran
  const scale = isMobile ? 1.2 : 2.2;
  
  useFrame((state) => {
    if (mesh.current) {
      // Animation de rotation fluide basée sur la position de la souris
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        (mouse.y / viewport.height) * 0.5,
        0.1
      );
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        (mouse.x / viewport.width) * 0.5 + state.clock.getElapsedTime() * 0.1,
        0.1
      );

      // Animation de déformation basée sur le scroll
      const scrollFactor = scrollY / 1000;
      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y,
        -scrollFactor * 2,
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
        position={[0, isMobile ? 0 : 0.5, 0]}
      >
        <mesh ref={mesh} scale={scale}>
          <sphereGeometry args={[1, 128, 128]} />
          <MeshDistortMaterial
            color="#4338ca"
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.75}
            distort={isMobile ? 0.3 : 0.4}
            speed={3}
            roughness={0.2}
          />
        </mesh>

        <Sparkles
          count={50}
          scale={4}
          size={2}
          speed={0.4}
          opacity={0.5}
          color="#8b5cf6"
        />
      </Float>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.7}
        scale={isMobile ? 6 : 10}
        blur={2.5}
        far={4}
        color="#4338ca"
      />

      <PerspectiveCamera
        makeDefault
        position={[0, 0, isMobile ? 4 : 5]}
        fov={45}
      />
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        color="#4338ca"
      />
      <Environment preset="city" />
    </>
  );
}

export default function ModernHero3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const [textOpacity, setTextOpacity] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (event: MouseEvent) => {
      const sensitivity = window.innerWidth < 768 ? 0.05 : 0.1;
      mouse.current.x = (event.clientX - window.innerWidth / 2) * sensitivity;
      mouse.current.y = (event.clientY - window.innerHeight / 2) * sensitivity;
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    setTextOpacity(1);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas>
          <Scene mouse={mouse.current} isMobile={isMobile} scrollY={scrollY} />
        </Canvas>
      </div>

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
              {/* Badge de confiance */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2"
              >
                <span className="flex items-center gap-2 text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Disponible pour nouveaux projets
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">
                  Transformons vos idées
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600">
                  en réalité digitale
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                Création et Refonte de sites web professionnels à La Rochelle
              </p>
              
              {/* Badges de confiance avec animation */}
              <div className="flex justify-center gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:border-primary-500/50 transition-all"
                >
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-sm text-gray-400">Projets livrés</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:border-primary-500/50 transition-all"
                >
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-gray-400">Satisfaction</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all hover:scale-105 shadow-lg hover:shadow-primary-500/20 text-center flex items-center justify-center gap-2"
                >
                  <span>Démarrer un projet</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all border border-white/30 hover:border-primary-500/50 text-center"
                >
                  Voir mes réalisations
                </Link>
              </div>

              {/* Micro-conversion avec animation */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-gray-400 text-sm"
              >
                ou{' '}
                <Link 
                  href="/audit-gratuit"
                  className="text-primary-400 hover:text-primary-300 underline underline-offset-4 transition-colors"
                >
                  obtenir un audit gratuit de votre site
                </Link>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
