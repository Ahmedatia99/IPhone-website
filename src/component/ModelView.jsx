import { React, Suspense } from "react";
import {
  View,
  PerspectiveCamera,
  Html,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import Light from "./Light";
import IPhone from "./IPhone";
import Loading from "./Loading";
const ModelView = ({
  index,
  groupRef,
  controlRef,
  setRotationState,
  gsapType,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={groupRef}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Light />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePin={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Loading/>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
