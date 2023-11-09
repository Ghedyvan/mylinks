"use client";

import Image from "next/image";
import email from "@/assets/icons/email.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import github from "@/assets/icons/github.svg";
import portifolio from "@/assets/icons/code.svg";
import instagram from "@/assets/icons/instagram.svg";
import cowboy from "@/assets/icons/cowboy.png";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function MyLinksBody() {
  const buttonaRef = useRef(null);
  const buttonbRef = useRef(null);
  const buttoncRef = useRef(null);
  const buttondRef = useRef(null);
  const buttoneRef = useRef(null);
  const thanksRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: .7 } });
    const buttona = buttonaRef.current;
    const buttonb = buttonbRef.current;
    const buttonc = buttoncRef.current;
    const buttond = buttondRef.current;
    const buttone = buttoneRef.current;
    const thanks = thanksRef.current;

    tl.fromTo(buttona, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }).fromTo(
      buttonb,
      { opacity: 0, y: 100 },
      { opacity: .6, y: 0 }
    ).fromTo(
      buttonc,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    ).fromTo(
      buttond,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    ).fromTo(
      buttone,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    ).fromTo(
      thanks,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-4">
      <a
        ref={buttonaRef}
        href="https://github.com/Ghedyvan"
        target="_blank"
        className="relative mb-4 flex w-full bg-slate-900 max-w-[680px] h-[60px] rounded-lg shadow border-2 border-slate-900  justify-center align-middle"
      >
        <Image
          src={github}
          alt="Github logo"
          className="w-8 absolute left-4 top-[25%]"
        />
        <p className="text-white absolute top-[30%]">GitHub</p>
      </a>
      <div
        ref={buttonbRef}
        className="opacity-60 relative mb-4 flex w-full bg-slate-900 max-w-[680px] h-[60px] rounded-lg shadow border-2 border-slate-900  justify-center align-middle"
      >
        <Image
          src={portifolio}
          alt="Code icon"
          className="w-8 absolute left-4 top-[25%]"
        />
        <p className="text-white absolute top-[30%]">
          Meu site (em construção)
        </p>
      </div>
      <a
        ref={buttoncRef}
        href="https://instagram.com/vg_garcia"
        target="_blank"
        className="relative mb-4 flex w-full bg-slate-900 max-w-[680px] h-[60px] rounded-lg shadow border-2 border-slate-900  justify-center align-middle"
      >
        <Image
          src={instagram}
          alt="Instagram logo"
          className="w-8 absolute left-4 top-[25%]"
        />
        <p className="text-white absolute top-[30%]">Já me segue no insta?</p>
      </a>
      <a
        ref={buttondRef}
        href="https://wa.me/5582982371442"
        target="_blank"
        className="relative mb-4 flex w-full bg-slate-900 max-w-[680px] h-[60px] rounded-lg shadow border-2 border-slate-900  justify-center align-middle"
      >
        <Image
          src={whatsapp}
          alt="WhastApp logo"
          className="w-8 absolute left-4 top-[25%]"
        />
        <p className="text-white absolute top-[30%]">
          Fale comigo no WhatsApp!
        </p>
      </a>
      <a
        ref={buttoneRef}
        href="mailto:gvbs@ic.ufal.br"
        className="relative mb-8 flex w-full bg-slate-900 max-w-[680px] h-[60px] rounded-lg shadow border-2 border-slate-900  justify-center align-middle"
      >
        <Image
          src={email}
          alt="Email logo"
          className="w-8 absolute left-4 top-[25%]"
        />
        <p className="text-white absolute top-[30%]">
          Entre em contato via Email!
        </p>
      </a>
      <h2 ref={ thanksRef } className="text-white flex align-middle items-center justify-center mb-20">
        Obrigado pela visita
        <span>
          <Image className="w-6 ml-2" src={cowboy} alt="cowboy icon" />
        </span>
      </h2>
    </div>
  );
}
