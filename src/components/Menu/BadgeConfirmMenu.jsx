import React from "react";
import BadgeIcon from "../Badges/BadgeIcon";
import Button from "@material-ui/core/Button";

// route: /confirm/earn-badge/:id
// route: /confirm/change-badge/:id

// TODO Handle MouseEvents to disable old badge and enable new badge
// TODO after POST request redirect to
// TODO GetCurrentBadge

function BadgeConfirmMenu(props) {
  return (
    <div>
      <h3>{props.badge.fullName}</h3>
      <BadgeIcon badge={props.badge} />
      <Button>Cancel</Button>
      <Button onClick={props.action}>{props.actionText}</Button>
    </div>
  );
}

export default BadgeConfirmMenu;
