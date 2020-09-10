/*eslint no-labels: "off"*/
/*eslint no-unused-labels: "off"*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import settingsIcon from './settings-solid.png';

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

    settings: {
      this.c.settingsIcon = new this.cj.Bitmap(settingsIcon);
      this.c.settingsIcon.alpha = 0.25;
      //   this.c.settingsIcon.scaleY = 0.25;
      //   this.c.settingsIcon.scaleX = 0.25;

      this.c.stage.addChild(this.c.settingsIcon);
    }

    text: {
      this.c.text = new this.cj.Text(
        'Hello World',
        '100 10px Orbitron',
        'rgba(0,0,0,.5)'
      );
      this.c.text._size = 10;
      this.c.text._weight = 100;
      this.c.text.x = 200;
      this.c.text.y = 50;
      this.c.text.textBaseline = 'alphabetic';
      this.c.stage.addChild(this.c.text);
    }

    text2: {
      this.c.text2 = new this.cj.Text(
        '[TEMP]',
        '100 10px Saira Condensed',
        'rgba(0,0,0,.8)'
      );
      this.c.text2._size = 10;
      this.c.text2._weight = 100;
      this.c.text2.x = 400;
      this.c.text2.y = 50;
      this.c.text2.textBaseline = 'alphabetic';
      this.c.stage.addChild(this.c.text2);
    }

    circle: {
      this.c.circle = new this.cj.Shape();
      this.c.circle.graphics
        .beginFill('rgba(255,255,255,.5)')
        .drawCircle(0, 0, 60);
      this.c.circle.x = 80;
      this.c.circle.y = 80;
      this.c.circle.cache(-100, -100, 200, 200);
      this.c.stage.addChild(this.c.circle);
      this.c.stage.update();
    }

    grid: {
      this.c.grid = new this.cj.Shape();
      this.c.grid.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(0,0,0,.2)')
        .beginFill('rgba(255,255,255,0)');
      for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 8; j++) {
          this.c.grid.graphics.drawRect(30 * i + 5.5, 30 * j + 5.5, 25, 25);
        }
      }
      this.c.stage.addChild(this.c.grid);
    }

    label: {
      this.c.label = new this.cj.Shape();
      this.c.label.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(255,0,0,.85)')
        .beginFill('rgba(255,0,0,.5)');
      this.c.label.graphics.drawRect(15.5, 15.5, 100, 50);
      this.c.label.shadow = new this.cj.Shadow('rgba(255,0,0,.7)', 10, 10, 5);
      this.c.stage.addChild(this.c.label);
    }

    animation: {
      circle: {
        this.c.tween = this.cj.Tween.get(this.c.circle, { loop: true })
          .to({ x: 400 }, 100, this.cj.Ease.getPowInOut(4))
          .to({ alpha: 0, y: 175 }, 500, this.cj.Ease.getPowInOut(2))
          .to({ alpha: 0, y: 225 }, 100)
          .to({ alpha: 1, y: 200 }, 500, this.cj.Ease.getPowInOut(2))
          .to({ x: 80 }, 800, this.cj.Ease.getPowInOut(2))
          .to({ y: 80 }, 800, this.cj.Ease.getPowInOut(2));
      }

      shadow: {
        this.c.tween2 = this.cj.Tween.get(this.c.label.shadow, { loop: true })
          .to(
            { offsetX: 0, offsetY: 0, blur: 1 },
            500,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000)
          .to(
            { offsetX: 10, offsetY: 10, blur: 5 },
            500,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000);
      }

      label: {
        this.c.tween3 = this.cj.Tween.get(this.c.label, { loop: true })
          .to({ x: 10, y: 10 }, 500, this.cj.Ease.getPowInOut(2))
          .wait(2000)
          .to({ x: 0, y: 0 }, 500, this.cj.Ease.getPowInOut(2))
          .wait(2000);
      }

      text: {
        this.c.tween4 = this.cj.Tween.get(this.c.text, { loop: true })
          .to(
            { _size: 20, _weight: 700 /*font: '100 10px Orbitron'*/ },
            500,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000)
          .to(
            { _size: 10, _weight: 100 /*font: '700 20px Orbitron'*/ },
            500,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000)
          .on('change', (e) => {
            this.c.text.font =
              this.c.text._weight + ' ' + this.c.text._size + 'px Orbitron';
          });
      }

      text2: {
        this.c.tween5 = this.cj.Tween.get(this.c.text2, { loop: true })
          .to(
            { _size: 30, _weight: 300 /*font: '100 10px Orbitron'*/ },
            500,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000)
          .to(
            { _size: 10, _weight: 100 /*font: '700 20px Orbitron'*/ },
            500,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000)
          .on('change', (e) => {
            this.c.text2.font =
              this.c.text2._weight +
              ' ' +
              this.c.text2._size +
              'px Saira Condensed';
          });
      }

      this.cj.Ticker.framerate = 50;
      this.cj.Ticker.addEventListener('tick', this.c.stage);
    }
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
            border: '0px dotted #fff',
            margin: '25px auto',
            display: 'block',
            backgroundColor: 'rgba(225,225,225, 1)',
            boxShadow: '1px 1px 5px rgba(0,0,0,.8)',
          }}
        ></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
