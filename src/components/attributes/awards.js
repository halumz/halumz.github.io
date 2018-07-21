import React from 'react';
import Typography from 'material-ui/Typography';
import Fade from 'react-reveal/Fade';
import { awards } from '../../config';

export default ({ classes }) =>
  awards.map(({ txt }, index) => (
    <Fade bottom key={index}>
      <Typography className={classes.aboutMe} align="justify">
        {' -> '}
        {txt}
      </Typography>
    </Fade>
  ));
