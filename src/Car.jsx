import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Car(props) {
  const { nodes, materials, scene } = useGLTF('/mersedes.glb', true)

  const wheelNames = [
    "Object_364", "Object_356", "Object_348", "Object_340",
    "Object_334", "Object_335", "Object_342", "Object_343",
    "Object_358", "Object_359", "Object_350", "Object_351"
  ]

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="TwiXeR_W223_windshield_tinted_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                >
                </mesh>
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.TwiXeR_W223_glass_windshield_tint}
                >
                </mesh>
              </group>
              <group name="TwiXeR_W223_trunk_antichrome_1">
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group name="TwiXeR_W223_taillight_R_chrome_2">
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
              </group>
              <group name="TwiXeR_W223_taillight_R_antichrome_3">
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
              </group>
              <group name="TwiXeR_W223_taillight_R_4">
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  // material={materials.TwiXeR_W223_taillight_red}
                >
                  <meshPhysicalMaterial 
                    emissive="red"      // Yorqinroq ko'rinish
                    emissiveIntensity={20} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  // material={materials.TwiXeR_W223_rearlight_running_glass}
                >
                  <meshPhysicalMaterial 
                    emissive="red"      // Yorqinroq ko'rinish
                    emissiveIntensity={10} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.TwiXeR_W223_drl_signal_R3}
                />
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.TwiXeR_W223_drl_signal_R4}
                />
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.TwiXeR_W223_drl_signal_R5}
                />
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.TwiXeR_W223_brakelights}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group name="TwiXeR_W223_taillight_L_chrome_5">
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
              </group>
              <group name="TwiXeR_W223_taillight_L_antichrome_6">
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
              </group>
              <group name="TwiXeR_W223_taillight_L_7">
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  // material={materials.TwiXeR_W223_taillight_red}
                >
                  <meshPhysicalMaterial 
                    emissive="red"      // Yorqinroq ko'rinish
                    emissiveIntensity={20} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  // material={materials.TwiXeR_W223_rearlight_running_glass}
                >
                  <meshPhysicalMaterial 
                    emissive="red"      // Yorqinroq ko'rinish
                    emissiveIntensity={10} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.TwiXeR_W223_brakelights}
                />
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.TwiXeR_W223_drl_signal_L3}
                />
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.TwiXeR_W223_drl_signal_L4}
                />
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials.TwiXeR_W223_drl_signal_L5}
                />
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group name="TwiXeR_W223_taillight_glass_R_8">
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
              </group>
              <group name="TwiXeR_W223_taillight_glass_L_9">
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
              </group>
              <group name="TwiXeR_W223_sideskirt_R_antichrome_10">
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
              </group>
              <group name="TwiXeR_W223_sideskirt_L_antichrome_11">
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
              </group>
              <group name="TwiXeR_W223_seats_R_grey_12">
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.TwiXeR_W223_SeatBelt}
                />
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.TwiXeR_W223_plastics_d}
                />
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.TwiXeR_W223_seatbelt_red}
                />
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
              </group>
              <group name="TwiXeR_W223_seat_FR_grey_13">
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_67"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials.TwiXeR_W223_seatbelt_red}
                />
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  // material={materials.TwiXeR_W223_speakers_1}
                >
                  <meshPhysicalMaterial 
                    emissive="white"      // Yorqinroq ko'rinish
                    emissiveIntensity={0.7} // 0.5 - o'rta darajada yorqin
                    roughness={1}       // Biroz yaltiroq
                    metalness={0.1}       // Metallga yaqin effekt */}
                  />
                </mesh>
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.TwiXeR_W223_gps_screen_2}
                />
              </group>
              <group name="TwiXeR_W223_seat_FL_grey_14">
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_73"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.TwiXeR_W223_seatbelt_red}
                />
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  // material={materials.TwiXeR_W223_speakers_1}
                >
                  <meshPhysicalMaterial 
                    emissive="white"      // Yorqinroq ko'rinish
                    emissiveIntensity={0.7} // 0.5 - o'rta darajada yorqin
                    roughness={1}       // Biroz yaltiroq
                    metalness={0.1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.TwiXeR_W223_gps_screen_2}
                />
              </group>
              <group name="TwiXeR_W223_roof_spoiler_15">
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.TwiXeR_W223_speakers_2}
                />
              </group>
              <group name="TwiXeR_W223_roof_panoramic_tinted_16">
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                />
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.TwiXeR_W223_glass_panorama_tint}
                />
              </group>
              <group name="TwiXeR_W223_plate_holder_R_17">
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.TwiXeR_W223_plastics_d}
                />
              </group>
              <group name="TwiXeR_W223_plate_holder_18">
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.TwiXeR_W223_plastics_d}
                />
              </group>
              <group name="TwiXeR_W223_mirror_R_19">
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials.TwiXeR_W223_speakers_3}
                />
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group name="TwiXeR_W223_mirror_L_20">
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials.TwiXeR_W223_speakers_3}
                />
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group name="TwiXeR_W223_hood_21">
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.TwiXeR_W223}
                >
                </mesh>
              </group>
              <group name="TwiXeR_W223_headlight_R_22">
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.TwiXeR_W223_headlight_running}
                />
                <mesh
                  name="Object_107"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107.geometry}
                  material={materials.TwiXeR_W223_headlight_running_blue}
                />
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  // material={materials.TwiXeR_W223_highbeam}
                >
                  <meshPhysicalMaterial 
                    emissive="white"      // Yorqinroq ko'rinish
                    emissiveIntensity={10} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={1.2}
                    metalness={0.1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  // material={materials.TwiXeR_W223_bumper_grille}
                >
                  <meshPhysicalMaterial 
                    emissive="black"      // Yorqinroq ko'rinish
                    emissiveIntensity={0.1} // 0.5 - o'rta darajada yorqin
                    roughness={1}       // Biroz yaltiroq
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111.geometry}
                  // material={materials.TwiXeR_W223_rearlight_running_6}
                >
                  <meshPhysicalMaterial 
                  emissive="white"      // Yorqinroq ko'rinish
                  emissiveIntensity={3} // 0.5 - o'rta darajada yorqin
                  roughness={1}       // Biroz yaltiroq
                  metalness={1}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                >
                <meshPhysicalMaterial 
                  color="white"
                  emissive="white"      // Yorqinroq ko'rinish
                  emissiveIntensity={10} // 0.5 - o'rta darajada yorqin
                  roughness={10}       // Biroz yaltiroq
                  metalness={10}       // Metallga yaqin effekt
                />
              </mesh>
              </group>
              <group name="TwiXeR_W223_headlight_L_23">
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.TwiXeR_W223_headlight_running}
                />
                <mesh
                  name="Object_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115.geometry}
                  material={materials.TwiXeR_W223_headlight_running_blue}
                />
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  // material={materials.TwiXeR_W223_highbeam}
                >
                  <meshPhysicalMaterial 
                    emissive="white"      // Yorqinroq ko'rinish
                    emissiveIntensity={10} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={1.2}
                    metalness={0.1}       // Metallga yaqin effekt   // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  // material={materials.TwiXeR_W223_bumper_grille}
                >
                  <meshPhysicalMaterial 
                    emissive="black"      // Yorqinroq ko'rinish
                    emissiveIntensity={0.1} // 0.5 - o'rta darajada yorqin
                    roughness={1}       // Biroz yaltiroq
                    metalness={1}      // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_119"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  // material={materials.TwiXeR_W223_rearlight_running_6}
                >
                  <meshPhysicalMaterial 
                  emissive="white"      // Yorqinroq ko'rinish
                  emissiveIntensity={3} // 0.5 - o'rta darajada yorqin
                  roughness={1}       // Biroz yaltiroq
                  metalness={1}       // Metallga yaqin effekt    // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  // material={materials.TwiXeR_W223_rearlight_running_6}
                >
                  <meshPhysicalMaterial 
                  color="white"
                  emissive="white"      // Yorqinroq ko'rinish
                  emissiveIntensity={10} // 0.5 - o'rta darajada yorqin
                  roughness={10}       // Biroz yaltiroq
                  metalness={10}      // Metallga yaqin effekt
                />
                </mesh>
              </group>
              <group name="TwiXeR_W223_headlight_glass_R_24">
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.TwiXeR_W223_glass}
                >
                </mesh>
              </group>
              <group name="TwiXeR_W223_headlight_glass_L_25">
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
              </group>
              <group name="TwiXeR_W223_grille_anti_chrome_style_2_26">
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials.TwiXeR_W223_speakers_3}
                />
              </group>
              <group name="TwiXeR_W223_fender_FR_27">
                <mesh
                  name="Object_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_fender_FL_28">
                <mesh
                  name="Object_131"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_doorpanel_RR_grey_29">
                <mesh
                  name="Object_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.TwiXeR_W223_speakers_4}
                />
                <mesh
                  name="Object_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_135.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_139"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_139.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_141"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_141.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
              </group>
              <group name="TwiXeR_W223_doorpanel_RL_grey_30">
                <mesh
                  name="Object_143"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_143.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.TwiXeR_W223_speakers_4}
                />
                <mesh
                  name="Object_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_145.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_147.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_149.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_151.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
              </group>
              <group name="TwiXeR_W223_doorpanel_FR_grey_31">
                <mesh
                  name="Object_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_153.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials.TwiXeR_W223_speakers_4}
                />
                <mesh
                  name="Object_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_157"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_157.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_159"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_159.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_161"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_161.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
              </group>
              <group name="TwiXeR_W223_doorpanel_FL_grey_32">
                <mesh
                  name="Object_163"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_163.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials.TwiXeR_W223_speakers_4}
                />
                <mesh
                  name="Object_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_169"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_169.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_171"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_171.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
              </group>
              <group name="TwiXeR_W223_doorglass_RR_tinted_33">
                <mesh
                  name="Object_173"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_173.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                />
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials.TwiXeR_W223_speakers_6}
                />
                <mesh
                  name="Object_175"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175.geometry}
                  material={materials.TwiXeR_W223_glass_rear_tint}
                />
              </group>
              <group name="TwiXeR_W223_doorglass_RL_tinted_34">
                <mesh
                  name="Object_177"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_177.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                />
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials.TwiXeR_W223_speakers_6}
                />
                <mesh
                  name="Object_179"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179.geometry}
                  material={materials.TwiXeR_W223_glass_rear_tint}
                />
              </group>
              <group name="TwiXeR_W223_doorglass_FR_tinted_35">
                <mesh
                  name="Object_181"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_181.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                />
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials.TwiXeR_W223_speakers_6}
                />
                <mesh
                  name="Object_183"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_183.geometry}
                  material={materials.TwiXeR_W223_glass_front_tint}
                />
              </group>
              <group name="TwiXeR_W223_doorglass_FL_tinted_36">
                <mesh
                  name="Object_185"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                />
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials.TwiXeR_W223_speakers_6}
                />
                <mesh
                  name="Object_187"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_187.geometry}
                  material={materials.TwiXeR_W223_glass_front_tint}
                />
              </group>
              <group name="TwiXeR_W223_door_RR_antichrome_37">
                <mesh
                  name="Object_189"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_189.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_door_RL_antichrome_38">
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_193"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_193.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_door_FR_antichrome_39">
                <mesh
                  name="Object_195"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_195.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_door_FL_antichrome_40">
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_199"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_199.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_dash_grey_41">
                <mesh
                  name="Object_201"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_201.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_203"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_203.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_205"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_205.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_207"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_207.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_209"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_209.geometry}
                  material={materials.TwiXeR_W223_speakers_7}
                />
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials.TwiXeR_W223_pedal}
                />
                <mesh
                  name="Object_211"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_211.geometry}
                  material={materials.TwiXeR_W223_speakers_8}
                />
              </group>
              <group name="TwiXeR_W223_console_grey_42">
                <mesh
                  name="Object_213"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_213.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_215"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_215.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_217"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_217.geometry}
                  material={materials.TwiXeR_W223_speakers_1}
                />
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials.TwiXeR_W223_gps_screen_2}
                />
                <mesh
                  name="Object_219"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_219.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials.TwiXeR_W223_gps_screen}
                />
              </group>
              <group name="TwiXeR_W223_center_taillightglass_43">
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
              </group>
              <group name="TwiXeR_W223_center_taillight_44">
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  // material={materials.TwiXeR_W223_taillight_red}
                >
                  <meshPhysicalMaterial 
                    emissive="red"      // Yorqinroq ko'rinish
                    emissiveIntensity={2} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_225"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_225.geometry}
                  // material={materials.TwiXeR_W223_rearlight_running_glass}
                >
                  <meshPhysicalMaterial 
                    emissive="red"      // Yorqinroq ko'rinish
                    emissiveIntensity={2} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials.TwiXeR_W223_drl_signal_R3}
                />
                <mesh
                  name="Object_227"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227.geometry}
                  material={materials.TwiXeR_W223_drl_signal_L3}
                />
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials.TwiXeR_W223_drl_signal_L2}
                />
                <mesh
                  name="Object_229"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_229.geometry}
                  material={materials.TwiXeR_W223_drl_signal_R2}
                />
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_231"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_231.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group name="TwiXeR_W223_bumper_splitter_F_Mansory_45">
                <mesh
                  name="Object_233"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_233.geometry}
                  material={materials.TwiXeR_W223_speakers_2}
                />
              </group>
              <group name="TwiXeR_W223_bumper_F_brabus_46">
                <mesh
                  name="Object_235"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_235.geometry}
                  material={materials.TwiXeR_W223_glass}
                />
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_237"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_237.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_239"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_239.geometry}
                  material={materials.TwiXeR_W223_brabus_black}
                />
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials.TwiXeR_W223_speakers_9}
                />
              </group>
              <group name="TwiXeR_W223_brabus_trunk_47">
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  // material={materials.TwiXeR_W223_brabus_black}
                >
                  <meshPhysicalMaterial 
                    emissive="white"      // Yorqinroq ko'rinish
                    emissiveIntensity={0.8} // 0.5 - o'rta darajada yorqin
                    roughness={0.01}       // Biroz yaltiroq
                    ior={0.2}
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_243"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_243.geometry}
                  material={materials.TwiXeR_W223_speakers_9}
                />
              </group>
              <group name="TwiXeR_W223_brabus_hood_symbol_48">
                <mesh
                  name="Object_245"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_245.geometry}
                  material={materials.TwiXeR_W223_brabus_black}
                >
                </mesh>
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials.TwiXeR_W223_speakers_9}
                />
              </group>
              <group name="TwiXeR_W223_brabus_bumper_R_49">
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_249"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_249.geometry}
                  material={materials.TwiXeR_W223_bumper_grille}
                />
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials.TwiXeR_W223_Bumper_red}
                />
                <mesh
                  name="Object_251"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_251.geometry}
                  material={materials.TwiXeR_W223_bumper_brabus}
                />
              </group>
              <group name="TwiXeR_W223_body_50">
                <mesh
                  name="Object_253"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_253.geometry}
                  material={materials.TwiXeR_W223_SeatBelt}
                />
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials.TwiXeR_W223_brakelights}
                />
                <mesh
                  name="Object_255"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_255.geometry}
                  material={materials.TwiXeR_W223_int_RGB}
                />
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials.TwiXeR_W223_speakers_3}
                />
                <mesh
                  name="Object_257"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_257.geometry}
                  material={materials.TwiXeR_W223_speakers_4}
                />
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials.TwiXeR_W223_speakers_8}
                />
                <mesh
                  name="Object_259"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_259.geometry}
                  material={materials.TwiXeR_W223_leather_dark_2}
                />
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_261"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_261.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_263"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_263.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
                <mesh
                  name="Object_265"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_265.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials.TwiXeR_W223_speakers_5}
                />
                <mesh
                  name="Object_267"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_267.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_269"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_269.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_271"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_271.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_backlight_tinted_51">
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials.TwiXeR_W223_glass_int}
                />
                <mesh
                  name="Object_275"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_275.geometry}
                  material={materials.TwiXeR_W223_glass_rear_tint}
                />
              </group>
              <group name="TwiXeR_W223_brabus_exhaust_R_52">
                <mesh
                  name="Object_277"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_277.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials.TwiXeR_W223_exhaust_full_black}
                />
                <mesh
                  name="Object_279"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_279.geometry}
                  material={materials.TwiXeR_W223_exhaust_black}
                />
              </group>
              <group name="TwiXeR_W223_brabus_exhaust_L_53">
                <mesh
                  name="Object_281"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_281.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials.TwiXeR_W223_exhaust_full_black}
                />
                <mesh
                  name="Object_283"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_283.geometry}
                  material={materials.TwiXeR_W223_exhaust_black}
                />
              </group>
              <group name="TwiXeR_W223_upperarm_F_54">
                <mesh
                  name="Object_285"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_285.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_RR_55">
                <mesh
                  name="Object_287"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_287.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_RL_56">
                <mesh
                  name="Object_289"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_289.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_FR_outer_bumper_57">
                <mesh
                  name="Object_291"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_291.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_FR_outer_58">
                <mesh
                  name="Object_293"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_293.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_FR_inner_59">
                <mesh
                  name="Object_295"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_295.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_FL_outer_bumper_60">
                <mesh
                  name="Object_297"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_297.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_FL_outer_61">
                <mesh
                  name="Object_299"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_299.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_tub_FL_inner_62">
                <mesh
                  name="Object_301"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_301.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_reinforcement_F_63">
                <mesh
                  name="Object_303"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_303.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_radiator_64">
                <mesh
                  name="Object_305"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_305.geometry}
                  material={materials.TwiXeR_W223_speakers_10}
                />
              </group>
              <group name="TwiXeR_W223_radfan2_65" position={[-0.174, 0.445, 2.181]} scale={1.2}>
                <mesh
                  name="Object_307"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_307.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_radfan1_66" position={[0.13, 0.513, 2.176]} scale={1.2}>
                <mesh
                  name="Object_309"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_309.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_intercooler_68">
                <mesh
                  name="Object_311"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_311.geometry}
                  material={materials.TwiXeR_W223_speakers_10}
                />
              </group>
              <group name="TwiXeR_W223_fueltank_70">
                <mesh
                  name="Object_313"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_313.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_engine_undertray_71">
                <mesh
                  name="Object_315"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_315.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_reinforcement_R_72" scale={[0.98, 1, 1]}>
                <mesh
                  name="Object_317"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_317.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_BackUnderbody_73">
                <mesh
                  name="Object_319"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_319.geometry}
                  material={materials.TwiXeR_W223}
                />
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={materials.TwiXeR_W223_Black_trunk}
                />
              </group>
              <group name="TwiXeR_W223_sideskirt_74">
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_underbody_75">
                <mesh
                  name="Object_324"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group name="TwiXeR_W223_exhaust_shield_76">
                <mesh
                  name="Object_326"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group
                name="TwiXeR_W223_driveshaft_RF_awd_77"
                position={[0, 0.349, 0.216]}
                scale={0.01}>
                <mesh
                  name="Object_328"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group
                name="TwiXeR_W223_needle_tacho_78"
                position={[0.302, 1.003, 0.632]}
                rotation={[-1.431, 0, 0]}
                scale={0.01}>
                <mesh
                  name="Object_330"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group
                name="TwiXeR_W223_needle_speedo_79"
                position={[0.503, 1.003, 0.632]}
                rotation={[-1.431, 0, 0]}
                scale={0.01}>
                <mesh
                  name="Object_332"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_332.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group
                name="TwiXeR_W223_brabus_wheels_82"
                position={[0.815, 0.389, 1.651]}
                scale={1.059}>
                <mesh
                  name="Object_334"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_334.geometry}
                  // material={materials['TwiXeR_W223_rim_black.001']}
                >
                  <meshPhysicalMaterial 
                  emissive="black"      // Yorqinroq ko'rinish
                  emissiveIntensity={5} // 0.5 - o'rta darajada yorqin
                  roughness={0.1}       // Biroz yaltiroq
                  metalness={1.5}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_335"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_335.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group
                name="3_Wheel_83"
                position={[0.789, 0.389, 1.651]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.963}>
                <mesh
                  name="Object_337"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_337.geometry}
                  material={materials['amdb11_misc_chrome.002']}
                />
                <mesh
                  name="Object_338"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_338.geometry}
                  material={materials['amdb11_brake.002']}
                />
                <mesh
                  name="Object_339"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_339.geometry}
                  // material={materials['amdb11_caliper.002']}
                >
                  <meshPhysicalMaterial 
                  emissive="red"      // Yorqinroq ko'rinish
                  emissiveIntensity={1} // 0.5 - o'rta darajada yorqin
                  roughness={0.01}       // Biroz yaltiroq
                  metalness={1}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_340"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_340.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group
                name="TwiXeR_W223_brabus_wheels001_84"
                position={[0.815, 0.389, -1.571]}
                scale={1.059}>
                <mesh
                  name="Object_342"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_342.geometry}
                  // material={materials['TwiXeR_W223_rim_black.001']}
                >
                  <meshPhysicalMaterial 
                  emissive="black"      // Yorqinroq ko'rinish
                  emissiveIntensity={5} // 0.5 - o'rta darajada yorqin
                  roughness={0.1}       // Biroz yaltiroq
                  metalness={1.5}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_343"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_343.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group
                name="3_Wheel001_85"
                position={[0.789, 0.389, -1.571]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.963}>
                <mesh
                  name="Object_345"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_345.geometry}
                  material={materials['amdb11_misc_chrome.002']}
                />
                <mesh
                  name="Object_346"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_346.geometry}
                  material={materials['amdb11_brake.002']}
                />
                <mesh
                  name="Object_347"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_347.geometry}
                  // material={materials['amdb11_caliper.002']}
                >
                  <meshPhysicalMaterial 
                  emissive="red"      // Yorqinroq ko'rinish
                  emissiveIntensity={1} // 0.5 - o'rta darajada yorqin
                  roughness={0.01}       // Biroz yaltiroq
                  metalness={1}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_348"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_348.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group
                name="TwiXeR_W223_brabus_wheels002_86"
                position={[-0.814, 0.389, 1.651]}
                scale={[-1.059, 1.059, 1.059]}>
                <mesh
                  name="Object_350"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_350.geometry}
                  // material={materials['TwiXeR_W223_rim_black.001']}
                >
                  <meshPhysicalMaterial 
                  emissive="black"      // Yorqinroq ko'rinish
                  emissiveIntensity={5} // 0.5 - o'rta darajada yorqin
                  roughness={0.1}       // Biroz yaltiroq
                  metalness={1.5}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_351"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_351.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group
                name="3_Wheel002_87"
                position={[-0.788, 0.389, 1.651]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.963, 0.963, 0.963]}>
                <mesh
                  name="Object_353"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_353.geometry}
                  material={materials['amdb11_misc_chrome.002']}
                />
                <mesh
                  name="Object_354"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_354.geometry}
                  material={materials['amdb11_brake.002']}
                />
                <mesh
                  name="Object_355"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_355.geometry}
                  // material={materials['amdb11_caliper.002']}
                >
                  <meshPhysicalMaterial 
                  emissive="red"      // Yorqinroq ko'rinish
                  emissiveIntensity={1} // 0.5 - o'rta darajada yorqin
                  roughness={0.01}       // Biroz yaltiroq
                  metalness={1}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_356"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_356.geometry}
                  material={materials.TwiXeR_W223}
                />
              </group>
              <group
                name="TwiXeR_W223_brabus_wheels003_88"
                position={[-0.814, 0.389, -1.571]}
                scale={[-1.059, 1.059, 1.059]}>
                <mesh
                  name="Object_358"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_358.geometry}
                  // material={materials['TwiXeR_W223_rim_black.001']}
                >
                  <meshPhysicalMaterial 
                  emissive="black"      // Yorqinroq ko'rinish
                  emissiveIntensity={5} // 0.5 - o'rta darajada yorqin
                  roughness={0.1}       // Biroz yaltiroq
                  metalness={1.5}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_359"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_359.geometry}
                  material={materials.TwiXeR_W223_rearlight_running_6}
                />
              </group>
              <group
                name="3_Wheel003_89"
                position={[-0.788, 0.389, -1.571]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.963, 0.963, 0.963]}>
                <mesh
                  name="Object_361"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_361.geometry}
                  material={materials['amdb11_misc_chrome.002']}
                />
                <mesh
                  name="Object_362"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_362.geometry}
                  material={materials['amdb11_brake.002']}
                />
                <mesh
                  name="Object_363"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_363.geometry}
                  // material={materials['amdb11_caliper.002']}
                >
                  <meshPhysicalMaterial 
                  emissive="red"      // Yorqinroq ko'rinish
                  emissiveIntensity={1} // 0.5 - o'rta darajada yorqin
                  roughness={0.01}       // Biroz yaltiroq
                  metalness={1}       // Metallga yaqin effekt
                />
                </mesh>
                <mesh
                  name="Object_364"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_364.geometry}
                  material={materials.TwiXeR_W223}
                >
                </mesh>
              </group>
              <group
                name="TwiXeR_W223_steer_90"
                position={[0.403, 0.952, 0.386]}
                rotation={[1.99, 0, Math.PI]}>
                <mesh
                  name="Object_366"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_366.geometry}
                  material={materials.TwiXeR_W223_speakers_11}
                />
                <mesh
                  name="Object_367"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_367.geometry}
                  material={materials['TwiXeR_W223_bumper_grille.001']}
                />
                <mesh
                  name="Object_368"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_368.geometry}
                  material={materials.TwiXeR_W223_speakers_0}
                />
                <mesh
                  name="Object_369"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_369.geometry}
                  material={materials.TwiXeR_W223_speakers_12}
                />
                <mesh
                  name="Object_370"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_370.geometry}
                  // material={materials['TwiXeR_W223_interior_chrome.001']}
                >
                  <meshPhysicalMaterial 
                    emissive="white"      // Yorqinroq ko'rinish
                    emissiveIntensity={0.5} // 0.5 - o'rta darajada yorqin
                    roughness={0.1}       // Biroz yaltiroq
                    metalness={1}       // Metallga yaqin effekt
                  />
                </mesh>
                <mesh
                  name="Object_371"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_371.geometry}
                  // material={materials.TwiXeR_W223_speakers_1}
                >
                  <meshPhysicalMaterial 
                    emissive="black"      // Yorqinroq ko'rinish
                    emissiveIntensity={1} // 0.5 - o'rta darajada yorqin
                    roughness={10}       // Biroz yaltiroq
                    metalness={0.1}       // Metallga yaqin effekt
                  />
                </mesh>
              </group>
              <group name="TwiXeR_W223_shifter_A_91" position={[0.352, 0.916, 0.562]}>
                <mesh
                  name="Object_373"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_373.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_374"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_374.geometry}
                  material={materials['TwiXeR_W223_bumper_grille.003']}
                />
                <mesh
                  name="Object_375"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_375.geometry}
                  material={materials.TwiXeR_W223_speakers_13}
                />
              </group>
              <group name="TwiXeR_W223_turn_signal_stalk_92" position={[0.454, 0.916, 0.562]}>
                <mesh
                  name="Object_377"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_377.geometry}
                  material={materials['TwiXeR_W223_bumper_grille.003']}
                />
                <mesh
                  name="Object_378"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_378.geometry}
                  material={materials.TwiXeR_W223_speakers}
                />
                <mesh
                  name="Object_379"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_379.geometry}
                  material={materials.TwiXeR_W223_speakers_13}
                />
              </group>
              <group name="TwiXeR_W223_gaspedal_93" position={[0.285, 0.336, 0.88]}>
                <mesh
                  name="Object_381"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_381.geometry}
                  material={materials['TwiXeR_W223_pedal.001']}
                />
                <mesh
                  name="Object_382"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_382.geometry}
                  material={materials.TwiXeR_W223_pedals_texture}
                />
              </group>
              <group name="TwiXeR_W223_pedal_brake_A_94" position={[0.49, 0.785, 0.97]}>
                <mesh
                  name="Object_384"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_384.geometry}
                  material={materials['TwiXeR_W223_pedal.001']}
                />
                <mesh
                  name="Object_385"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_385.geometry}
                  material={materials.TwiXeR_W223_pedals_texture}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
      
useGLTF.preload('/mersedes-benz_s-class_w223_brabus_850.glb')
