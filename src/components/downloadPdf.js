import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const downloadLink =
  'https://github.com/halumz/halumz.github.io/raw/tcaer/src/pdf/mashuk_sadman.pdf';

export default ({ classes }) => (
  <a
    href={downloadLink}
    download
    target="blank"
    className={`${classes.downloadPdf} downloadPdf`}
  >
    <Icon>assignment_returned</Icon>
  </a>
);
