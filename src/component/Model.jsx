import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";
import * as Three from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import { useState, useRef, useEffect } from "react";
import { animateWithGsapTimeline } from "../utils/animation";

const Model = () => {
  // initial state to model view = small
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  //camera control => model view
  const cameraControlLarge = useRef();
  const cameraControlSmall = useRef();

  const large = useRef(new Three.Group());
  const small = useRef(new Three.Group());

  //   Rotation control => model view
  const [smallRotation, setSmallRotation] = useState();
  const [largeRotation, setLargeRotation] = useState();

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look{" "}
        </h1>
        <div className="flex flex-col -items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              gsapType="view1"
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              gsapType="view2"
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="w-full mx-auto">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
