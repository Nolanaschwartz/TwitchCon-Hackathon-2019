import React from "react";
import BadgeIcon from "./BadgeIcon";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

function BadgeListItem(props) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Card>
        <CardHeader
          avatar={<BadgeIcon badge={props.badge} />}
          title={props.badge.fullName}
          subheader={props.badge.eventDate}
          onClick={() => props.handleBadgeClick(props.badge)}
        />
      </Card>
    </div>
  );
}

export default BadgeListItem;
