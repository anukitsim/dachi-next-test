// components/InvasivePlayer.jsx
import { useEffect, useRef } from "react";
import { loadVimeoPlayerAPI } from "../utils/vimeo";

const InvasivePlayer = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let player;
    const initPlayer = async () => {
      await loadVimeoPlayerAPI();
      player = new Vimeo.Player(videoRef.current, {
        id: videoId,
        autoplay: true,
        background: true,
        loop: true,
        muted: true,
      });
    };

    initPlayer();

    return () => {
      if (player) {
        player.destroy().catch((error) => console.error("Player destroy error:", error));
      }
    };
  }, [videoId]);

  return <div ref={videoRef} />;
};

export default InvasivePlayer;
