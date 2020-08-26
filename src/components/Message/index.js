import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './index.css';

const styles = (theme) => ({
  userMessage: {
    padding: theme.spacing(2, 4),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  userMessageAvatar: { marginRight: theme.spacing(2) },
  userMessageContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  userMessageName: { fontWeight: 600 },
  userMessageText: { textAlign: 'left' },
});

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Box component="div" className={classes.userMessage}>
        <Avatar className={classes.userMessageAvatar}>
          {this.props.avatar}
        </Avatar>
        <Box component="div" className={classes.userMessageContent}>
          <Typography component="p" className={classes.userMessageName}>
            {this.props.name}
          </Typography>

          <Typography component="p" className={classes.userMessageText}>
            {this.props.children}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Message);
