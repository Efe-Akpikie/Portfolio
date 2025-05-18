import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Moon from './Moon'

const OrbitingMoon = ({ earthPosition = [0, -3, 0] }) => {
  const orbitRef = useRef()
  const moonRef = useRef()

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()

    // Orbit the moon (parent rotation)
    if (orbitRef.current) {
      orbitRef.current.rotation.y = elapsed * 0.3 // orbit speed
    }

    // Rotate the moon itself
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.01 // moon spin
    }
  })

  return (
    <group ref={orbitRef}>
      {/* Position moon at a distance from earth along X axis */}
      <group position={[earthPosition[0] + 5, earthPosition[1], earthPosition[2]]} ref={moonRef}>
        <Moon scale={0.07} />
      </group>
    </group>
  )
}

export default OrbitingMoon

