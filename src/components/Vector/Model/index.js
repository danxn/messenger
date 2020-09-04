/*eslint no-extra-bind: "off"*/
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Cube from '../Cube';

import openSound from '../kbryjr_ui-130.wav';
import openingSound from '../mk9frs_ui-140.wav';

const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    height: 50,
    width: 50,
    verticalAlign: 'top',
    '& svg': { margin: '10px 10px 5px 0px' },
  },
  Layer1: { position: 'absolute' },
  collapsedIconBg: { stroke: '#777', strokeWidth: '1px' },
  collapsedIconGlyph: { stroke: '#fff', strokeWidth: '1px', fill: '#333' },
  expandedIconBg: { stroke: '#f6f68d', strokeWidth: '0px', fill: '#f6f68d' },
  expandingIconBg: { stroke: 'white', strokeWidth: '0px', fill: 'white' },
  expandedIconGlyph: {
    stroke: '#222',
    strokeWidth: '2.5px',
    fill: 'transparent',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  Layer2: {
    position: 'absolute',
    top: -3,
    left: -3,
    // backgroundColor: 'rgba(0,0,0,.5)',
  },
  frame: {
    strokeDasharray: '0 2000',
    stroke: '#fff',
    strokeWidth: 1.5,
    fill: 'transparent',
  },
  corner: {
    stroke: '#fff',
    strokeWidth: 0.75,
    fill: 'transparent',
    strokeLinecap: 'square',
    strokeLinejoin: 'square',
  },
  cornerContainer: {
    opacity: 0,
  },
  header: {
    fill: 'rgba(255,255,255,1)',
    opacity: 0,
  },
  headerText: {
    position: 'absolute',
    top: 11,
    left: 40,
    '& .headerTextChar2': {
      color: '#fff',
      fontSize: 25,
      fontWeight: 700,
      fontFamily: 'Orbitron',
      opacity: 0,
      textShadow: '1px 1px 2px rgba(0,0,0,.75)',
    },
  },
  superHeader: {
    position: 'absolute',
    top: -2,
    right: 40,
    color: '#bbb',
    fontSize: 7,
    fontWeight: 700,
    fontFamily: 'Orbitron',
    opacity: 0,
    textShadow: '1px 1px 2px rgba(0,0,0,.75)',
    '& .tag': {
      display: 'inline-block',
      padding: '0 3px',
      color: 'rgba(255,255,255,1)',
      backgroundColor: 'rgba(255,255,255,.35)',
      textShadow: '0 0 0px rgba(0,0,0,.5)',
    },
    '& .marker': {
      position: 'absolute',
      width: 3,
      height: 3,
      backgroundColor: 'rgba(255,255,255,.9)',
      right: -8,
      bottom: -2,
    },
  },
  headerActions: { fill: 'rgba(0,0,0,.15)' },
  body: {
    fill: 'rgba(255,255,255,1)',
    opacity: 0,
  },
  footerText: {
    position: 'absolute',
    bottom: -22,
    left: 20,
    color: 'rgba(255,255,255,.7)',
    fontSize: 10,
    fontWeight: 700,
    fontFamily: 'Orbitron',
    opacity: 0,
    textShadow: '1px 1px 2px rgba(0,0,0,.75)',
    '& .tag': {
      display: 'inline-block',
      padding: '0 5px',
      color: 'rgba(255,255,255,1)',
      backgroundColor: 'rgba(255,255,255,.35)',
      textShadow: '0 0 0px rgba(0,0,0,.5)',
    },
    '& .marker': {
      position: 'absolute',
      width: 4,
      height: 4,
      backgroundColor: 'rgba(255,255,255,.7)',
      left: -9,
      top: -4,
    },
  },
  bodyParams: {
    position: 'absolute',
    width: 230,
    height: 180,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    left: 0,
    bottom: 8,
    opacity: 0,
  },
  body3DView: {
    position: 'absolute',
    width: 200,
    height: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    right: 19,
    bottom: 8,
    opacity: 0,
  },
});

class Model extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      switching: true,
    };

    let setup = {
      repeat: 0,
      yoyo: false,
      repeatDelay: 2,
      delay: 2,
      paused: true,
      defaults: { duration: 1 },
    };

    this.tl = window['gsap'].timeline({ ...setup, delay: 2 });
    this.tl2 = window['gsap'].timeline({ ...setup, delay: 0 });

    this.openSoundAudio = new Audio(openSound);
    this.openingSoundAudio = new Audio(openingSound);

    this.animateIcon = this.animateIcon.bind(this);
    this.animateFrame = this.animateFrame.bind(this);
    this.animateHeader = this.animateHeader.bind(this);
  }

  tl;
  tl2;
  svg;
  root;
  svg2;
  c1;
  c2;
  c3;
  c4;
  p1;
  header;
  superHeader;
  body;
  footer;
  iconFrame1;
  iconFrame2;
  openSoundAudio;
  openingSoundAudio;
  contentCube;
  body3DView;
  bodyParams;

  componentDidMount() {
    this.animateIcon();
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  animateIcon() {
    let Obj = { size: 0 };
    let newSize = 100;
    this.tl.to(Obj, 0.5, {
      size: newSize,
      onStart: function () {
        this.delay(50).then(() => this.openSoundAudio.play());
      }.bind(this),
      onUpdate: function () {
        if (
          (Obj.size > 0 && Obj.size < 5) ||
          (Obj.size > 10 && Obj.size < 15) ||
          (Obj.size > 25 && Obj.size < 30) ||
          (Obj.size > 35 && Obj.size < 40) ||
          (Obj.size > 45 && Obj.size < 50) ||
          (Obj.size > 55 && Obj.size < 60)
        ) {
          this.setState({ active: false });
        } else {
          this.setState({ active: true });
          if (Obj.size > 80) {
            this.setState({ switching: false });
          }
        }
        this.p1.style.strokeDasharray = Obj.size * 1.5 + ' 2000';
      }.bind(this),
      onComplete: function () {
        this.animateFrame();
      }.bind(this),
    });

    this.tl.play();
  }

  animateFrame() {
    let Obj = { width: 0, height: 0, o1: 1, o2: 1, o3: 0, mr: 10 };
    let newWidth = 400;
    let newHeight = 180;
    let svgWidth = 38;
    let svgHeight = 39;
    this.tl2.to(Obj, 0.5, {
      width: newWidth,
      o1: 0.4,
      onStart: function () {
        this.p1.style.opacity = '0';
        this.c1.style.opacity = '1';
        this.c2.style.opacity = '1';
        this.c3.style.opacity = '1';
        this.c4.style.opacity = '1';
        this.iconFrame1.style.opacity = 1;
        this.iconFrame2.style.opacity = 0;
        this.delay(150).then(() => this.openingSoundAudio.play());
      }.bind(this),
      onUpdate: function () {
        this.svg2.setAttributeNS(null, 'width', svgWidth + Obj.width);
        this.svg2.setAttributeNS(
          null,
          'viewBox',
          '0 0 ' + (svgWidth + Obj.width) + ' ' + svgHeight
        );
        if (svgWidth + Obj.width > 38) {
          this.header.style.opacity = 1;
        }
        this.c2.setAttributeNS(null, 'x', Obj.width);
        this.c3.setAttributeNS(null, 'x', Obj.width);
        this.header.style.fill = 'rgba(255,255,255,' + Obj.o1 + ')';
        this.root.style.width = Obj.width + 50 + 'px';
      }.bind(this),
      onComplete: function () {
        this.animateHeader();
      }.bind(this),
    });
    this.tl2.to(Obj, 0.5, {
      height: newHeight,
      o2: 0.1,
      o3: 1,
      onUpdate: function () {
        this.svg2.setAttributeNS(null, 'height', svgHeight + Obj.height);
        this.svg2.setAttributeNS(
          null,
          'viewBox',
          '0 0 ' + (svgWidth + Obj.width) + ' ' + (svgHeight + Obj.height)
        );
        if (svgHeight + Obj.height > 38) {
          this.body.style.opacity = 1;
        }
        this.c3.setAttributeNS(null, 'y', Obj.height);
        this.c4.setAttributeNS(null, 'y', Obj.height);
        this.body.style.fill = 'rgba(255,255,255,' + Obj.o2 + ')';
        this.root.style.height = Obj.height + 50 + 'px';
        this.footer.style.opacity = Obj.o3;
        this.superHeader.style.opacity = Obj.o3;
      }.bind(this),
      onComplete: function () {
        this.contentCube.start();
        this.body3DView.style.opacity = '1';
        this.bodyParams.style.opacity = '1';
      }.bind(this),
    });

    this.tl2.play();
  }

  animateHeader() {
    window['gsap'].to('.headerTextChar2', 0.2, {
      opacity: 1,
      yoyo: true,
      repeat: 0,
      ease: 'power1.inOut',
      delay: 0,
      stagger: {
        amount: 1.5,
        from: '0',
      },
    });
  }

  render() {
    const { classes } = this.props;

    const letters = '3D VIEW'.split('').map((char, index) => {
      return (
        <span key={index} className="headerTextChar2">
          {char}
        </span>
      );
    });

    return (
      <div
        className={classes.root}
        ref={(div) => {
          this.root = div;
        }}
      >
        <svg
          className={classes.Layer2}
          id="Layer2"
          width="38"
          height="39"
          viewBox="0 0 38 39"
          ref={(svg) => {
            this.svg2 = svg;
          }}
        >
          <path
            ref={(path) => {
              this.p1 = path;
            }}
            // d="M1 4 L 4 1 H 34 L 37 4 V 35 L 34 38 H 4 L 1 35 V4"
            d="M1 1 H 37 V 38 H 1 V1"
            className={classes.frame}
          />
          <svg
            className={classes.cornerContainer}
            x="0"
            y="0.75"
            ref={(svg) => {
              this.c1 = svg;
            }}
          >
            <path
              // d="M1 19 L1 4 L 4 1 H 17"
              d="M1 19 V1 H17"
              className={classes.corner}
            />
          </svg>
          <svg
            className={classes.cornerContainer}
            x="0"
            y="0.75"
            ref={(svg) => {
              this.c2 = svg;
            }}
          >
            <path
              // d="M17 1 H 34 L 37 4 V 19"
              d="M19 1 H37 V19"
              className={classes.corner}
            />
          </svg>
          <svg
            className={classes.cornerContainer}
            x="0"
            y="0"
            ref={(svg) => {
              this.c3 = svg;
            }}
          >
            <path
              // d="M37 19 V 35 L 34 38 H 18"
              d="M37 19 V38 H18"
              className={classes.corner}
            />
          </svg>
          <svg
            className={classes.cornerContainer}
            x="0"
            y="0"
            ref={(svg) => {
              this.c4 = svg;
            }}
          >
            <path
              // d="M17 38 H 4 L 1 35 V18"
              d="M17 38 H1 V19"
              className={classes.corner}
            />
          </svg>
          <rect
            className={classes.header}
            ref={(rect) => {
              this.header = rect;
            }}
            x="35"
            y="4"
            width="399"
            height="31"
          ></rect>
          <rect
            className={classes.headerActions}
            x="402"
            y="4"
            width="31"
            height="31"
          ></rect>
          <rect
            className={classes.body}
            ref={(rect) => {
              this.body = rect;
            }}
            x="3"
            y="34"
            width="432"
            height="182"
          ></rect>
        </svg>
        <svg
          id="Layer1"
          className={classes.Layer1}
          width="32"
          height="33"
          viewBox="0 0 32 33"
          ref={(svg) => {
            this.svg = svg;
          }}
        >
          <path
            ref={(path) => {
              this.iconFrame1 = path;
            }}
            style={{ opacity: 0 }}
            d="M1 1 H31 V32 H1 V1"
            className={
              this.state.active
                ? this.state.switching
                  ? classes.expandingIconBg
                  : classes.expandedIconBg
                : classes.collapsedIconBg
            }
          />
          <path
            ref={(path) => {
              this.iconFrame2 = path;
            }}
            style={{ opacity: 1 }}
            d="M1 4 L 4 1 H 28 L 31 4 V 29 L 28 32 H 4 L 1 29 V4"
            className={
              this.state.active
                ? this.state.switching
                  ? classes.expandingIconBg
                  : classes.expandedIconBg
                : classes.collapsedIconBg
            }
          />
          <path
            d="M16 6 L26 12 L16 18 L6 12 L16 6 M26 12 L26 20 L16 26 L6 20 L6 12 M16 18 L16 26"
            className={
              this.state.active
                ? classes.expandedIconGlyph
                : classes.collapsedIconGlyph
            }
          />
        </svg>
        <div
          className={classes.superHeader}
          ref={(div) => {
            this.superHeader = div;
          }}
        >
          <div className="marker"></div>
          <div>
            <span className="tag">Rev. 00715</span> 04.09.2020
          </div>
        </div>
        <div className={classes.headerText}>{letters}</div>
        <div
          className={classes.bodyParams}
          ref={(div) => {
            this.bodyParams = div;
          }}
        ></div>
        <div
          className={classes.body3DView}
          ref={(div) => {
            this.body3DView = div;
          }}
        >
          <Cube
            framed={false}
            delay={800}
            ref={(cube) => {
              this.contentCube = cube;
            }}
          />
        </div>
        <div
          className={classes.footerText}
          ref={(div) => {
            this.footer = div;
          }}
        >
          <div className="marker"></div>
          <div>
            Demo Model <span className="tag">v0.01</span>
          </div>
          <div>3D View</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Model);
