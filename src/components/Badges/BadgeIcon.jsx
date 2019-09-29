import React from "react";

function BadgeIcon(props) {
  // place styling here
  const styling = {
    height: "30px",
    width: "30px",
    filter: props.badge.awarded ? null : "grayscale(1)"
  };

  return <img src={props.badge.iconUrl} alt={props.badge.iconUrl} style={styling} />;
}

export default BadgeIcon;
