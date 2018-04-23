import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Fade from 'react-reveal/Fade';
import { portfolio } from '../../config';

const typoStyle = { padding: 0 };

export default ({ classes }) =>
  portfolio.map(({ name, creator, desc, link }, index) => (
    <Fade bottom key={index}>
      <a target="blank" href={link}>
        <Paper className={classes.subPaper}>
          <Typography variant="subheading" style={typoStyle}>
            {name}
            {creator && (
              <span style={{ paddingRight: 5 }}>{` (${creator})`}</span>
            )}
          </Typography>
          <Typography align="justify" style={typoStyle}>
            {desc}
          </Typography>
        </Paper>
      </a>
    </Fade>
  ));
