import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

// Data needed Data/Time, Title, and info
function BadgeInfo(props) {
  // TODO Styling
  return (
    <>
      <VideoPlayer clipUrl={props.clipUrl} />
      <div>
        <span>{props.date}</span>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default BadgeInfo;
