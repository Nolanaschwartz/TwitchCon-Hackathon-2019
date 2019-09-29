import React from "react";
import BadgeIcon from "./BadgeIcon";
import Button from "@material-ui/core/Button";

function BadgeConfirmMenu(props) {
  return (
    <div>
      <h3>{props.headingText}</h3>
      <BadgeIcon />
      <Button>Cancel</Button>
      <Button onClick={props.Action}>{props.actionText}</Button>
    </div>
  );
}

export default BadgeConfirmMenu;
