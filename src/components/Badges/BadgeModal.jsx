import React from "react";
import Button from "@material-ui/core/Button";

function BadgeModal(props) {
  return (
    <>
      <BadgeIcon />
      <h3>{props.header | "placeholder header"}</h3>
      <p>{props.message | "placeholder"}</p>
      <Button variant={"text"}>{props.action | "Button"}</Button>
    </>
  );
}

export default BadgeModal;
