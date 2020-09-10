import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Style from './styles.js';

import Notes from '../../containers/Notes';
import View3D from '../../containers/3DView';
import Description from '../../containers/Description';
import Sensor from '../../containers/Sensor';
import Canvas from '../../containers/Canvas';

const styles = (theme) => Style.classes(theme);

class HUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayWidgets: false,
    };

    this.r = {};
  }

  componentDidMount() {
    console.log('[GSAP] Loading...', window['gsap']);
    console.log('[THREE] Loading...', window['THREE']);
    this.delay(1000).then(() => {
      this.setState({ displayWidgets: true }, () => {
        this.delay(500).then(() => {
          this.r.topBlock.style.opacity = '1';
        });
      });
    });
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
        <p className={classes.para2}>
          Demo HUD <span className={classes.selection}>v0.03</span>
        </p>
        <p className={classes.para3}>
          <span className={classes.selection2}>Engeneering style</span>
          UI demo widgets
        </p>
        {this.state.displayWidgets && (
          <div
            className={classes.topBlock}
            ref={(div) => {
              this.r.topBlock = div;
            }}
          >
            <div>
              <Canvas title="Canvas animated UI" />
            </div>
            <div>
              <Sensor title="T° Sensor (Light)" theme="light" />
              <Sensor title="T° Sensor (Dark)" theme="dark" />
            </div>
            <div>
              <Description />
              <View3D />
              <Notes />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(HUD);
