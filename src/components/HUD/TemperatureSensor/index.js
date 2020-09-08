/*eslint no-extra-bind: "off"*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import typeSound from './xns60z_ui-137-part.wav';

const styles = (theme) => Style.classes(theme);

class TemperatureSensor extends Component {
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
    this.applyTheme = this.applyTheme.bind(this);
  }

  async componentDidMount() {
    this.applyTheme();
    this.createAnimation();
    if (this.props.delay) {
      this.delay(1000 + (this.props.delay ? this.props.delay : 0)).then(
        this.animateContent
      );
    }
  }

  applyTheme() {
    if (this.props.theme === 'dark') {
      this.r.bottomFrame.style.fill = 'rgba(0,0,0,0)';
      this.r.bottomFill = 'rgba(0,0,0,';
      this.r.header.style.color = 'rgba(255,255,255,1)';
      this.r.markerFill = '#555';
      this.r.schemaColor = '#ddd';
      this.r.valueColor = '#fff';
    } else {
      this.r.bottomFrame.style.fill = 'rgba(255,255,255,0)';
      this.r.bottomFill = 'rgba(255,255,255,';
      this.r.header.style.color = 'rgba(0,0,0,1)';
      this.r.markerFill = '#fff';
      this.r.schemaColor = '#333';
      this.r.valueColor = '#fff';
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

    this.schemaTimeline = window['gsap'].timeline({
      ...setup,
      yoyo: true,
      delay: 2,
      repeat: -1,
      repeatDelay: 2,
    });

    let schemaObj = {
      topCaptionY: 70,
      bottomCaptionY: 120,
      topCaptionFont: 30,
      bottomCaptionFont: 30,
      valueHeight: 20,
      valueFont: 14,
      valueX: 65, //30,
      valueY: 90, //80,
      valueW: 70, //140,
      valueH: 20, //40,
    };
    this.schemaTimeline.to(schemaObj, 0.3, {
      topCaptionY: 62,
      bottomCaptionY: 128,
      topCaptionFont: 20,
      bottomCaptionFont: 20,
      valueFont: 28,
      valueHeight: 40,
      valueX: 30, //65,
      valueY: 80, //90,
      valueW: 140, //70,
      valueH: 40, //20,
      onStart: function () {}.bind(this),
      onReverseComplete: function () {}.bind(this),
      onUpdate: function () {
        // this.r.topFrame.style.strokeDasharray = Obj.strokeSize + ' 2000';
        // this.r.bottomFrame.style.strokeDasharray = Obj.strokeSize + ' 2000';
        // this.r.topFrame.style.fill = 'rgba(247,247,157,' + Obj.o2 + ')';
        // this.r.bottomFrame.style.fill = this.r.bottomFill + Obj.o1 + ')';
        this.r.valueBG.setAttributeNS(null, 'x', schemaObj.valueX);
        this.r.valueBG.setAttributeNS(null, 'y', schemaObj.valueY);
        this.r.valueBG.setAttributeNS(null, 'width', schemaObj.valueW);
        this.r.valueBG.setAttributeNS(null, 'height', schemaObj.valueH);
        // this.r.marker.setAttributeNS(null, 'width', Obj.markerWidth);
        this.r.value.style.height = schemaObj.valueHeight;
        this.r.value.style.fontSize = schemaObj.valueFont + 'px';
        this.r.topCaption.style.top = schemaObj.topCaptionY + 'px';
        this.r.bottomCaption.style.top = schemaObj.bottomCaptionY + 'px';
        this.r.topCaption.style.fontSize = schemaObj.topCaptionFont + 'px';
        this.r.bottomCaption.style.fontSize =
          schemaObj.bottomCaptionFont + 'px';
        // this.r.superHeader.style.opacity = Obj.o3;
        // this.r.superHeader.style.opacity = Obj.o3;
      }.bind(this),
      onComplete: function () {
        // if (this.props.onDisplayngComplete) this.props.onDisplayngComplete();
      }.bind(this),
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
      strokeSize: 1300,
      o1: 0.7,
      o2: 0.2,
      o3: 1,
      markerWidth: 7,
      onStart: function () {}.bind(this),
      onReverseComplete: function () {}.bind(this),
      onUpdate: function () {
        this.r.topFrame.style.strokeDasharray = Obj.strokeSize + ' 2000';
        this.r.bottomFrame.style.strokeDasharray = Obj.strokeSize + ' 2000';
        this.r.topFrame.style.fill = 'rgba(247,247,157,' + Obj.o2 + ')';
        this.r.bottomFrame.style.fill = this.r.bottomFill + Obj.o1 + ')';
        this.r.marker.setAttributeNS(null, 'width', Obj.markerWidth);
        this.r.superHeader.style.opacity = Obj.o3;
      }.bind(this),
      onComplete: function () {
        this.schemaTimeline.play();
        if (this.props.onDisplayngComplete) this.props.onDisplayngComplete();
      }.bind(this),
    });
    // this.frameTimeline.to(Obj, 2, {
    //   strokeSize2: 250,
    //   onStart: function () {
    //     this.animateText();
    //   }.bind(this),
    //   onReverseComplete: function () {}.bind(this),
    //   onUpdate: function () {
    //     this.r.sideLine.style.strokeDasharray = Obj.strokeSize2 + ' 2000';
    //   }.bind(this),
    //   onComplete: function () {}.bind(this),
    // });

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
    let markerY = '';
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
      markerY = h - 39;
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
            x="20"
            y={markerY}
            width="0"
            height="16"
            fill={this.r.markerFill}
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

          {/* schema */}

          <circle
            cx="100"
            cy="100"
            r="50"
            stroke={this.r.schemaColor}
            fill="transparent"
            strokeWidth="2.5"
          />
          <rect
            x="65" //x="30"
            y="90" //y="80"
            width="70" //"140"
            height="20" //"40"
            rx="5"
            ry="5"
            stroke="rgba(255,0,0,.9)"
            fill="rgba(255,0,0,.7)"
            strokeWidth="2px"
            ref={(rect) => {
              this.r.valueBG = rect;
            }}
          ></rect>
        </svg>
        <div
          style={{
            position: 'absolute',
            top: 90,
            left: 30,
            width: 140,
            height: 20, //40
            lineHeight: '40px',
            fontFamily: 'Orbitron', //'Saira Condensed',
            fontSize: '14px', //'28px',
            fontWeight: 700,
            color: this.r.valueColor,
            textAlign: 'center',
          }}
          ref={(div) => {
            this.r.value = div;
          }}
        >
          50.4 °C
        </div>
        <div
          style={{
            position: 'absolute',
            top: 47,
            left: 30,
            width: 30,
            height: 30,
            fontFamily: 'Saira Condensed',
            fontSize: '30px',
            fontWeight: 500,
            color: this.r.schemaColor,
          }}
        >
          20
        </div>
        <div
          style={{
            position: 'absolute',
            top: 70,
            left: 50,
            width: 100,
            height: 30,
            fontFamily: 'Saira Condensed',
            fontSize: '30px',
            lineHeight: '30px',
            fontWeight: 500,
            textAlign: 'center',
            color: this.r.schemaColor,
          }}
          ref={(div) => {
            this.r.topCaption = div;
          }}
        >
          TT
        </div>
        <div
          style={{
            position: 'absolute',
            top: 120,
            left: 50,
            width: 100,
            height: 30,
            fontFamily: 'Saira Condensed',
            fontSize: '30px',
            lineHeight: '30px',
            fontWeight: 500,
            textAlign: 'center',
            color: this.r.schemaColor,
          }}
          ref={(div) => {
            this.r.bottomCaption = div;
          }}
        >
          1062
        </div>
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

export default withStyles(styles)(TemperatureSensor);
