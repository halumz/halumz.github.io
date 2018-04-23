import React from 'react';
import SocialLogo from 'social-logos';
import Fade from 'react-reveal/Fade';
import Button from 'material-ui/Button';
import { externalLinks } from '../../config';

export default ({ classes }) => (
  <div className={classes.externalLinks}>
    {externalLinks.map(({ value, url }, index) => (
      <Fade left key={index}>
        <a href={url} target="blank">
          <Button
            variant="fab"
            aria-label="add"
            size="medium"
            style={{ margin: '5px', padding: '5px' }}
          >
            <SocialLogo icon={value} size={48} />
          </Button>
        </a>
      </Fade>
    ))}
  </div>
);
