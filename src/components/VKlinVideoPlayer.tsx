"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VKlinVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch((err) => {
        console.error("Video play error:", err);
      });
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="hp-vklin-video-wrapper hp-reveal-scale">
      <div className="hp-vklin-video-frame">
        <video
          ref={videoRef}
          src="/images/home/v-clean.mp4"
          className="hp-vklin-video-element"
          controls
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <button
            type="button"
            className="hp-vklin-video-play-btn"
            onClick={togglePlay}
            aria-label="Play V-Klin promotional video"
          >
            <span className="hp-vklin-play-circle">
              <Play size={30} className="hp-vklin-play-icon" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
