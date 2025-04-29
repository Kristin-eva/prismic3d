"use client";

import * as THREE from "three"; // started off with importing THREE
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Shapes() {
  // Main React component
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md-col-span-1 md:col-start-2 md:mt-0">
      <Canvas // Setup a 3D canvas for drawing
        className="z-0"
        shadows // Enable shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          {" "}
          {/* Lazy-load the scene contents */}
          <Geometries /> {/* Draw our custom geometries (donuts) */}
          <ContactShadows
            position={[0, -3.5, 0]} // Place shadows under the geometries
            opacity={0.65} // Make shadows slightly transparent
            scale={40} // Set size of the shadow area
            blur={1} // Soften the shadow edges
            far={9} // How far the shadow extends
          />
          <Environment preset="studio" /> {/* Add a nice lighting preset */}
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  // Creates and returns multiple geometry shapes
  const geometries = [
    // Array of torus shapes (donuts) with different positions and settings
    {
      position: [0, 0, 0],
      r: 2,
      geometry: new THREE.TorusGeometry(0.6, 0.5, 16, 32), // Create a thick torus
    },
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Create a thinner torus
    },
    {
      position: [-1.4, 2, -4],
      r: 2,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Another thin torus
    },
    {
      position: [-0.8, -0.75, 5],
      r: 1,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Another thin torus
    },
    {
      position: [1.6, 1.6, -4],
      r: 2,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 100), // High-resolution torus
    },
  ];

  const materials = [
    // Define some materials (colors) for the donuts
    new THREE.MeshStandardMaterial({ color: 0xf4cccc, roughness: 0 }), // Light pink
    new THREE.MeshStandardMaterial({ color: 0xea9999, roughness: 0 }), // Pink
    new THREE.MeshStandardMaterial({ color: 0xea9999, roughness: 0 }), // Pink
    new THREE.MeshStandardMaterial({ color: 0xea9999, roughness: 0 }), // Pink
    new THREE.MeshStandardMaterial({ color: 0xf683ac, roughness: 0 }), // Darker pink
  ];

  return geometries.map(
    (
      { position, r, geometry } // For each item in geometries array
    ) => (
      <Geometry
        key={JSON.stringify(position)} // Use position as a unique key
        position={position.map((p) => p * 2)} // Scale positions 2x
        geometry={geometry} // Pass the geometry
        materials={materials} // Pass the materials
        r={r} // Pass the radius (used for animation speed)
      />
    )
  );
}

function Geometry({ r, position, geometry, materials }) {
  // One individual 3D object
  const meshRef = useRef(); // A reference to the 3D mesh (so GSAP can animate it)
  const [visible, setVisible] = useState(true); // Track if it's visible

  const startingMaterial = getRandomMaterial(); // Pick a random material to start

  function getRandomMaterial() {
    // Helper to randomly pick a color/material
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    // When user clicks a shape
    const mesh = e.object; // Get the mesh that was clicked

    gsap.to(mesh.rotation, {
      // Animate the rotation randomly
      x: `+=${gsap.utils.random(0, 2)}`, // Rotate X a random amount
      y: `+=${gsap.utils.random(0, 2)}`, // Rotate Y a random amount
      z: `+=${gsap.utils.random(0, 2)}`, // Rotate Z a random amount
      duration: 1.3, // Animation lasts 1.3 seconds
      ease: "elastic.out", // Bouncy easing
      yoyo: true, // Reverse after finishing
    });
    mesh.material = getRandomMaterial(); // Change material randomly
  }

  const handlePointerOver = () => {
    // When mouse is over the shape
    document.body.style.cursor = "pointer"; // Change cursor to pointer
  };

  const handlePointerOut = () => {
    // When mouse leaves the shape
    document.body.style.cursor = "default"; // Reset cursor to normal
  };

  useEffect(() => {
    // Run when component mounts
    let ctx = gsap.context(() => {
      setVisible(true); // Make sure it is visible
      gsap.from(meshRef.current.scale, {
        // Animate scale from 0 to normal
        x: 0,
        y: 0,
        z: 0,
        duration: 1, // Lasts 1 second
        ease: "elastic.out(1,0.3)", // Bouncy pop-in effect
        delay: 0.3, // Small delay before it pops
      });
    });
    return () => ctx.revert(); // Cleanup animation context when unmounting
  }, []);

  return (
    <group position={position} ref={meshRef}>
      {" "}
      {/* Group that holds and positions the shape */}
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        {" "}
        {/* Make it float and spin */}
        <mesh
          geometry={geometry} // Set shape
          onClick={handleClick} // Handle clicks
          onPointerOver={handlePointerOver} // Handle hover
          onPointerOut={handlePointerOut} // Handle leaving hover
          visible={visible} // Make it visible
          material={startingMaterial} // Apply starting material
        />
      </Float>
    </group>
  );
}
