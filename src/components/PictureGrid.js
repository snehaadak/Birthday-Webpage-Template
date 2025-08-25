import React from "react";
import photo1 from "../utils/photo1.jpg";
import photo2 from "../utils/photo2.jpg";

export default function PictureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="aspect-square rounded-xl overflow-hidden shadow-md">
        <img
          src={photo1}
          alt="Memory 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-md">
        <img
          src={photo2}
          alt="Memory 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}