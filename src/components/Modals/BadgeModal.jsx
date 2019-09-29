import React from "react";
import Button from "@material-ui/core/Button";
import BadgeIcon from "../Badges/BadgeIcon";

// Pass props in onClick
function BadgeModal(props) {
  return (
    <div style>
      <BadgeIcon badge={props.badge} />
      <h3>{props.header | "placeholder header"}</h3>
      <p>{props.message | "placeholder"}</p>
      <Button variant={"text"}>{props.action | "Button"}</Button>
    </div>
  );
}

export default BadgeModal;
