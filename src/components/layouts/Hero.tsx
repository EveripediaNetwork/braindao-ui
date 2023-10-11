"use client";

import { space_grotesk } from "@/app/font";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Navbar from "./Navbar";
import InViewAnimateBottom from "../transitions/InViewAnimateBottom";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

const Hero = () => {
  const plane = useRef<HTMLDivElement>(null);

  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  let xBoundary = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { movementX } = e;
    xBoundary = movementX;
    xForce += movementX * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane.current, { x: `+=${xForce}`, y: `+=${yForce}` });

    if (Math.abs(xForce) < 0.01 || Math.abs(xBoundary) > 20) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId!);
      requestAnimationFrameId = null;
    }
  };

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      bloomComposer: EffectComposer;
    const canvas = document.getElementsByTagName("canvas")[0];
    scene = new THREE.Scene();
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.y = 0;
    camera.position.x = 0;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.setClearColor(0x000000, 0.0);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 2;
    bloomPass.radius = 0;
    bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerHeight, window.innerWidth);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    // bloomComposer.addPass(bloomPass);

    const starGeometry = new THREE.SphereGeometry(1, 8, 8);

    const loader = new THREE.TextureLoader();
    const texture = loader.load("/images/brain.png");

    const starMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
      transparent: true,
    });

    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    starMesh.layers.set(1);
    scene.add(starMesh);

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientlight);

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        bloomComposer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    //animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      starMesh.rotation.y += 0.001;
      camera.layers.set(1);
      bloomComposer.render();
    };

    animate();
  }, []);

  return (
    <div>
      <div
        // onMouseMove={manageMouseMove}
        className="relative text-whiteAlpha-900"
      >
        <video
          // ref={plane}
          className="w-full h-full object-cover absolute"
          autoPlay
          muted
          loop
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative bg-black/20">
          <div className="max-w-[1536px] mx-auto">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center relative overflow-y-hidden h-[calc(40vh-65px)] md:h-[calc(60vh-65px)] lg:h-[calc(100vh-65px)]">
              <div className="flex text-center md:text-left items-center md:items-start flex-col justify-start mx-auto gap-1 sm:gap-5 w-full  max-w-6xl">
                <InViewAnimateBottom>
                  <h1
                    className={`text-2xl sm:text-4xl md:text-5xl animate-fade-in xl:text-[60px] 2xl:text-[70px] !leading-tight text-center font-bold ${space_grotesk.className}`}
                  >
                    Building a more intelligent future through the IQ token.
                  </h1>
                </InViewAnimateBottom>
                <InViewAnimateBottom className="mx-auto">
                  <p className="md:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl">
                    Join our mission to expand the scope of human knowledge with
                    BrainDAO, the governing DAO powering the IQ ecosystem.
                  </p>
                </InViewAnimateBottom>
                <a href={"#iq-token"} className="mt-4 mx-auto animate-bounce">
                  <RiArrowDownDoubleLine size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
