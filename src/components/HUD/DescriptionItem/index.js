/*eslint no-extra-bind: "off"*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import typeSound from './xns60z_ui-137-part.wav';

const styles = (theme) => Style.classes(theme);

class DescriptionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.r = {};

    this.typeSoundAudio = new Audio(typeSound);
    this.typeSoundAudio.volume = '0.15';

    this.animateContent = this.animateContent.bind(this);
    this.animateText = this.animateText.bind(this);
    this.createAnimation = this.createAnimation.bind(this);
  }

  async componentDidMount() {
    this.createAnimation();
    if (this.props.delay) {
      this.delay(5000 + (this.props.delay ? this.props.delay : 0)).then(
        this.animateContent
      );
    }
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  async animateContent() {
    this.frameTimeline.play();
    this.headerTimeline.play();

    await this.delay(300);
    this.typeSoundAudio.play();
  }

  async animateText() {
    const content = this.props.content;

    for (let i = 0; i < content.length + 1; i++) {
      await this.delay(10).then(() => {
        this.setState({ content: content.substring(0, i) });
      });
      if (i % 24 === 0) this.typeSoundAudio.play();
    }
    if (this.props.onDisplayngComplete) this.props.onDisplayngComplete();
  }

  createAnimation() {
    let setup = {
      repeat: 0,
      yoyo: false,
      repeatDelay: 0,
      delay: 0,
      paused: true,
      defaults: {
        duration: 1,
      },
    };

    this.frameTimeline = window['gsap'].timeline({
      ...setup,
    });

    this.headerTimeline = window['gsap'].timeline({
      ...setup,
    });

    let Obj = {
      strokeSize: 0,
      strokeSize2: 0,
      o: 1,
      markerWidth: 0,
      height: 0,
      o1: 0,
      o2: 0,
      o3: 0,
      mr: 10,
    };

    // let newWidth = this.props.width;
    this.frameTimeline.to(Obj, 1, {
      strokeSize: 900,
      o1: 0.2,
      o2: 0.2,
      o3: 1,
      markerWidth: 7,
      onStart: function () {}.bind(this),
      onReverseComplete: function () {}.bind(this),
      onUpdate: function () {
        this.r.topFrame.style.strokeDasharray = Obj.strokeSize + ' 2000';
        this.r.bottomFrame.style.strokeDasharray = Obj.strokeSize + ' 2000';
        this.r.topFrame.style.fill = 'rgba(247,247,157,' + Obj.o2 + ')';
        this.r.bottomFrame.style.fill = 'rgba(0,0,0,' + Obj.o1 + ')';
        this.r.marker.setAttributeNS(null, 'width', Obj.markerWidth);
        this.r.superHeader.style.opacity = Obj.o3;
      }.bind(this),
      onComplete: function () {}.bind(this),
    });
    this.frameTimeline.to(Obj, 2, {
      strokeSize2: 150,
      onStart: function () {
        this.animateText();
      }.bind(this),
      onReverseComplete: function () {}.bind(this),
      onUpdate: function () {
        this.r.sideLine.style.strokeDasharray = Obj.strokeSize2 + ' 2000';
      }.bind(this),
      onComplete: function () {}.bind(this),
    });

    this.headerTimeline.to(this.r.header.childNodes, 0.25, {
      opacity: 1,
      yoyo: false,
      repeat: 0,
      ease: 'power1.inOut',
      delay: 0,
      stagger: {
        amount: 0.3,
        from: '0',
      },
    });
  }

  render() {
    const { classes } = this.props;

    const headerContent = this.props.header.split('').map((char, index) => {
      return (
        <span className="char" key={index}>
          {char}
        </span>
      );
    });

    let topFrame = '';
    let bottomFrame = '';
    let sideLine = '';
    let viewBox = '';
    if (this.props.width && this.props.height) {
      const w = this.props.width;
      const h = this.props.height;
      viewBox = '0 0 ' + w + ' ' + h;
      bottomFrame =
        'M' +
        (w - 1) +
        ' ' +
        (h - 5) +
        ' V20 H1 V' +
        (h - 1) +
        ' H' +
        (w - 5) +
        ' Z';
      topFrame = 'M1 5 V20 H' + (w - 1) + ' V1 H5 Z';
      sideLine = 'M10 50 V' + (h - 20) + ' L15 ' + (h - 15);
    }

    return (
      <div
        className={classes.корневой}
        style={{
          width: this.props.width + 'px',
          height: this.props.height + 'px',
        }}
        ref={(div) => {
          this.r.корневой = div;
        }}
      >
        <svg
          width={this.props.width}
          height={this.props.height}
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0)',
            top: '0px',
            left: '0px',
          }}
          viewBox={viewBox ? viewBox : '0 0 100 100'}
        >
          <path
            d={topFrame}
            strokeWidth="1px"
            stroke="rgba(247,247,157,.8)"
            fill="transparent"
            strokeDasharray="0 2000"
            ref={(path) => {
              this.r.topFrame = path;
            }}
          ></path>
          <path
            d={bottomFrame}
            strokeWidth="1px"
            stroke="rgba(247,247,157,.8)"
            fill="transparent"
            strokeDasharray="0 2000"
            ref={(path) => {
              this.r.bottomFrame = path;
            }}
          ></path>
          <rect
            x="10"
            y="35"
            width="0"
            height="17"
            fill="#fff"
            ref={(rect) => {
              this.r.marker = rect;
            }}
          ></rect>
          <path
            d={sideLine}
            strokeWidth="1px"
            stroke="rgba(255,255,255,1)"
            fill="transparent"
            strokeDasharray="0 2000"
            ref={(path) => {
              this.r.sideLine = path;
            }}
          ></path>
        </svg>
        <h4
          className={classes.superHeader}
          ref={(h4) => {
            this.r.superHeader = h4;
          }}
        >
          {this.props.superHeader}
        </h4>
        <h5
          className={classes.header}
          ref={(h5) => {
            this.r.header = h5;
          }}
        >
          {headerContent}
        </h5>
        <p>
          <span>{this.state.content}</span>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(DescriptionItem);
