import React from 'react';
import * as THREE from 'three';
import { extend, Canvas, useFrame } from '@react-three/fiber';
import starimg from '@/assets/star/1.png';
import styles from './universe.less';

const MyMesh = () => {
  const parameters = {
    stars: 1000,
    count: 3,
    insideColor: 0xfff,
    outsideColor: 'red',
    radius: 2,
    randomnessPower: 1,
    branches: 3,
    spin: 2,
  };
  const bgStarsPositions = React.useMemo(() => {
    const bgStarsPositions = new Float32Array(parameters.stars * 3);
    // 背景星星的位置
    for (let j = 0; j < parameters.stars; j++) {
      bgStarsPositions[j * 3 + 0] = (Math.random() - 0.5) * 20;
      bgStarsPositions[j * 3 + 1] = (Math.random() - 0.5) * 20;
      bgStarsPositions[j * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return bgStarsPositions;
  }, []);

  // console.log("++++", bgStarsPositions)

  // 星系
  const [positions, colors] = React.useMemo(() => {
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      // 位置
      const x = Math.random() * parameters.radius;
      const branchAngle =
        ((i % parameters.branches) / parameters.branches) * 2 * Math.PI;
      const spinAngle = x * parameters.spin;

      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);

      positions[i * 3] = Math.sin(branchAngle + spinAngle) * x + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.cos(branchAngle + spinAngle) * x + randomZ;

      //颜色

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, x / parameters.radius);

      colors[i * 3 + 0] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  const textureLoader = new THREE.TextureLoader();
  const shape = textureLoader.load(starimg);

  const bgstart = React.useRef<any>();

  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime;
    bgstart.current.rotation.y = -elapsedTime * 0.05;
  });

  const points1 = React.useRef<any>();

  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime;
    points1.current.rotation.y = elapsedTime * 0.3;
  });

  return (
    <mesh>
      <points ref={bgstart}>
        //背景
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={parameters.stars}
            array={bgStarsPositions}
            itemSize={3}
          ></bufferAttribute>
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={0.01}
          depthWrite={false}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
          color={'#1b3984'}
          transparent={true}
          alphaMap={shape}
        ></pointsMaterial>
      </points>

      <points ref={points1}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={parameters.count}
            array={positions}
            itemSize={3}
          ></bufferAttribute>
          <bufferAttribute
            attachObject={['attributes', 'color']}
            count={parameters.count}
            array={colors}
            itemSize={3}
          ></bufferAttribute>
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={0.01}
          depthWrite={false}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
          vertexColors={true}
          transparent={true}
          alphaMap={shape}
        ></pointsMaterial>
      </points>
      <meshPhongMaterial />
    </mesh>
  );
};

export default function Universe() {
  return (
    <Canvas
      style={{ background: '#000', height: 1000 }}
      camera={{ position: [0, 0, 15] }}
    >
      <MyMesh />
      <ambientLight args={[0xff0000]} intensity={0.1} />
    </Canvas>
  );
}
