"use client";

import profileVideo from "../../assets/profile.mp4";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function MyLinksHeader() {
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: .7 } });
    const image = imageRef.current;
    const name = nameRef.current;
    const description = descriptionRef.current;

    tl.fromTo(image, { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
      .fromTo(name, { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
      .fromTo(description, { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
  }, []);
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <video
          ref={imageRef}
          autoPlay
          loop
          muted
          className="object-cover w-28 h-28 rounded-full mt-16"
        >
          <source src={profileVideo} alt="Video perfil" type="video/mp4" />
        </video>
        <h1 ref={nameRef} className="text-white mt-4 mb-1 text-[20px]">
          Ghedyvan Vinícius
        </h1>
        <h2
          ref={descriptionRef}
          className="text-white px-10 align-middle text-center mb-8"
        >
          Desenvolvedor Front-end e estudante de Ciência da Computação - UFAL
        </h2>
      </div>
    </div>
  );
}
