"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Invasive = () => {
  const videoRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

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
    <div class="grid grid-cols-6 grid-rows-4">
      <div class="relative col-start-1 col-span-4 row-start-1 row-span-6 min-[2000px]:col-start-1 min-[2000px]:col-span-5 min-[1900px]:col-start-1 min-[1900px]:col-span-5">
        <h2 className="absolute top-28 left-14 z-50 text-[#484848] font-MPlus1 font-thin tracking-wider w-6/12  text-lg leading-6 min-[1900px]:w-4/12">
          Set Design for the Georgian footwear brand Invasive Modifications
        </h2>
        <Image
          src="/images/1.jpg"
          alt="invasive-1"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div class="relative col-start-4 col-span-7 row-start-2 min-[2000px]:col-start-5 min-[2000px]:col-span-8 min-[2000px]:row-start-3 min-[1900px]:col-start-4 min-[1900px]:col-span-6 min-[1900px]:row-start-2 min-[1900px]:self-end z-50 min-[1800px]:col-start-4 min-[1800px]:col-span-6">
        <h2 className="absolute top-[-100px] left-16 text-right z-50 text-[#484848] font-MPlus1 font-thin tracking-wider w-10/12  text-lg leading-6 min-[1900px]:left-56 min-[1900px]:w-8/12">
          Translating language at the core of brands world through artefacts
          within the current realm
        </h2>
        <iframe
          ref={videoRef}
          src="https://player.vimeo.com/video/818864881?h=c04dfe0258&autoplay=1&title=0&byline=0&portrait=0&background=1&loop=1"
          className="w-full h-auto md:w-[550px] md:h-[310px] min-[2000px]:w-[800px] min-[2000px]:h-[450px] min-[1900px]:w-[750px] min-[1900px]:h-[422px] min-[1800px]:w-[700px] min-[1800px]:h-[394px] min-[1800px]:ml-[-30px] min-[1700px]:w-[680px] min-[1700px]:h-[383px] min-[1700px]:ml-[-50px]  min-[1600px]:w-[630px] min-[1600px]:h-[355px] min-[1600px]:ml-[-50px]"
          frameBorder="0"
          allow="autoplay;"
          allowFullScreen
        ></iframe>
      </div>

      <div class="col-start-1 col-span-2 row-start-3 row-span-3 z-50 min-[1900px]:row-start-3 min-[1900px]:mt-40">
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

        <div className="flex justify-center space-x-4 mt-4">
          {imageFiles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 rounded-full ${
                imageIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div class="ml-5 col-start-3 col-span-4 row-start-3 self-center row-span-2 z-50  text-[#484848] font-MPlus1 font-thin tracking-wider w-10/12  text-base leading-6 pt-20 min-[1900px]:pt-96">
        <p>
          Photography:
          <br />
          <span>Giorgi Nakashidze</span>
          <br />
          <span>Ika Khargelia</span>
          <br />
          <span>Luka Pantskhava</span>
          <br />
          <br />
          <span>Prop Assistant:</span>
          <br />
          <span>Polina Zhuravkova</span>
          <br />
          <br />
          <span>Invasive Modification:</span>
          <br />
          <span>Nicolas Grigorian</span>
          <br />
          <span>Nina Ivanovna</span>
        </p>
      </div>
    </div>
  );
};

export default Invasive;
