import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { aboutMe } from '../../config';

export default ({ classes }) =>
  aboutMe.map(({ txt }, index) => (
    <Fade bottom key={index}>
      <Typography className={`${classes.aboutMe} aboutMe`} align="justify">
        {txt}
      </Typography>
    </Fade>
  ));
