import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import RobotHeroScene from './RobotHeroScene'

function CoreMesh() {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.35
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.25
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.18
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.3}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial color="#7c8cff" emissive="#7c8cff" emissiveIntensity={0.3} transparent opacity={0.7} wireframe />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.04, 16, 200]} />
        <meshStandardMaterial color="#8ad9ff" emissive="#8ad9ff" emissiveIntensity={0.5} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 200]} />
        <meshStandardMaterial color="#b59cff" emissive="#b59cff" emissiveIntensity={0.4} />
      </mesh>

      {[...Array(18)].map((_, i) => {
        const angle = (i / 18) * Math.PI * 2
        const radius = 2.5 + (i % 3) * 0.5
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 0.9, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.08, 18, 18]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#6ec7ff' : '#8a6bff'} emissive={i % 2 === 0 ? '#6ec7ff' : '#8a6bff'} emissiveIntensity={0.45} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function FloatingScene() {
  return (
    <div className="robot-canvas">
      <RobotHeroScene />
    </div>
  )
}
