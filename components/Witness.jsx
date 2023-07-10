"use client"

import { useEffect, useState } from 'react';

const Witness = ({ videoUrl }) => {
  const [embedUrl, setEmbedUrl] = useState(null);

  useEffect(() => {
    const fetchEmbedData = async () => {
        try {
          const response = await fetch('/api/thewitness', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: videoUrl }),
          });
      
          const data = await response.json();
          const { html } = data;
      
          setEmbedHtml(html);
        } catch (error) {
          console.error('Error fetching Vimeo video:', error);
        }
      };
      
    fetchEmbedData();
  }, [videoUrl]);

  return (
    <div className="w-full h-0 pb-[56.25%] relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: "scale(1)", paddingBottom: "56.25%" }}
      >
        {embedUrl && (
          <iframe
            src={embedUrl}
            title="Vimeo Video"
            allow="autoplay; fullscreen"
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </div>
  );
};

export default Witness;
