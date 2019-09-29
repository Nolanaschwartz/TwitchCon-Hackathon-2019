import React from "react";
import BadgeListItem from "./BadgeListItem";
import Button from "@material-ui/core/Button";

function BadgeModal(props) {
  return (
    <>
      <BadgeListItem />
      <h3>{props.header | "placeholder header"}</h3>
      <p>{props.message | "placeholder"}</p>
      <Button variant={"text"}>{props.action | "Button"}</Button>
    </>
  );
}

export default BadgeModal;
