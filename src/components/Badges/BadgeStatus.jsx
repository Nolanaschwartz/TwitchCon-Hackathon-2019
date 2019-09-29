import React from "react";
import BadgeIcon from "./BadgeIcon";

function BadgeStatus(props) {
  let button =
    !props.active && props.awarded ? (
      <button>activate</button>
    ) : (
      <span>active</span>
    );

  if (!props.awarded) {
    button = null;
  }

  return (
    <div>
      <p>{props.active ? "Active Badge" : "Earning Badge"}</p>
      <BadgeIcon iconUrl={props.iconUrl} />
      <p>{props.name}</p>
      {button}
    </div>
  );
}

export default BadgeStatus;
