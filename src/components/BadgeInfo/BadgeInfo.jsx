import React from "react";

// Data needed Data/Time, Title, and info
function BadgeInfo(props) {
  return (
    <div>
      <span>{props.date}</span>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default BadgeInfo;
