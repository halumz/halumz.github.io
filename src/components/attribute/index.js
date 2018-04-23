import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import attributes from '../attributes';

export default ({ title, value, classes }) => {
  const Attribute = attributes[value] || 'div';
  return (
    <Paper
      className={classes.papper}
      elevation={4}
      style={{ margin: '2vw', padding: 0, paddingBottom: 10 }}
    >
      <Paper
        className={classes.papperHeader}
        style={{
          padding: 0,
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 10
        }}
      >
        <Typography variant="headline" component="h5">
          {title}
        </Typography>
      </Paper>
      <div className={classes.attributeBody} style={{ padding: 0 }}>
        <Attribute classes={classes} />
      </div>
    </Paper>
  );
};
