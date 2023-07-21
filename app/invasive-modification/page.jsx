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
    
    <div class="col-start-1 col-span-4 row-start-1 row-span-6">
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
    
  
    <div class="col-start-4 col-span-7 row-start-2">
      
    <iframe
              ref={videoRef}
              src="https://player.vimeo.com/video/818864881?h=c04dfe0258&autoplay=1&title=0&byline=0&portrait=0&background=1&loop=1"
              className="w-full h-auto md:w-[550px] md:h-[310px] min-[2000px]:w-[700px] min-[2000px]:h-[394px] "
              frameBorder="0"
              allow="autoplay;"
              allowFullScreen
            ></iframe>
    </div>
    
 
    <div class="col-start-1 col-span-2 row-start-3 row-span-3">
    <Image
              alt={`card ${imageIndex + 1}`}
              src={`/images/${imageFiles[imageIndex]}`}
              width={700}
              height={475}
              sizes="100vw"
              onClick={nextImage}
              className=''
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
              }}
            />
    </div>
  </div>
  
  
  );
};

export default Invasive;
