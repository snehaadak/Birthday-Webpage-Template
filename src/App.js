import React from "react";
import VideoContainer from "./components/VideoContainer";
import PictureGrid from "./components/PictureGrid";
import CardSlider from "./components/CardSlider";
import MailPopup from "./components/MailPopup";

export default function App() {
  return (
    <div className="max-w-md w-full mx-auto p-4 flex flex-col gap-6">
      <VideoContainer />
      <CardSlider />
      <PictureGrid />
      <MailPopup />
    </div>
  );
}