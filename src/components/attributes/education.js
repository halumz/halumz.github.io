import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Fade from 'react-reveal/Fade';
import { education } from '../../config';

const typoStyle = { padding: 0 };

export default ({ classes }) =>
  education.map(({ xm, period, result, institution }, index) => (
    <Fade bottom key={index}>
      <Paper className={classes.subPaper}>
        <Typography
          className={classes.titleSubA}
          style={typoStyle}
          variant="subheading"
        >{`${xm} | ${institution}`}</Typography>
        <Typography
          style={typoStyle}
          variant="body1"
        >{`${period} - ${result}`}</Typography>
      </Paper>
    </Fade>
  ));
