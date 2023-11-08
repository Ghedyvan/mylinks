'use client'

import backgroundVideo from "../../assets/background2.mp4";

export default function Background() {
  return (
    <div className="w-full h-screen z-[-1] absolute">
      <video autoPlay loop muted className="object-cover w-full h-full">
        <source src={backgroundVideo} alt="Video background" type="video/mp4" />
      </video>
    </div>
  );
}
