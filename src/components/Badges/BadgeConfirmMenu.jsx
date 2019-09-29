import React from "react";
import BadgeIcon from "./BadgeIcon";
import Button from "@material-ui/core/Button";

// TODO Handle MouseEvents

function BadgeConfirmMenu(props) {
  return (
    <div>
      <h3>{props.badge.fullname}</h3>
      <BadgeIcon badge={props.badge} />
      <Button>Cancel</Button>
      <Button onClick={props.Action}>{props.actionText}</Button>
    </div>
  );
}

export default BadgeConfirmMenu;
