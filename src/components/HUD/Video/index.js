import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Animate from './animation';
import pipeVideo from './water_pipes_240.mp4';

import './index.css';

const styles = (theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: 250,
    margin: '10px auto',
  },
  framed: { border: '1px dotted white!important' },
  widgetExpanded: false,
});

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = { completed: false };

    this.r = {};
    this.cj = window['createjs'];
    this.fx = window['fx'];
    this.c = {};

    this.createAnimation = Animate.createAnimation.bind(this);
    this.startAnimation = Animate.startAnimation.bind(this);
    this.setupVideoFilter = this.setupVideoFilter.bind(this);
  }

  componentDidMount() {
    console.log('[CREATE JS] Loading...', this.cj);
    this.setupVideoFilter();
  }

  setupVideoFilter() {
    var ctx = this.r.videoCanvas.getContext('2d');
    var that = this;

    this.r.video.addEventListener(
      'play',
      function () {
        var $this = this; //cache
        var saturate = 100;
        (function loop() {
          if (!$this.paused && !$this.ended) {
            ctx.drawImage($this, 0, 0);
            if (saturate === 100) {
              that.createAnimation();
              that.startAnimation();
            }
            if (saturate > 20) saturate -= 4;
            ctx.filter = 'saturate(' + saturate + '%)';
            setTimeout(loop, 1000 / 30); // drawing at 30fps
          }
        })();
      },
      0
    );
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <video
          id="video"
          src={pipeVideo}
          controls={true}
          style={{
            position: 'absolute',
            top: 20,
            left: 32,
            boxShadow: '1px 1px 5px rgba(0,0,0,.8)',
          }}
          ref={(video) => {
            this.r.video = video;
          }}
        ></video>

        <canvas
          id="demoCanvasVideo"
          width="426"
          height="240"
          style={{
            position: 'absolute',
            top: 20,
            left: 500,
            border: '0px dotted #fff',
            margin: '0',
            display: 'block',
            backgroundColor: 'rgba(225,225,225, 1)',
            boxShadow: '1px 1px 5px rgba(0,0,0,.8)',
          }}
          ref={(canvas) => {
            this.r.videoCanvas = canvas;
          }}
        ></canvas>
        <canvas
          id="demoCanvasSchema"
          width="426"
          height="240"
          style={{
            position: 'absolute',
            top: 20,
            left: 500,
            border: '0px dotted #fff',
            margin: '0',
            display: 'block',
            backgroundColor: 'rgba(0,0,0, .3)',
            boxShadow: '1px 1px 50px rgba(0,0,0,.55) inset',
          }}
          ref={(canvas) => {
            this.r.schemaCanvas = canvas;
          }}
        ></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Video);
