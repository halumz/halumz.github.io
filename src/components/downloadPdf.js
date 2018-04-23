import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const downloadLink =
  'https://github.com/halumz/halumz.github.io/raw/tcaer/src/pdf/mashuk_sadman.pdf';

export default class extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <a href={downloadLink} download target="blank">
          <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            size="small"
            style={{ padding: 0, background: '/logo.jpg' }}
            className={classes.downloadPdf}
          >
            <Icon>assignment_returned</Icon>
          </Button>
        </a>
      </div>
    );
  }
}
