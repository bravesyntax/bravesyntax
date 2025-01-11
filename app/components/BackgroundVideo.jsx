import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
