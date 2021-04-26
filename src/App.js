import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Sticky, StickyContainer } from 'react-sticky';
import appStyles from './appStyle';
import DownloadPdf from './components/downloadPdf';
import Attribute from './components/attribute';
import Title from './components/title';
import { mainAttributes } from './config';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <StickyContainer className="app-sticky-container">
          <Title classes={classes} />
          {mainAttributes.map(attribute => (
            <Attribute {...attribute} key={attribute.value} classes={classes} />
          ))}
          <Sticky relative>
            {({ style }) => <DownloadPdf classes={classes} style={style} />}
          </Sticky>
        </StickyContainer>
      </div>
    );
  }
}
export default withStyles(appStyles)(App);
