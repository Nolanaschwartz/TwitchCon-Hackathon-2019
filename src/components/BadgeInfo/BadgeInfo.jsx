import React from "react";
import VideoPlayer from "./VideoPlayer";
import BadgeStatus from "./BadgeStatus";

// Data needed Data/Time, Title, and info
function BadgeInfo(props) {
  // TODO Styling
  return (
    <>
      <VideoPlayer clipUrl={props.badge.clipUrl + "&autoplay=false"} />
      <BadgeStatus badge={props.badge} />
      <div>
        <span>{props.badge.eventDate}</span>
        <h1>{props.badge.name}</h1>
        <p>{props.badge.description}</p>
      </div>
    </>
  );
}

export default BadgeInfo;
