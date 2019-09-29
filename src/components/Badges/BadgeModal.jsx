import React from "react";
import Button from "@material-ui/core/Button";
import BadgeIcon from "./BadgeIcon";

function BadgeModal(props) {
  return (
    <>
      <BadgeIcon badge={props.badge}/>
      <h3>{props.header | "placeholder header"}</h3>
      <p>{props.message | "placeholder"}</p>
      <Button variant={"text"}>{props.action | "Button"}</Button>
    </>
  );
}

export default BadgeModal;
