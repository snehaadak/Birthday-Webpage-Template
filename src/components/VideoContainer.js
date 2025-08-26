import React from "react";
import birthdayvideo from '../utils/birthday-video.mp4';

export default function VideoContainer() {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
      <video
        src={birthdayvideo} 
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}