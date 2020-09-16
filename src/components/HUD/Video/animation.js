/*eslint no-extra-bind: "off"*/
/*eslint no-useless-constructor: "off"*/
/*eslint no-labels: "off"*/
/*eslint no-unused-labels: "off"*/

import settingsIcon from './settings-solid.png';

export default class Animate {
  constructor() {}

  static createAnimation() {
    this.c.stage = new this.cj.Stage('demoCanvasSchema');

    var x1 = 230;
    var y1 = 96;
    var x2 = 120;
    var y2 = 86;

    var fadeDelay = 500;
    var fadeTime = 500;
    var fadeDelay2 = 1500;
    var fadeTime2 = 500;
    var moveDelay = 500;
    var moveTime = 5000;

    grid: {
      this.c.grid = new this.cj.Shape();
      this.c.grid.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(230,230,230,.1)')
        .beginFill('rgba(255,255,255,0)');
      this.c.grid.alpha = 0;
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 11; j++) {
          this.c.grid.graphics.drawRect(20 * i + 12.5, 20 * j + 9.5, 20, 20);
        }
      }
      this.c.stage.addChild(this.c.grid);
      this.c.stage.update();
    }

    line: {
      this.c.line = new this.cj.Shape();
      this.c.line.shape = this.c.line.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(230,230,230,1)')
        .moveTo(331.5, 29.5)
        .lineTo(x1, y1).command;
      this.c.line.alpha = 0;
      this.c.stage.addChild(this.c.line);
      this.c.stage.update();
    }

    console.log(this.c.line);

    circle: {
      this.c.circle = new this.cj.Shape();
      this.c.circle.shape = this.c.circle.graphics
        .beginFill('rgba(240,240,240,1)')
        .drawCircle(x1, y1, 4).command;
      this.c.circle.alpha = 0;
      this.c.stage.addChild(this.c.circle);
      this.c.stage.update();
    }

    rect: {
      this.c.rect = new this.cj.Shape();
      this.c.rect.shape = this.c.rect.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(230,230,230,1)')
        .beginFill('rgba(255,255,255,.4)')
        .drawRect(331.5, 9.5, 80, 20).command;
      this.c.rect.alpha = 0;
      this.c.stage.addChild(this.c.rect);
      this.c.stage.update();
    }

    topCaption: {
      this.c.topCaption = new this.cj.Text(
        'SWITCH',
        '800 15px Orbitron',
        'rgba(255,255,255,.8)'
      );
      this.c.topCaption.shadow = new this.cj.Shadow('rgba(0,0,0,.9)', 3, 3, 5);
      this.c.topCaption._size = 35;
      this.c.topCaption._weight = 300;
      this.c.topCaption.alpha = 0;
      this.c.topCaption.x = 372.5;
      this.c.topCaption.y = 24.5;
      this.c.topCaption.textAlign = 'center';
      this.c.topCaption.textBaseline = 'alphabetic';
      this.c.stage.addChild(this.c.topCaption);
      this.c.stage.update();
    }

    rect2: {
      this.c.rect2 = new this.cj.Shape();
      this.c.rect2.shape = this.c.rect2.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(230,230,230,1)')
        .beginFill('rgba(0,255,0,.10)')
        .drawRect(331.5, 29.5, 80, 12).command;
      this.c.rect2.alpha = 0;
      this.c.stage.addChild(this.c.rect2);
      this.c.stage.update();
    }

    bottomCaption: {
      this.c.bottomCaption = new this.cj.Text(
        'status: ON',
        '700 10px Orbitron',
        'rgba(255,255,255,.8)'
      );
      this.c.bottomCaption.shadow = new this.cj.Shadow(
        'rgba(0,0,0,.9)',
        3,
        3,
        5
      );
      this.c.bottomCaption._size = 35;
      this.c.bottomCaption._weight = 300;
      this.c.bottomCaption.alpha = 0;
      this.c.bottomCaption.x = 370.5;
      this.c.bottomCaption.y = 38.5;
      this.c.bottomCaption.textAlign = 'center';
      this.c.bottomCaption.textBaseline = 'alphabetic';
      this.c.stage.addChild(this.c.bottomCaption);
      this.c.stage.update();
    }

    animation: {
      grid: {
        this.c.tween00 = this.cj.Tween.get(this.c.grid, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay)
          .to({ alpha: 1 }, fadeTime, this.cj.Ease.getPowInOut(4));
      }
      line: {
        this.c.tween01 = this.cj.Tween.get(this.c.line, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay)
          .to({ alpha: 1 }, fadeTime, this.cj.Ease.getPowInOut(4));
      }
      circle: {
        this.c.tween02 = this.cj.Tween.get(this.c.circle, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay)
          .to({ alpha: 1 }, fadeTime, this.cj.Ease.getPowInOut(4));
      }
      rect: {
        this.c.tween03 = this.cj.Tween.get(this.c.rect, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay)
          .to({ alpha: 1 }, fadeTime, this.cj.Ease.getPowInOut(4));
      }
      caption: {
        this.c.tween04 = this.cj.Tween.get(this.c.topCaption, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay)
          .to({ alpha: 1 }, fadeTime, this.cj.Ease.getPowInOut(4));
      }
      rect2: {
        this.c.tween05 = this.cj.Tween.get(this.c.rect2, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay2)
          .to({ alpha: 1 }, fadeTime2, this.cj.Ease.getPowInOut(4));
      }
      caption2: {
        this.c.tween06 = this.cj.Tween.get(this.c.bottomCaption, {
          loop: false,
          paused: true,
        })
          .wait(fadeDelay2)
          .to({ alpha: 1 }, fadeTime2, this.cj.Ease.getPowInOut(4));
      }
      line: {
        this.c.tween1 = this.cj.Tween.get(this.c.line.shape, {
          loop: false,
          paused: true,
        })
          .wait(moveDelay)
          .to({ x: x2, y: y2 }, moveTime, this.cj.Ease.getPowIn(2));
      }
      circle: {
        this.c.tween2 = this.cj.Tween.get(this.c.circle.shape, {
          loop: false,
          paused: true,
        })
          .wait(moveDelay)
          .to({ x: x2, y: y2 }, moveTime, this.cj.Ease.getPowIn(2));
      }
    }

    this.cj.Ticker.framerate = 50;
    this.cj.Ticker.addEventListener('tick', this.c.stage);
  }

  static startAnimation() {
    this.c.tween00.paused = false;
    this.c.tween01.paused = false;
    this.c.tween02.paused = false;
    this.c.tween03.paused = false;
    this.c.tween04.paused = false;
    this.c.tween05.paused = false;
    this.c.tween06.paused = false;
    this.c.tween1.paused = false;
    this.c.tween2.paused = false;
  }

  static c;
  static cj;
  static setState;
}
