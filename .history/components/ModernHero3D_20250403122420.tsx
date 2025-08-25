'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Scene({ mouse }: { mouse: React.MutableRefObject<THREE.Vector2> }) {
  const mesh = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const animate = () => {
      if (!mesh.current) return;

      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        mouse.current.y / 2,
        0.1
      );
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        mouse.current.x / 2,
        0.1
      );

      requestAnimationFrame(animate);
    };

    animate();
  }, [mouse]);

  return (
    <mesh ref={mesh} scale={2.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#4338ca"
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.75}
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function ModernHero3D() {
  const [mounted, setMounted] = useState(false);
  const mouse = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mouse.current.x = x * 0.1;
      mouse.current.y = y * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 50 }}
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <Float
            speed={1.4}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            position={[0, 0, 0]}
          >
            <Scene mouse={mouse} />
          </Float>
          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
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
