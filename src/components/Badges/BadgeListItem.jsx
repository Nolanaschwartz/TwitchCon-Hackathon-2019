import React from "react";
import BadgeIcon from "./BadgeIcon";

function BadgeListItem(props) {
  // TODO: Add styling

  return (
    <li>
      <BadgeIcon iconUrl={props.badge.iconUrl} />
      <p>{props.badge.fullName}</p>
      <p>Earned: {props.badge.eventDate}</p>
    </li>
  );
}

export default BadgeListItem;
