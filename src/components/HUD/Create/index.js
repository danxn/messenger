import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Animate from './animation';

import './index.css';

const styles = (theme) => ({
  root: {
    position: 'relative',
    width: 170,
    height: 170,
    margin: '10px auto',
    '& canvas': {
      position: 'absolute',
      top: 0,
      left: 0,
      border: '0px dotted white',
    },
  },
  framed: { border: '1px dotted white!important' },
  widgetExpanded: false,
});

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = { completed: false };

    this.r = {};
    this.cj = window['createjs'];
    this.c = {};

    this.createAnimation = Animate.createAnimation.bind(this);
    this.startAnimation = Animate.startAnimation.bind(this);
  }

  componentDidMount() {
    console.log('[CREATE JS] Loading...', this.cj);
    this.createAnimation();
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  render() {
    return (
      <div>
        <canvas
          id="demoCanvas"
          width="700"
          height="200"
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            border: '0px dotted #fff',
            margin: '25px auto',
            display: 'block',
            backgroundColor: 'rgba(225,225,225, 1)',
            boxShadow: '1px 1px 5px rgba(0,0,0,.8)',
          }}
          onClick={() => {
            if (this.state.completed) {
              this.createAnimation();
              this.setState({ completed: false }, () => {
                this.delay(1000).then(() => {
                  this.startAnimation();
                });
              });
            } else {
              this.delay(1000).then(() => {
                this.startAnimation();
              });
            }
          }}
        ></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
