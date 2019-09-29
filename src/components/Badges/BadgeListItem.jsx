import React from "react";
import BadgeIcon from "./BadgeIcon";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  card: {
    minWidth: 200,

  },

  title: {
    fontSize: 12,

  },
  pos: {
 
  },
});
// activate button should route to Confirm Menu



function BadgeListItem(props) {
  // TODO: Add styling

  return (


    <Card className={useStyles.card}>
    <CardContent>
      <Typography className={useStyles.title} variant="headline" color="textSecondary" gutterBottom>
      <BadgeIcon badge={props.badge} />
      <h4 style={{ color: 'black', fontWeight: "bold" }}>  {props.badge.fullName}</h4>   
      </Typography>
      <Typography variant="body2" component="p">
      Earned: {props.badge.eventDate}
        </Typography>
    </CardContent>

  </Card>
   
  );
}

export default BadgeListItem;
