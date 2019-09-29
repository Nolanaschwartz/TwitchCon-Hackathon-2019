import React from "react";
import BadgeIcon from "./BadgeIcon";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
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

  return (
    <Card className={useStyles.card}>
          <CardHeader
         avatar={
          <BadgeIcon badge={props.badge} />
        }
        title={props.badge.fullName}
        subheader= {props.badge.eventDate}
      />
  </Card>
   
  );
}

export default BadgeListItem;
