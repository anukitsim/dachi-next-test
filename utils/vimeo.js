// utils/vimeo.js
export function loadVimeoPlayerAPI() {
    return new Promise((resolve) => {
      const existingScript = document.getElementById("vimeo-player-api");
  
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.id = "vimeo-player-api";
        script.onload = () => resolve();
        document.body.appendChild(script);
      } else {
        resolve();
      }
    });
  }
  