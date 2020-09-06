/*eslint no-extra-bind: "off"*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import Widget from '../../components/HUD/Widget';
import Cube from '../../components/HUD/Cube';

const styles = (theme) => Style.classes();

class View3D extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgetOpened: false,
      widgetExpanded: false,
    };

    this.r = {};

    this.onWidgetOpen = this.onWidgetOpen.bind(this);
    this.onWidgetClose = this.onWidgetClose.bind(this);
  }

  async componentDidMount() {}

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  onWidgetOpen() {
    this.setState({ widgetExpanded: true });
    if (!this.state.widgetOpened) {
      this.setState({ widgetOpened: true }, () => {
        this.delay(100).then(() => this.r.cube.animateContent());
      });
    }
  }

  onWidgetClose() {
    this.setState({ widgetExpanded: false });
  }

  render() {
    return (
      <Widget
        title="3D View"
        icon="M16 6 L26 12 L16 18 L6 12 L16 6 M26 12 L26 20 L16 26 L6 20 L6 12 M16 18 L16 26"
        width="200"
        height="200"
        version="0.01"
        revision="00571"
        onOpenComplete={this.onWidgetOpen}
        onCloseComplete={this.onWidgetClose}
      >
        <Cube
          framed={false}
          delay={0}
          widgetExpanded={this.state.widgetExpanded}
          ref={(cube) => {
            this.r.cube = cube;
          }}
        />
      </Widget>
    );
  }
}

export default withStyles(styles)(View3D);
