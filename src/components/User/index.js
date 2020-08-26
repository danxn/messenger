import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './index.css';

const styles = (theme) => ({
  userItem: {
    padding: theme.spacing(2, 4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  userItemAvatar: { marginRight: theme.spacing(2) },
  userItemName: { color: '#fff', fontWeight: 600 },
  userSelected: { backgroundColor: '#2a3065' },
});

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.selectUser = this.selectUser.bind(this);
  }

  selectUser(e) {
    this.props.selectUser(this.props.name);
  }

  render() {
    const { classes } = this.props;

    return (
      <Box
        component="div"
        className={`${classes.userItem} ${
          this.props.selected ? classes.userSelected : ''
        }`}
        onClick={this.selectUser}
      >
        <Avatar className={classes.userItemAvatar}>{this.props.avatar}</Avatar>
        <Typography component="p" className={classes.userItemName}>
          {this.props.name}
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(User);
