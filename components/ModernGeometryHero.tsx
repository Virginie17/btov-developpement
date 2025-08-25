'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  Text, 
  PerspectiveCamera,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  Sparkles,
  Cloud
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

// Types pour les props des composants
interface SceneProps {
  mouse: { x: number; y: number };
  isMobile: boolean;
  scrollY: number;
}

// Composant pour les formes géométriques
function GeometryGroup({ mouse, isMobile, scrollY }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const dodecahedronRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  
  // Animation des formes
  useFrame((state) => {
    if (group.current) {
      // Rotation globale du groupe
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouse.x * 0.2 + state.clock.getElapsedTime() * 0.1,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouse.y * 0.2,
        0.05
      );
      
      // Effet de scroll
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        -scrollY / 500,
        0.1
      );

      // Ajustement de la position pour mobile
      if (isMobile) {
        group.current.position.z = THREE.MathUtils.lerp(
          group.current.position.z,
          -1,
          0.1
        );
      }
    }
    
    // Animations individuelles des formes
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x += 0.003;
      dodecahedronRef.current.rotation.z += 0.002;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.002;
      torusRef.current.rotation.y += 0.004;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y += 0.005;
      octahedronRef.current.rotation.z += 0.002;
    }
  });
  
  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Dodécaèdre principal - forme complexe et moderne */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={dodecahedronRef} position={[0, 0, 0]} scale={isMobile ? 0.8 : 1.5}>
          <dodecahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.5}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.8}
            ior={1.5}
            chromaticAberration={0.06}
            distortion={0.3}
            distortionScale={0.4}
            temporalDistortion={0.2}
            color="#4338ca"
          />
        </mesh>
      </Float>
      
      {/* Tore - représente la connectivité et le cycle de développement */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={torusRef} position={[isMobile ? 1.2 : 2, -0.5, 1]} scale={isMobile ? 0.4 : 0.7}>
          <torusGeometry args={[0.8, 0.2, 16, 32]} />
          <MeshWobbleMaterial
            color="#8b5cf6"
            factor={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      {/* Octaèdre - représente la précision et la structure */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh ref={octahedronRef} position={[isMobile ? -1 : -1.5, 0.5, -1]} scale={isMobile ? 0.5 : 0.8}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#3b82f6"
            speed={2}
            distort={0.3}
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      {/* Particules pour un effet de dynamisme */}
      <Sparkles
        count={isMobile ? 30 : 100}
        scale={isMobile ? 6 : 10}
        size={1}
        speed={0.3}
        opacity={0.5}
        color="#ffffff"
      />
      
      {/* Nuage pour ajouter de la profondeur et du mystère */}
      <Cloud
        opacity={0.2}
        speed={0.1}
        segments={20}
        position={[0, -1, -5]}
        scale={3}
      />
    </group>
  );
}

// Composant pour le contenu textuel et les boutons
function HeroContent({ textOpacity }: { textOpacity: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: textOpacity, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative z-10 text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: textOpacity }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex items-center justify-center space-x-6 mb-8"
      >
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
          <span className="text-gray-300 text-sm">Disponible pour nouveaux projets</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-1 h-1 rounded-full bg-gray-500 mr-2"></div>
          <span className="text-gray-400 text-sm">Basé à La Rochelle</span>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: textOpacity, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Transformons vos idées
          </span> <br className="md:block" />
          en réalités digitales
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: textOpacity, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Des sites web et applications sur mesure qui transforment votre vision en réalité numérique.
          Expertise en React, Next.js et technologies modernes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: textOpacity, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discuter de votre projet
            </motion.button>
          </Link>
          
          <Link href="/portfolio" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium text-white hover:bg-white/20 transition-all duration-300"
            >
              Voir mes réalisations
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ModernGeometryHero() {
  const mouse = useRef({ x: 0, y: 0 });
  const [textOpacity, setTextOpacity] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier si l'utilisateur préfère réduire les animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(prefersReducedMotion.matches);
    
    // Observer les changements de préférence
    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    
    try {
      prefersReducedMotion.addEventListener('change', handleReducedMotionChange);
    } catch (e) {
      // Fallback pour les navigateurs qui ne supportent pas addEventListener
      prefersReducedMotion.addListener(handleReducedMotionChange as any);
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (event: MouseEvent) => {
      // Réduire la sensibilité sur mobile pour éviter des mouvements trop brusques
      const sensitivity = window.innerWidth < 768 ? 0.03 : 0.1;
      // Ne pas animer si l'utilisateur préfère réduire les animations
      if (!reducedMotion) {
        mouse.current.x = (event.clientX - window.innerWidth / 2) * sensitivity;
        mouse.current.y = (event.clientY - window.innerHeight / 2) * sensitivity;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0 && !reducedMotion) {
        // Sensibilité réduite pour le tactile
        const sensitivity = 0.02;
        mouse.current.x = (event.touches[0].clientX - window.innerWidth / 2) * sensitivity;
        mouse.current.y = (event.touches[0].clientY - window.innerHeight / 2) * sensitivity;
      }
    };

    const handleScroll = () => {
      if (!reducedMotion) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll);
    
    // Délai pour l'animation d'entrée du texte
    setTimeout(() => {
      setTextOpacity(1);
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      
      try {
        prefersReducedMotion.removeEventListener('change', handleReducedMotionChange);
      } catch (e) {
        // Fallback pour les navigateurs qui ne supportent pas removeEventListener
        prefersReducedMotion.removeListener(handleReducedMotionChange as any);
      }
    };
  }, [reducedMotion]);

  // Ne rien rendre côté serveur
  if (!isMounted) {
    return <div className="h-screen w-full bg-black"></div>;
  }

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      {/* Canvas container - Uniquement pour Three.js */}
      <div className="absolute inset-0">
        <Canvas
          dpr={[1, 2]}
          style={{ pointerEvents: 'none' }}
          gl={{ antialias: true, alpha: false }}
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          <color attach="background" args={['#000']} />
          <fog attach="fog" args={['#000', 5, 15]} />
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#4338ca" />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[5, -5, 5]} intensity={0.5} color="#3b82f6" />
          
          <GeometryGroup 
            mouse={mouse.current} 
            isMobile={isMobile} 
            scrollY={scrollY} 
          />
        </Canvas>
      </div>

      {/* Overlay pour le contenu DOM - Complètement séparé du Canvas */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <HeroContent textOpacity={textOpacity} />
        </div>
      </div>
    </div>
  );
}
