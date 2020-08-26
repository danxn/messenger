import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

import Message from '../Message';
import User from '../User';

import './index.css';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ccc',
    padding: theme.spacing(2),
    height: '100%',
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    overflow: 'hidden',
  },
  grid: {
    height: '99vh',
    minWidth: 900,
  },
  gridSpacer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  gridWrap: { height: '100%' },
  innerGrid: { height: '100%' },
  topRow: { height: 85 },
  midRow: { height: 'calc(100% - 170px)' },
  bottomRow: { height: 85 },
  leftCol: { backgroundColor: '#353b80' },
  rightCol: { backgroundColor: '#fff' },
  topLeftCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topRightCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  midLeftCell: {
    boxShadow: '0px 7px 9px -10px rgba(0,0,0,1) inset',
    overflow: 'scroll',
  },
  midRightCell: {
    boxShadow: '0px 7px 9px -10px rgba(0,0,0,.5) inset',
    overflow: 'scroll',
  },
  bottomLeftCell: { boxShadow: '0px 7px 7px -10px rgba(0,0,0,1) inset' },
  bottomRightCell: {
    boxShadow: '0px 7px 7px -10px rgba(0,0,0,.5) inset',
    backgroundColor: '#f9f9f9',
  },

  header: {
    color: '#000',
    fontWeight: 500,
    marginLeft: theme.spacing(4),
  },

  inputMessage: {
    width: 'calc(100% - ' + theme.spacing(10) + 'px)',
    margin: theme.spacing(1.5, 1, 1.5, 4),
    padding: theme.spacing(1, 2),
    border: '1px solid #ccc',
    resize: 'none',
    borderRadius: 3,
    fontFamily: 'Sans-Serif',
  },
});

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'User1',
      avatar: 'U1',
      messageText: 'Lorem ipsum dolor set amet',
      users: [
        {
          name: 'Friend 1',
          avatar: 'F1',
          selected: true,
          messages: [
            {
              to: 'Friend 1',
              toAvatar: 'F1',
              name: 'User 1',
              avatar: 'U1',
              text: 'Hi there',
              timestamp: 1598439448388,
            },
          ],
        },
        {
          name: 'Friend 2',
          avatar: 'F2',
          selected: false,
          messages: [
            {
              to: 'Friend 1',
              toAvatar: 'F1',
              name: 'User 1',
              avatar: 'U1',
              text: 'Hello',
              timestamp: 1598439492153,
            },
          ],
        },
        {
          name: 'Friend 3',
          avatar: 'F3',
          selected: false,
          messages: [
            {
              to: 'Friend 1',
              toAvatar: 'F1',
              name: 'User 1',
              avatar: 'U1',
              text: 'Hi',
              timestamp: 1598439492153,
            },
          ],
        },
      ],
      activeUserName: 'Friend 1',
      activeUser: {
        name: 'Friend 1',
        avatar: 'F1',
        selected: true,
        messages: [
          {
            to: 'Friend 1',
            toAvatar: 'F1',
            name: 'User 1',
            avatar: 'U1',
            text: 'Hi there',
            timestamp: 1598439448388,
          },
        ],
      },
      progressOn: false,
      connected: false,
    };

    this.wsConnect = this.wsConnect.bind(this);
    this.wsDisconnect = this.wsDisconnect.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.inputMessage = this.inputMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.wsConnect();
    let chat = localStorage.getItem('chat');
    if (chat) {
      console.log('Loading chat history', JSON.parse(chat));
      this.setState(JSON.parse(chat));
    }
  }

  io = null;

  wsConnect() {
    console.log('Connecting to ws://localhost:3001');
    this.io = window['io'].connect('http://localhost:3001');
    this.io.on('connect', () => {
      this.io.emit('user', 'User');
    });
    this.io.on('message', (message) => {
      console.log('[WS MESSAGE]', message);
      // looking for message in local state
      let messageExist = false;
      this.state.users.map((u) => {
        u.messages.map((m) => {
          if (m.timestamp === message.timestamp) messageExist = true;
          return true;
        });
        return true;
      });
      if (!messageExist) {
        let users = this.state.users.slice();
        users.map((u) => {
          if (u.name === message.to) {
            u.messages.push(message);
            this.setState({ users: users });

            if (u.name === this.state.activeUser.name) {
              let aMsgs = this.state.activeUser.messages.slice();
              aMsgs.push(message);
              this.setState({
                activeUser: {
                  ...this.state.activeUser,
                  messages: aMsgs,
                },
              });
            }
          }
          return true;
        });
      }
    });
  }

  wsDisconnect() {
    this.io.close();
  }

  selectUser(user) {
    let users = this.state.users.slice();
    let activeUser = null;
    users.map((u) => {
      if (u.name === user) {
        u.selected = true;
        activeUser = u;
      } else {
        u.selected = false;
      }
      return user;
    });
    this.setState({
      activeUserName: user,
      activeUser: activeUser,
      users: users,
    });
  }

  inputMessage(e) {
    this.setState({ messageText: e.target.value });
  }

  sendMessage(e) {
    if (e.key === 'Enter' && /\S/.test(e.target.value)) {
      e.preventDefault();
      console.log('[SEND MESSAGE]', this.state.messageText);
      let msg = {
        to: this.state.activeUser.name,
        toAvatar: this.state.activeUser.avatar,
        name: this.state.name,
        avatar: this.state.avatar,
        text: e.target.value,
        timestamp: Date.now(),
      };
      let msgs = this.state.activeUser.messages.slice();
      msgs.push(msg);
      let users = this.state.users.slice();
      users.map((u) => {
        if (u.name === this.state.activeUser.name) {
          u.messages = msgs;
        }
        return u;
      });

      this.setState(
        {
          activeUser: {
            messages: msgs,
            name: this.state.activeUser.name,
            avatar: this.state.activeUser.avatar,
          },
          users: users,
        },
        () => {
          this.io.emit('message', msg);
          localStorage.setItem('chat', JSON.stringify(this.state));
        }
      );
    }
  }

  render() {
    const { classes } = this.props;

    const users = this.state.users.map((user) => (
      <User
        key={user.name}
        name={user.name}
        avatar={user.avatar}
        selected={user.selected}
        selectUser={this.selectUser}
      />
    ));

    const messages = this.state.activeUser.messages.map((msg, index) => (
      <Message name={msg.name} avatar={msg.avatar} key={index}>
        {msg.text}
      </Message>
    ));

    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={12} md={12} className={classes.gridWrap}>
            <Paper className={classes.paper}>
              <Grid container spacing={0} className={classes.innerGrid}>
                <Grid
                  item
                  xs={4}
                  md={4}
                  className={`${classes.topRow} ${classes.leftCol} ${classes.topLeftCell}`}
                ></Grid>
                <Grid
                  item
                  xs={8}
                  md={8}
                  className={`${classes.topRow} ${classes.rightCol} ${classes.topRightCell}`}
                >
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.header}
                  >
                    {this.state.activeUserName}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  className={`${classes.midRow} ${classes.leftCol} ${classes.midLeftCell}`}
                >
                  {users}
                </Grid>
                <Grid
                  item
                  xs={8}
                  md={8}
                  className={`${classes.midRow} ${classes.rightCol} ${classes.midRightCell}`}
                >
                  {messages}
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  className={`${classes.bottomRow} ${classes.leftCol} ${classes.bottomLeftCell}`}
                ></Grid>
                <Grid
                  item
                  xs={8}
                  md={8}
                  className={`${classes.bottomRow} ${classes.rightCol} ${classes.bottomRightCell}`}
                >
                  <TextareaAutosize
                    className={classes.inputMessage}
                    rowsMax={3}
                    rowsMin={3}
                    placeholder="type a message"
                    value={this.state.messageText}
                    onChange={this.inputMessage}
                    onKeyPress={this.sendMessage}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Chat);
