"use client";
import * as THREE from 'three';

import { useEffect, useRef } from "react";
const getRandomParticelPos = (particleCount) => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  };
  const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    // resize only when necessary
    if (needResize) {
      //3rd parameter `false` to change the internal canvas size
      renderer.setSize(width, height, false);
    }
    return needResize;
  };
  
  // mouse
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

function StarryRock(){
  const newStarContainer = useRef(null);
  useEffect(() => {
    //https://medium.com/nerd-for-tech/adding-a-custom-star-field-background-with-three-js-79a1d18fd35d
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color("#1c1624"));
    // light source
    const color = 0xffffff, intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
      // camera
  const fov = 75,
  aspect = 2,
  near = 1.5,
  far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Geometry
const geometrys = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];

geometrys[0].setAttribute(
  "position",
  new THREE.BufferAttribute(getRandomParticelPos(350), 3)
);
geometrys[1].setAttribute(
  "position",
  new THREE.BufferAttribute(getRandomParticelPos(1500), 3)
);
const loader = new THREE.TextureLoader();

// material
const materials = [
  new THREE.PointsMaterial({
    size: 0.05,
    map: loader.load(
      "https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png"
    ),
    transparent: true
    // color: "#ff0000"
  }),
  new THREE.PointsMaterial({
    size: 0.075,
    map: loader.load(
      "https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"
    ),
    transparent: true
    // color: "#0000ff"
  })
];

const starsT1 = new THREE.Points(geometrys[0], materials[0]);
const starsT2 = new THREE.Points(geometrys[1], materials[1]);
scene.add(starsT1);
scene.add(starsT2);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    newStarContainer.current && newStarContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // camera.position.z = 5;
    var animate = function () {

    starsT1.position.x = mouseX * 0.0001;
    starsT1.position.y = mouseY * -0.0001;

    starsT2.position.x = mouseX * 0.0001;
    starsT2.position.y = mouseY * -0.0001;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return(
    <div ref={newStarContainer} className='w-full'>
        <div className='absolute w-3/4 top-3/4 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <span className="text-white text-5xl font-semibold h-full p-12 m-4">My Story begins in the Sleepy Coastal Town of Cannon Beach, OR.</span>
        </div>
         
    </div>
  )
}

export default StarryRock