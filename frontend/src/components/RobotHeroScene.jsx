import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Float, RoundedBox } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function RobotEye({ position, blinkOffset }) {
  const eye = useRef()

  useFrame(({ clock }) => {
    if (!eye.current) return
    const cycle = (clock.elapsedTime + blinkOffset) % 4.2
    const blink = cycle > 3.96 ? Math.sin(((cycle - 3.96) / 0.24) * Math.PI) : 0
    eye.current.scale.y = Math.max(0.08, 1 - blink * 0.94)
  })

  return (
    <mesh ref={eye} position={position} scale={[1, 1, 0.42]}>
      <sphereGeometry args={[0.052, 24, 24]} />
      <meshBasicMaterial color="#00ffc6" toneMapped={false} />
    </mesh>
  )
}

function RobotEar({ position }) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[0.115, 0.115, 0.09, 40]} />
        <meshStandardMaterial color="#d5d6d3" metalness={0.62} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <torusGeometry args={[0.082, 0.012, 12, 40]} />
        <meshStandardMaterial color="#fff" metalness={0.75} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.055, 0]}>
        <cylinderGeometry args={[0.061, 0.061, 0.018, 32]} />
        <meshStandardMaterial color="#00dba9" emissive="#00ffc6" emissiveIntensity={0.45} />
      </mesh>
    </group>
  )
}

function RobotPrototype() {
  const body = useRef()
  const head = useRef()
  const { viewport } = useThree()
  const scale = Math.min(1, Math.max(0.74, viewport.width / 4.4))
  const restingX = 0

  useFrame((state, delta) => {
    if (!body.current || !head.current) return
    const pointerX = state.pointer.x
    const pointerY = state.pointer.y
    body.current.position.x = THREE.MathUtils.damp(body.current.position.x, restingX + pointerX * Math.min(viewport.width * 0.035, 0.16), 2, delta)
    body.current.rotation.y = THREE.MathUtils.damp(body.current.rotation.y, -pointerX * 0.2, 3, delta)
    body.current.rotation.x = THREE.MathUtils.damp(body.current.rotation.x, pointerY * 0.1, 3, delta)
    head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, pointerX * 0.35, 4, delta)
    head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, -pointerY * 0.18, 4, delta)
    body.current.position.y = -0.12 + Math.sin(state.clock.elapsedTime * 1.1) * 0.035
  })

  return (
    <group ref={body} position={[restingX, -0.12, 0]} scale={scale}>
      <mesh position={[0, -0.43, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.34, 0.42, 8, 40]} />
        <meshStandardMaterial color="#d6d8d5" roughness={0.48} metalness={0.16} />
      </mesh>
      <mesh position={[0, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.24, 0.025, 16, 64]} />
        <meshStandardMaterial color="#f2f3ef" metalness={0.72} roughness={0.24} />
      </mesh>
      <mesh position={[0, -0.4, 0.294]}>
        <RoundedBox args={[0.3, 0.22, 0.075]} radius={0.055} smoothness={4}>
          <meshPhysicalMaterial color="#26312f" roughness={0.22} metalness={0.5} clearcoat={0.8} />
        </RoundedBox>
      </mesh>
      <mesh position={[0, -0.4, 0.338]}>
        <RoundedBox args={[0.13, 0.026, 0.012]} radius={0.012} smoothness={4}>
          <meshBasicMaterial color="#00ffc6" toneMapped={false} />
        </RoundedBox>
      </mesh>

      <mesh position={[-0.43, -0.12, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#a9afad" metalness={0.55} roughness={0.28} />
      </mesh>
      <mesh position={[0.43, -0.12, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#a9afad" metalness={0.55} roughness={0.28} />
      </mesh>

      <group ref={head} position={[0, 0.52, 0]}>
        <mesh castShadow receiveShadow>
          <RoundedBox args={[0.72, 0.68, 0.58]} radius={0.22} smoothness={8}>
          <meshStandardMaterial color="#111515" metalness={0.32} roughness={0.2} />
          </RoundedBox>
        </mesh>
        <mesh position={[0, -0.045, 0.3]}>
          <RoundedBox args={[0.5, 0.33, 0.075]} radius={0.15} smoothness={8}>
            <meshPhysicalMaterial color="#061a18" roughness={0.12} metalness={0.45} clearcoat={1} />
          </RoundedBox>
        </mesh>
        <RobotEye position={[-0.105, -0.035, 0.345]} blinkOffset={0} />
        <RobotEye position={[0.105, -0.035, 0.345]} blinkOffset={0.3} />
        <RobotEar position={[-0.37, 0.02, 0]} />
        <RobotEar position={[0.37, 0.02, 0]} />
        <mesh position={[0, 0.37, 0]}>
          <cylinderGeometry args={[0.03, 0.042, 0.07, 24]} />
          <meshStandardMaterial color="#9ea09d" metalness={0.65} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.46, 0]}>
          <cylinderGeometry args={[0.009, 0.009, 0.13, 12]} />
          <meshStandardMaterial color="#00ffc6" emissive="#00ffc6" emissiveIntensity={0.45} />
        </mesh>
        <mesh position={[0, 0.53, 0]}>
          <sphereGeometry args={[0.025, 20, 20]} />
          <meshBasicMaterial color="#ff704f" toneMapped={false} />
        </mesh>
      </group>

      <mesh position={[-0.49, -0.36, 0]} rotation={[0, 0, -0.14]} castShadow>
        <capsuleGeometry args={[0.095, 0.36, 8, 24]} />
        <meshStandardMaterial color="#c3c7c4" roughness={0.48} metalness={0.16} />
      </mesh>
      <mesh position={[0.49, -0.36, 0]} rotation={[0, 0, 0.14]} castShadow>
        <capsuleGeometry args={[0.095, 0.36, 8, 24]} />
        <meshStandardMaterial color="#c3c7c4" roughness={0.48} metalness={0.16} />
      </mesh>
    </group>
  )
}

export default function RobotHeroScene() {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0.12, 5.1], fov: 34 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 5, 4]} intensity={2.1} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, 1.5, 2]} intensity={22} distance={8} color="#c9fff3" />
      <Environment preset="studio" />
      <Float speed={1.05} rotationIntensity={0.035} floatIntensity={0.12}>
        <RobotPrototype />
      </Float>
      <ContactShadows position={[0, -1.45, 0]} opacity={0.35} scale={4} blur={2.6} far={2.5} />
    </Canvas>
  )
}
