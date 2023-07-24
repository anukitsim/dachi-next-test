"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("./loading"), { ssr: false });

const Invasive = () => {
  const videoRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const imageFiles = [
    "card1.jpg",
    "card2.jpg",
    "card3.jpg",
    "card4.jpg",
    "card5.jpg",
    "card6.jpg",
    "card7.jpg",
    "card8.jpg",
    "card9.jpg",
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  // function to go to the next image
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
  };

  // function to go to a specific image
  const goToImage = (index) => {
    setImageIndex(index);
  };

  return (
    <div className="grid grid-cols-12 grid-rows-4 max-[900px]:flex max-[900px]:flex-col max-[900px]:gap-3">
      <div className="col-start-1 row-start-1 row-span-3 col-span-8 grid">
        <h1 className="col-start-1 row-start-1 text-[#484848] w-6/12 font-MPlus1 font-thin tracking-normal text-lg leading-6 z-50">
          Set Design for the Georgian footwear brand Invasive Modifications
        </h1>
        <Image
          src="/images/1.jpg"
          alt="invasive-1"
          width={700}
          height={475}
          sizes="100vw"
          className="col-start-1 row-start-1"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <h1 className="col-start-7 row-start-1 col-span-5 self-center  text-[#484848] font-MPlus1 font-thin tracking-normal text-lg leading-6">
        {" "}
        Translating language at the core of brands world through artefacts
        within the current realm
      </h1>
      <div className="text-white col-start-7 row-start-2 col-span-5 row-span-1">
        <iframe
          ref={videoRef}
          frameBorder="0"
          allow="autoplay;"
          allowFullScreen
          src="https://player.vimeo.com/video/818864881?h=c04dfe0258&autoplay=1&title=0&byline=0&portrait=0&background=1&loop=1"
          frameborder="0"
          style={{ border: "0", width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <div className="col-start-1 col-span-4 row-start-2 self-center row-span-3 z-50">
      <Image
          alt={`card ${imageIndex + 1}`}
          src={`/images/${imageFiles[imageIndex]}`}
          width={700}
          height={475}
          sizes="100vw"
          onClick={nextImage}
          className=""
          style={{
            width: "100%",
            height: "auto",
            cursor: "pointer",
          }}
        />
        <div className="flex gap-2 mt-2">
        {imageFiles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2  rounded-full ${
                imageIndex === index ? "bg-gray-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
          
      </div>
    </div>
  );
};

export default Invasive;
