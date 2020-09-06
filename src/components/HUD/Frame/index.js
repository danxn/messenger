import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Animate from './Animate';

import beep from '../beep-attention.mp3';
import beep2 from '../xns60z_ui-137.wav';
import beep3 from '../kbryjr_ui-130.wav';

const styles = (theme) => ({
  root: {
    textAlign: 'left',
    // '& svg': { border: '1px dotted #aaa' },
  },
});

class Vector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'User1',
    };

    let setup = {
      repeat: 0,
      yoyo: false,
      repeatDelay: 2,
      delay: 3,
      paused: true,
      defaults: { duration: 1 },
    };

    this.tl = window.gsap.timeline({ ...setup, delay: 0, repeatDelay: 0.5 });
    this.tl2 = window.gsap.timeline({ ...setup });
    this.s = window.gsap.timeline({ ...setup });
    this.s2 = window.gsap.timeline({ ...setup });

    this.audio = new Audio(beep);
    this.audio2 = new Audio(beep2);
    this.audio3 = new Audio(beep3);

    this.hello = Animate.hello.bind(this);
    this.animateStroke = this.animateStroke.bind(this);
    this.animateFrame = this.animateFrame.bind(this);
  }

  componentDidMount() {
    this.animateFrame();
    this.animateStroke();

    setTimeout(() => {
      this.audio.play();
    }, 1500);
    setTimeout(() => {
      this.audio2.play();
    }, 1);
    setTimeout(() => {
      this.audio3.play();
    }, 3000);
  }

  animateFrame() {
    this.hello();

    this.tl.play();

    let svgWidth = 30;
    let svgHeight = 30;
    let Obj = { size: 30 };
    let newSize = 100;
    this.tl2.to(Obj, 0.5, {
      size: newSize,
      onUpdate: function () {
        svgWidth = Obj.size;
        svgHeight = Obj.size;
        this.svg.setAttributeNS(null, 'width', svgWidth);
        this.svg.setAttributeNS(null, 'height', svgHeight);
        this.svg.setAttributeNS(
          null,
          'viewBox',
          '0 0 ' + svgWidth + ' ' + svgHeight
        );
      }.bind(this),
    });

    this.tl2.play();
  }

  animateStroke() {
    let Obj = { size: 0, stroke: 0, opacity: 1 };
    let newSize = 68;
    this.s.to(Obj, 0.25, {
      size: newSize,
      opacity: 0.2,
      onUpdate: function () {
        this.r1.setAttributeNS(null, 'width', 30 + Obj.size);
        this.r1.setAttributeNS(null, 'height', 30 + Obj.size);
        this.r1.style.fill = 'rgba(255,255,255,' + Obj.opacity + ')';
      }.bind(this),
      onComplete: function () {}.bind(this),
    });
    this.s.to(Obj, 0.75, {
      stroke: 500,
      delay: 0.15,
      onUpdate: function () {
        this.r1.style.strokeDasharray = Obj.stroke + ' 2000';
      }.bind(this),
      onComplete: function () {}.bind(this),
    });

    this.s.play();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          ref={(svg) => {
            this.svg = svg;
          }}
        >
          <rect
            ref={(rect) => {
              this.r1 = rect;
            }}
            className="r1"
            x="1.5"
            y="1.5"
            rx="5"
            ry="5"
            width="27"
            height="27"
            style={{
              fill: 'rgba(255,255,255,0)',
              strokeWidth: 2,
              stroke: 'rgb(0,255,0, .5)',
              strokeDasharray: '0 200',
            }}
          />
        </svg>
      </div>
    );
  }
}

export default withStyles(styles)(Vector);
