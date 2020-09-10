import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import Widget from '../../components/HUD/Widget';
import Create from '../../components/HUD/Create';

const styles = (theme) => Style.classes();

class Canvas extends Component {
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
    // if (!this.state.widgetOpened) {
    //   this.setState({ widgetOpened: true }, () => {
    //     this.delay(100).then(() => this.r.item[0].animateContent());
    //   });
    // }
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
        icon="M10 14 C 8 4, 24 4, 22 14 L19 20 V24 L18 26 H14 L13 24 V20 L10 14 L13 20 V22 H18 M16 22 V15 H15 H17"
        width="800"
        height="250"
        version="0.03"
        revision="00031"
        date="08.09.2020"
        onOpenComplete={this.onWidgetOpen}
      >
        <Create />
      </Widget>
    );
  }
}

export default withStyles(styles)(Canvas);
