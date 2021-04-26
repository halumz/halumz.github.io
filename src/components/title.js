import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Pulse from 'react-reveal/Pulse';
import { myself } from '../config';

export default ({ classes }) => {
  return (
    <Pulse>
      <Paper className={classes.title}>
        <Typography
          className={`${classes.titleHead} titleHead`}
          variant="title"
          component="h1"
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
      </Paper>
    </Pulse>
  );
};
