import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import { skills } from '../../config';

export default ({ classes }) =>
  skills.map(({ title, options }, index) => (
    <Fade bottom key={index}>
      <Typography
        variant="subheading"
        className={classes.aboutMe}
        align="justify"
      >
        <span
          style={{ fontWeight: 'bold', paddingRight: 5 }}
        >{`${title} : `}</span>
        <span>{options.join(', ')}</span>
      </Typography>
    </Fade>
  ));
