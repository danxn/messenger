import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import Widget from '../../components/HUD/Widget';
import DescriptionItem from '../../components/HUD/DescriptionItem';

const styles = (theme) => Style.classes();

class Description extends Component {
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
      if (this.state.displayedNotes < 1)
        this.delay(100).then(() =>
          this.r.item[this.state.displayedNotes + 1].animateContent()
        );
    });
  }

  render() {
    return (
      <Widget
        title="Description"
        icon="M6 7 H 20 L 26 12 V 26 H 6 L 6 7 M20 7 L20 12 L26 12 M11 13 L 16 13 M11 17 L 21 17 M11 21 L 21 21"
        width="300"
        height="340"
        version="0.01"
        revision="00571"
        onOpenComplete={this.onWidgetOpen}
      >
        <DescriptionItem
          superHeader="Mesh"
          header="Cube"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          width={300}
          height={160}
          delay={0}
          onDisplayngComplete={() => this.displayingNotes(0)}
          ref={(item) => {
            this.r.item[0] = item;
          }}
        />
        <DescriptionItem
          superHeader="Material"
          header="Basic"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          width={300}
          height={140}
          delay={0}
          onDisplayngComplete={() => this.displayingNotes(1)}
          ref={(item) => {
            this.r.item[1] = item;
          }}
        />
      </Widget>
    );
  }
}

export default withStyles(styles)(Description);
