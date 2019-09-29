import React from "react";

function VideoPlayer(props) {
  return (
    <>
      <iframe
        src={props.badge.clipUrl}
        width="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen="false"
      />
    </>
  );
}

export default VideoPlayer;
