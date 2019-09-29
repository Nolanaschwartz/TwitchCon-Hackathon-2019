import React from "react";
import BadgeIcon from "../Badges/BadgeIcon";

// activate button should route to Confirm Menu

function BadgeStatus(props) {
  let button =
    !props.badge.active && props.badge.awarded ? (
      <button>activate</button>
    ) : (
      <span>active</span>
    );

  if (!props.badge.awarded) {
    button = null;
  }

  return (
    <div>
      <p>{props.badge.active ? "Active Badge" : "Earning Badge"}</p>
      <BadgeIcon badge={props.badge} />
      <p>{props.badge.name}</p>
      {button}
    </div>
  );
}

export default BadgeStatus;
