import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Pulse from 'react-reveal/Pulse';
import { myself } from '../config';
// profession: 'Software Engineer',
// address: 'Flat-5b, 85B/12A, Dhanmondi,Dhaka, BANGLADESH',
// phone: '+880 17266 34711',
// email: 'mashuksadman@gmail.com'
export default ({ classes }) => {
  return (
    <Pulse>
      <Paper className={classes.title}>
        <Typography
          className={classes.titleHead}
          variant="title"
          component="h3"
          align="center"
        >
          {myself.name}
        </Typography>
        <Typography component="p" align="center" className={classes.titleSub}>
          {myself.profession}
        </Typography>
        <Typography component="p" className={classes.titleSub} align="center">
          <a
            className={classes.titleSubA}
            style={{ padding: 5 }}
            target="blank"
            href={`mailto:${myself.email}`}
          >
            {myself.email}
          </a>
          {'||'}
          <a
            className={classes.titleSubA}
            style={{ padding: 5 }}
            target="blank"
            href={`tel:${myself.phone.replace(' ', '')}`}
          >
            {myself.phone}
          </a>
        </Typography>
        {/* <Typography component="p" align="center" className={classes.titleSub}>
          {myself.address}
        </Typography> */}
      </Paper>
    </Pulse>
  );
};
