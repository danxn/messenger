import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Style from './styles.js';

import Notes from '../../containers/Notes';
import View3D from '../../containers/3DView';
import Description from '../../containers/Description';

const styles = (theme) => Style.classes(theme);

class HUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayWidgets: false,
    };
  }

  componentDidMount() {
    console.log('[GSAP] Loading...', window['gsap']);
    console.log('[THREE] Loading...', window['THREE']);
    this.delay(1000).then(() => {
      this.setState({ displayWidgets: true });
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
          Demo HUD <span className={classes.selection}>v0.01</span>
        </p>
        <p className={classes.para3}>
          <span className={classes.selection2}>Engeneering style</span>
          UI demo widgets
        </p>
        <div className={classes.topBlock}>
          {this.state.displayWidgets && (
            <>
              <Description />
              <View3D />
              <Notes />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HUD);
