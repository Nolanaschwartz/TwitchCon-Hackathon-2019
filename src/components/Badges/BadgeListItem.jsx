import React from "react";
import BadgeIcon from "./BadgeIcon";

function BadgeListItem(props) {
  // TODO: Add styling

  return (
    <li>
      <BadgeIcon iconUrl={props.badge.iconUrl} />
      <p>{props.badge.fullname}</p>
      <p>Earned: {props.badge.date}</p>
    </li>
  );
}

export default BadgeListItem;
