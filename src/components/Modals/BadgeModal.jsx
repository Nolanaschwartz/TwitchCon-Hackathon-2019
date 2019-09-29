import React from "react";
import Button from "@material-ui/core/Button";
import BadgeIcon from "../Badges/BadgeIcon";

// Pass props in onClick
function BadgeModal(props) {

    const containerStyle = {
        margin: '10%',
        textAlign: 'center',
        boxShadow: '0px 0px 31px rgba(0,0,0,0.4);'
    };

  return (
    <div style={containerStyle}>
      <BadgeIcon badge={props.badge} />
      <h3>{props.header || "placeholder header"}</h3>
      <p>{props.message || "placeholder"}</p>
      <Button color='#6478D3' variant={"text"}>{props.action || "Button"}</Button>
    </div>
  );
}

export default BadgeModal;
