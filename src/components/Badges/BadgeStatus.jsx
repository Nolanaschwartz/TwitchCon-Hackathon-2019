import React from "react";
import BadgeIcon from "./BadgeIcon";

function BadgeStatus(props) {
  return (
    <div>
      <p>
        {props.badgeStatus ? "Active BadgeListItem" : "Earned BadgeListItem"}
      </p>
      <BadgeIcon iconUrl={props.iconUrl} />
    </div>
  );
}

export default BadgeStatus;
