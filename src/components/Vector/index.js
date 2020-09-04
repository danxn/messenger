import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Description from './Description';
import Model from './Model';

import beep from './beep-attention.mp3';
import beep2 from './xns60z_ui-137.wav';
import beep3 from './kbryjr_ui-130.wav';

import './index.css';
import Background from './bg_1_1440x900.jpg';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    padding: theme.spacing(2),
    height: '96vh',
    boxShadow: '0px 0px 500px rgba(0,0,0,1) inset',
  },
  topBlock: {
    paddingLeft: 40,
    height: 350,
  },
  para: {
    fontFamily: 'Electrolize',
    fontSize: 14,
    color: '#fff',
    paddingLeft: 40,
    marginBottom: 50,
  },
  para2: {
    paddingLeft: 40,
    fontFamily: 'Orbitron',
    fontSize: 36,
    color: '#fff',
    fontWeight: 700,
    textShadow: '1px 1px 5px #000',
    marginBottom: 0,
  },
  para3: {
    fontFamily: 'Orbitron',
    fontSize: 10,
    color: '#fff',
    fontWeight: 100,
    textShadow: '1px 1px 2px #000',
    paddingLeft: 40,
    marginBottom: 40,
    marginTop: 0,
    textTransform: 'uppercase',
    letterSpacing: '3.6px',
    textIndent: 2,
  },
});

class Vector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'User1',
    };

    this.audio = new Audio(beep);
    this.audio2 = new Audio(beep2);
    this.audio3 = new Audio(beep3);

    this.playSounds = this.playSounds.bind(this);
  }

  audio;
  audio2;
  audio3;

  componentDidMount() {
    console.log('[GSAP] Loading...', window['gsap']);
    console.log('[THREE] Loading...', window['THREE']);

    // this.playSounds();
  }

  async playSounds() {
    await this.delay(1).then(() => this.audio2.play());
    this.delay(1500).then(() => this.audio.play());
    this.delay(3000).then(() => this.audio3.play());
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
        <p className={classes.para2}>DEMO MODEL v0.01</p>
        <p className={classes.para3}>Engeneering style UI demo widgets</p>
        <div className={classes.topBlock}>
          <Description />
          <Model />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Vector);
