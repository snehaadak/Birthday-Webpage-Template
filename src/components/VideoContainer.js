import React from "react";
import birthdayVideo from "../utils/birthday-video.mp4";

export default function VideoContainer() {
  return (
    <div className="w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
      <video
        src={birthdayVideo}
        controls
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
}