'use client'

import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'

interface SpaceModelProps {
  className?: string
}

function SpaceScene() {
  const modelRef = useRef<THREE.Group>(null)
  const gltf = useLoader(GLTFLoader, '/model/need_some_space1.glb')

  // Auto-rotate the model
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.008
    }
  })

  useEffect(() => {
    if (gltf.scene && modelRef.current) {
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      // Scale model to fit nicely
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim
      gltf.scene.scale.setScalar(scale)
      
      // Center the model
      gltf.scene.position.sub(center.multiplyScalar(scale))
    }
  }, [gltf])

  return (
    <group ref={modelRef}>
      <primitive object={gltf.scene} />
    </group>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4a90e2" wireframe />
    </mesh>
  )
}

export function SpaceModel({ className }: SpaceModelProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ 
          position: [-5, 6, 5], 
          fov: 10,
          near: 0.1,
          far: 100 
        }}
     
      >
        {/* Lighting */}
        {/* <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff" 
        /> */}
        {/* <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5} 
          color="#4a90e2" 
        /> */}
        
        {/* Model */}
        <Suspense fallback={<LoadingFallback />}>
          <SpaceScene />
        </Suspense>
        
        {/* Controls - disabled for background effect */}
        {/* <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        /> */}
      </Canvas>
    </div>
  )
}
