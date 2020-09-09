import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import './index.css';

const styles = (theme) => ({
  root: {
    position: 'relative',
    width: 170,
    height: 170,
    margin: '10px auto',
    '& canvas': {
      position: 'absolute',
      top: 0,
      left: 0,
      border: '0px dotted white',
    },
  },
  framed: { border: '1px dotted white!important' },
  widgetExpanded: false,
});

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.r = {};
    this.cj = window['createjs'];
    this.c = {};
  }

  componentDidMount() {
    console.log('[CREATE JS] Loading...', this.cj);
    this.c.stage = new this.cj.Stage('demoCanvas');
    this.c.circle = new this.cj.Shape();

    this.c.circle.graphics
      .beginFill('rgba(255,255,255,.25)')
      .drawCircle(0, 0, 60);
    this.c.circle.x = 80;
    this.c.circle.y = 80;
    this.c.text = new this.cj.Text('Hello World', '100 8px Orbitron', '#fff');
    this.c.text.x = 10;
    this.c.text.y = 10;
    this.c.text.textBaseline = 'alphabetic';
    this.c.stage.addChild(this.c.circle);
    this.c.stage.addChild(this.c.text);
    this.c.stage.update();
  }

  render() {
    return (
      <div>
        <canvas
          id="demoCanvas"
          width="700"
          height="200"
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            border: '1px dotted #fff',
          }}
        ></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
