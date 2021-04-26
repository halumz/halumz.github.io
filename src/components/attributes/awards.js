import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { awards } from '../../config';

export default ({ classes }) =>
  awards.map(({ txt }, index) => (
    <Fade bottom key={index}>
      <Typography className={`${classes.aboutMe} aboutMe`} align="justify">
        <span style={{ fontWeight: 'bold' }}>&#8226;</span> {txt}
      </Typography>
    </Fade>
  ));
