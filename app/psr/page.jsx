"use client"

import { useEffect } from "react";

const Psr = () => {
  useEffect(() => {
    const audio = new Audio('/audio/psr.mp3');
    audio.play();

    return () => {
      // Cleanup: Pause and remove the audio element
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
          className="object-cover w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <source src="/video/gif.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Psr;
