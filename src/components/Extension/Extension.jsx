import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import BadgesOverview from "../Badges/BadgesOverview";

function Extension(props) {
  return (
    <>
      <VideoPlayer />
      <BadgesOverview />
    </>
  );
}

export default Extension;
