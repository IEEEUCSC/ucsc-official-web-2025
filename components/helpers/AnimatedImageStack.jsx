"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import { aboutImages } from "@/utils";

const AnimatedImageStack = () => {
  useGSAP(() => {
    const images = document.querySelectorAll(".stack-image");
    const timeline = gsap.timeline({ repeat: -1 });

    images.forEach((image, index) => {
      // Animate each image to opacity 1 while setting others to 0
      timeline
        .to(images, { opacity: 0, duration: 0 })
        .to(image, { opacity: 1, duration: 0.0001, ease: "power1.inOut" })
        .to(
          image,
          { opacity: 0, duration: 0.0001, ease: "power1.inOut", delay: 1 },
          "-=0.1"
        );
    });
  }, []);
  return (
    <>
      {aboutImages.map((image, index) => (
        <div
          key={index}
          className="h-[350px] w-[250px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  stack-image"
        >
          <Image
            src={image}
            alt=""
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
};

export default AnimatedImageStack;
