/*eslint no-extra-bind: "off"*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Style from './styles.js';

import typeSound from './xns60z_ui-137-part.wav';

const styles = (theme) => Style.classes();

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.r = {};

    this.typeSoundAudio = new Audio(typeSound);
    this.typeSoundAudio.volume = '0.75';

    this.animateContent = this.animateContent.bind(this);
  }

  async componentDidMount() {
    if (this.props.delay) {
      this.delay(5000 + (this.props.delay ? this.props.delay : 0)).then(
        this.animateContent
      );
    }
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  async animateContent() {
    const content = this.props.content;

    this.r.nb.style.opacity = 1;
    await this.delay(300);
    this.typeSoundAudio.play();
    for (let i = 0; i < content.length + 1; i++) {
      await this.delay(10).then(() => {
        this.setState({ content: content.substring(0, i) });
      });
      if (i % 24 === 0) this.typeSoundAudio.play();
    }
    if (this.props.onDisplayngComplete) this.props.onDisplayngComplete();
  }

  render() {
    const { classes } = this.props;

    const NB = (
      <span
        className={classes.notabene}
        ref={(span) => {
          this.r.nb = span;
        }}
      >
        <span className="nota">N</span>
        <span className="bene">B</span>
      </span>
    );

    return (
      <div
        className={classes.корневой}
        ref={(div) => {
          this.r.корневой = div;
        }}
      >
        <p>
          {NB} <span>{this.state.content}</span>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Note);
