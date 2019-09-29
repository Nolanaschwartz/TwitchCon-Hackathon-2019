import React from "react";
import BadgeIcon from "../Badges/BadgeIcon";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  card: {
    minWidth: 200,

  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 15,
  },
});
// activate button should route to Confirm Menu

function BadgeStatus(props) {
  let button =
    !props.badge.active && props.badge.awarded ? (
      <button>activate</button>
    ) : (
        <span>active</span>
      );

  if (!props.badge.awarded) {
    button = null;
  }

  return (
    <div>

      <Card className={useStyles.card}>
        <CardContent>
          <Typography component="h1" className={useStyles.title} color="textSecondary" gutterBottom>
            <h4 style={{ color: 'black', fontWeight: "bold" }}> {props.badge.active ? "Active Badge\n" : "Earning Badge"}</h4>
          </Typography>

          <center>
            <BadgeIcon badge={props.badge} />
            <p>{props.badge.name}</p>
          </center>

          {button}
        </CardContent>

      </Card>

    </div>
  );
}

export default BadgeStatus;
