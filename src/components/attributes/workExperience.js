import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Fade from 'react-reveal/Fade';
import { workExperience } from '../../config';

const typoStyle = { padding: 0 };

export default ({ classes }) =>
  workExperience.map(
    ({ company, position, start, end, details, link }, index) => (
      <Fade bottom key={index}>
        <a target="blank" href={link}>
          <Paper className={classes.subPaper}>
            <Typography
              className={classes.titleSubA}
              style={typoStyle}
              variant="subheading"
            >{`${position} | ${company}`}</Typography>
            <Typography
              style={typoStyle}
              variant="body1"
            >{`${start} - ${end}`}</Typography>
            <Typography style={typoStyle} align="justify">
              {details}
            </Typography>
          </Paper>
        </a>
      </Fade>
    )
  );
