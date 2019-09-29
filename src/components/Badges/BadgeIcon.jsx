import React from "react";

function BadgeIcon(props) {
  // place styling here
  const styling = {
    height: "30px",
    width: "30px",
    filter: props.awarded ? null : "grayscale(1)"
  };

  return <img src={props.iconUrl} alt={props.iconUrl} style={styling} />;
}

export default BadgeIcon;
