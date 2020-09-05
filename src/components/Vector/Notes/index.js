/*eslint no-extra-bind: "off"*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
// import Animate from './animation.js';
// import UILogic from './uilogic.js';
import Style from './styles.js';

const styles = (theme) => Style.classes();

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   active: false,
      //   switching: true,
      //   closeHover: false,
      //   labelHover: false,
      //   titleWidth: 185,
    };

    this.r = {};

    // this.createAnimation = Animate.createAnimation.bind(this);
    // this.openWidget = Animate.openWidget.bind(this);
    // this.closeWidget = Animate.closeWidget.bind(this);

    // this.initUIElements = UILogic.init.bind(this);
  }

  async componentDidMount() {
    // this.createAnimation();
    // this.initUIElements();
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  render() {
    const { classes } = this.props;

    // const letters = this.props.title
    //   .toUpperCase()
    //   .split('')
    //   .map((char, index) => {
    //     return (
    //       <span key={index} className="headerTextChar">
    //         {char}
    //       </span>
    //     );
    //   });

    const NB = (
      <span className={classes.notabene}>
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
          {NB} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          {NB} Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          {NB} Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Notes);
