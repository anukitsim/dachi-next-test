"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("./loading"), { ssr: false });

export default function VideoPlayer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <iframe
            src="https://player.vimeo.com/video/818803846?h=fbe9aa7dd8&title=0&byline=0&portrait=0"
            className="aspect-video w-full h-full"
            frameBorder="0"
            allow="autoplay;  fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="flex justify-between">
            <p className="caption-bottom text-xs font-MPlus1 text-[#484848] font-normal">
              Animated and Produced for
            </p>
            <p className="caption-bottom text-xs font-MPlus1 text-[#484848] font-normal text-right mb-7">
              <a
                href="https://www.youtube.com/watch?v=lBEGDRO8N2g"
                target="_blank"
              >
                Steps ft. MNEK & Saul Williams
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
