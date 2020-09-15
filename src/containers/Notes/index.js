/*eslint no-extra-bind: "off"*/
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Note from '../../components/HUD/Note';
import Widget from '../../components/HUD/Widget';
import Style from './styles.js';

const styles = (theme) => Style.classes();

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgetOpened: false,
      displayedNotes: 0,
    };

    this.r = {};
    this.r.note = [];

    this.onWidgetOpen = this.onWidgetOpen.bind(this);
    this.displayingNotes = this.displayingNotes.bind(this);
  }

  async componentDidMount() {}

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  onWidgetOpen() {
    if (!this.state.widgetOpened) {
      this.setState({ widgetOpened: true }, () => {
        this.delay(100).then(() => this.r.note[0].animateContent());
      });
    }
  }

  async displayingNotes(note) {
    this.setState({ displayedNotes: note }, () => {
      if (this.state.displayedNotes < 2)
        this.delay(100).then(() =>
          this.r.note[this.state.displayedNotes + 1].animateContent()
        );
    });
  }

  render() {
    return (
      <Widget
        title="Notes"
        icon={
          this.props.icon
            ? this.props.icon
            : 'M6 7 H 20 L 26 12 V 26 H 6 L 6 7 M20 7 L20 12 L26 12 M11 13 L 16 13 M11 17 L 21 17 M11 21 L 21 21'
        }
        width="200"
        height="500"
        version="0.01"
        revision="00571"
        onOpenComplete={this.onWidgetOpen}
      >
        <Note
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          delay={0}
          onDisplayngComplete={() => this.displayingNotes(0)}
          ref={(note) => {
            this.r.note[0] = note;
          }}
        />
        <Note
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          delay={0}
          onDisplayngComplete={() => this.displayingNotes(1)}
          ref={(note) => {
            this.r.note[1] = note;
          }}
        />
        <Note
          content=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          delay={0}
          onDisplayngComplete={() => this.displayingNotes(2)}
          ref={(note) => {
            this.r.note[2] = note;
          }}
        />
      </Widget>
    );
  }
}

export default withStyles(styles)(Notes);
