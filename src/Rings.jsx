import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import gsap from "gsap";
import * as THREE from "three";

export function Rings() {
  const itemsRef = useRef([]);
  const geometryParams = useRef({ radius: 30.35 }); // gsap shu qiymatni o‘zgartiradi

  // GSAP animatsiyasi faqat bir marta ishlaydi
  useEffect(() => {
    gsap.to(geometryParams.current, {
      radius: 5.35,
      duration: 15,
      ease: "power2.out",
    });
  }, []);

  useFrame((state, delta) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      if (!mesh) continue;

      let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      let dist = Math.abs(z);
      mesh.position.set(0, 0, -z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 10;
      if (dist > 4) {
        colorScale = 1 - (Math.min(dist, 16) - 2) / 10;
      }
      colorScale *= 0.6;

      const emissiveColor = i % 2 === 1
        ? new Color(1.0, 1.0, 1.0)
        : new Color(1.1, 1.1, 1);

      mesh.material.emissive = emissiveColor.multiplyScalar(colorScale);

      // 💡 bu yerda geometriyani real vaqt rejimida yangilaymiz
      const currentRadius = geometryParams.current.radius;
      const geo = mesh.geometry;
      geo.parameters.radius = currentRadius;

      // Ishonchli usul: eski geometry'ni yo'q qilamiz va yangisini yaratamiz
      mesh.geometry.dispose();
      mesh.geometry = new THREE.TorusGeometry(currentRadius, 0.1, 16, 100);
    }
  });

  return (
    <>
      {[...Array(14)].map((_, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <torusGeometry args={[30.35, 0.1, 16, 100]} />
          <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[1, 1, 1]} />
        </mesh>
      ))}
    </>
  );
}
