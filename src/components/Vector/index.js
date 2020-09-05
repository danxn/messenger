import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Background from './bg_1_1440x900.jpg';
import './index.css';
import Widget from './Widget';
import Cube from './Cube';
import Notes from './Notes';

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
    textIndent: 0,
  },
});

class Vector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'User1',
    };
  }

  componentDidMount() {
    console.log('[GSAP] Loading...', window['gsap']);
    console.log('[THREE] Loading...', window['THREE']);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <p className={classes.para2}>DEMO MODEL v0.01</p>
        <p className={classes.para3}>
          <span
            style={{
              backgroundColor: '#c4c47e73',
              display: 'inline-block',
              paddingLeft: '2px',
              marginRight: '5px',
              fontWeight: 600,
            }}
          >
            Engeneering style
          </span>
          UI demo widgets
        </p>
        <div className={classes.topBlock}>
          <Widget
            title="Description"
            icon="M6 7 H 20 L 26 12 V 26 H 6 L 6 7 M20 7 L20 12 L26 12 M11 13 L 16 13 M11 17 L 21 17 M11 21 L 21 21"
            width="300"
            height="300"
            version="0.01"
            revision="00571"
          />
          <Widget
            title="3D View"
            icon="M16 6 L26 12 L16 18 L6 12 L16 6 M26 12 L26 20 L16 26 L6 20 L6 12 M16 18 L16 26"
            width="200"
            height="200"
            version="0.01"
            revision="00571"
          >
            <Cube
              framed={false}
              delay={800}
              ref={(cube) => {
                this.contentCube = cube;
              }}
            />
          </Widget>
          <Widget
            title="Notes"
            icon="M6 7 H 20 L 26 12 V 26 H 6 L 6 7 M20 7 L20 12 L26 12 M11 13 L 16 13 M11 17 L 21 17 M11 21 L 21 21"
            width="200"
            height="500"
            version="0.01"
            revision="00571"
          >
            <Notes />
          </Widget>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Vector);
