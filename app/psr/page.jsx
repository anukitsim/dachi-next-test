"use client"

import { useEffect } from "react";

const Psr = () => {
  useEffect(() => {
    const audio = new Audio('/audio/psr.mp3');
    audio.play();

    return () => {
     
      audio.pause();
      audio.src = '';
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0  z-10 w-screen h-screen">
         <video
          autoPlay
          loop
          muted
          className="object-contain w-full h-auto lg:mt-[-500px] md:mt-[-500px] xl:mt-[-500px] 2xl:mt-[-500px]"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <source src="/video/gif.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Psr;
