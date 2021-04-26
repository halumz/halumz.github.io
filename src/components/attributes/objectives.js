import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { objectives } from '../../config';

export default ({ classes }) =>
  objectives.map(({ txt }, index) => (
    <Fade bottom key={index}>
      <Typography className={classes.aboutMe} align="justify">
        {txt}
      </Typography>
    </Fade>
  ));
