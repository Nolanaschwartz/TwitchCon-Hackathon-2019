import React from "react";
import BadgeIcon from "./BadgeIcon";

function BadgeListItem(props) {
  // TODO: Add styling

  return (
    <li>
      <BadgeIcon />
      <p>{props.achievement}</p>
      <p>Earned: {props.date}</p>
    </li>
  );
}

export default BadgeListItem;
