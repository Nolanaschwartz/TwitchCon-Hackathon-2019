import React from "react";

function VideoPlayer(props) {
  return (
    <>
      <iframe
        title={props.badge.clipUrl}
        aria-hidden={true}
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
