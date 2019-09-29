import React from "react";
import BadgeIcon from "./BadgeIcon";

function BadgeListItem(props) {
  const listStyle = {
    listStyleType: "none",
      display: 'flex'
  };

  const iconContainer={
      paddingTop: '25px',
      marginRight: '5%',
      content: 'contain'
  };

  const badgeInfoStyle = {
      borderBottom: 'solid 1px black'
  }

  return (
    <li style={listStyle}>
      <div style={iconContainer}>
        <BadgeIcon badge={props.badge} />
      </div>
      <div style={badgeInfoStyle}>
        <p>{props.badge.fullName}</p>
        <p>Earned: {props.badge.eventDate}</p>
      </div>
    </li>
  );
}

export default BadgeListItem;
