import React from 'react';
import SocialLogo from 'social-logos';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import { externalLinks } from '../../config';

export default ({ classes }) => (
  <div className={classes.externalLinks}>
    {externalLinks.map(({ value, imageLink, url }, index) => (
      <Fade left key={index}>
        <a href={url} target="blank">
          <Button
            variant="fab"
            aria-label="add"
            size="medium"
            style={{ margin: '5px', padding: '5px' }}
          >
            {imageLink ? (
              <img alt="#" style={{ width: 38, height: 38 }} src={imageLink} />
            ) : (
              <SocialLogo icon={value} size={48} />
            )}
          </Button>
        </a>
      </Fade>
    ))}
  </div>
);
