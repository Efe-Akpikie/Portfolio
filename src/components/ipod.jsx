import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

const Ipod = (props) => {
  const { nodes, materials } = useGLTF("/models/ipod_scroll_wheel.glb");
  const [hovered, setHovered] = useState(false);

  const bodyMeshes = [
    "Object_6",
    "Object_8",
    "Object_10",
    "Object_12",
    "Object_14",
    "Object_16",
    "Object_18",
    "Object_20",
  ];

  return (
    <group {...props} dispose={null}>
      <group position={[1.315, 0, 0.333]} rotation={[-Math.PI / 2, 0, -1.079]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={10}>
            {bodyMeshes.map((name) => (
              <mesh
                key={name}
                castShadow
                receiveShadow
                geometry={nodes[name].geometry}
                material={materials.Body}
                position={nodes[name].position}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHovered(true);
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  setHovered(false);
                }}
                material-emissive={hovered ? "#FFA500" : "black"}
                material-emissiveIntensity={hovered ? 40 : 0}
              />
            ))}

            {/* TransparentPlastic mesh - no highlight */}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.TransparentPlastic}
              position={nodes.Object_22.position}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/ipod_scroll_wheel.glb");

export default Ipod;

