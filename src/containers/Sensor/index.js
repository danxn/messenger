import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import Widget from '../../components/HUD/Widget';
import TemperatureSensor from '../../components/HUD/TemperatureSensor';

const styles = (theme) => Style.classes();

class Sensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgetOpened: false,
      widgetExpanded: false,
    };

    this.r = {};
    this.r.item = [];

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
        this.delay(100).then(() => this.r.item[0].animateContent());
      });
    }
  }

  onWidgetClose() {
    this.setState({ widgetExpanded: false });
  }

  async displayingNotes(note) {
    this.setState({ displayedNotes: note }, () => {
      if (this.state.displayedNotes < this.r.item.length - 1)
        this.delay(100).then(() =>
          this.r.item[this.state.displayedNotes + 1].animateContent()
        );
    });
  }

  render() {
    return (
      <Widget
        title={this.props.title}
        icon="M8 14 C 8 6, 24 6, 24 14 V18 C 24 26, 8 26, 8 18 V14 C 8 22, 24 22, 24 14 C24 22, 8 22, 8 14 Z"
        width="300"
        height="340"
        version="0.02"
        revision="00031"
        date="08.09.2020"
        onOpenComplete={this.onWidgetOpen}
      >
        <TemperatureSensor
          superHeader="Displaying value"
          header="Small and Large value"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          width={312}
          height={323}
          delay={0}
          onDisplayngComplete={() => this.displayingNotes(0)}
          ref={(item) => {
            this.r.item[0] = item;
          }}
          theme={this.props.theme}
        />
      </Widget>
    );
  }
}

export default withStyles(styles)(Sensor);
