import React from "react";
import BadgeIcon from "../Badges/BadgeIcon";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
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
      <Button variant="contained" color="primary" className={useStyles.button}>
        activate
      {/* This Button uses a Font Icon, see the installation instructions in the docs. */}

      </Button>
    ) : (
        <Button variant="contained" color="secondary" className={useStyles.button}>
          active
    </Button>
      );

  if (!props.badge.awarded) {
    button = null;
  }

  return (
    <div>

      <Card className={useStyles.card}>
        <CardHeader
          title={props.badge.active ? "Active Badge" : "Earning Badge"}
        />

        <CardContent>

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
