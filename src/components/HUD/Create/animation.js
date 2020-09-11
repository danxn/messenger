/*eslint no-extra-bind: "off"*/
/*eslint no-useless-constructor: "off"*/
/*eslint no-labels: "off"*/
/*eslint no-unused-labels: "off"*/

import settingsIcon from './settings-solid.png';

export default class Animate {
  constructor() {}

  static createAnimation() {
    this.c.stage = new this.cj.Stage('demoCanvas');

    circle: {
      this.c.circle = new this.cj.Shape();
      this.c.circle.shape = this.c.circle.graphics
        .beginFill('rgba(240,240,240,1)')
        .drawCircle(350, 100, 60).command;
      //   this.c.circle.cache(-100, -100, 200, 200);
      this.c.stage.addChild(this.c.circle);
      this.c.stage.update();
    }

    rect: {
      this.c.rect = new this.cj.Shape();
      this.c.rect.shape = this.c.circle.graphics
        .beginFill('rgba(240,240,240,1)')
        .drawRect(305, 28, 0, 58).command;
      this.c.stage.addChild(this.c.rect);
      this.c.stage.update();
    }

    grid: {
      this.c.grid = new this.cj.Shape();
      this.c.grid.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(230,230,230,1)')
        .beginFill('rgba(255,255,255,0)');
      for (let i = 0; i < 66; i++) {
        for (let j = 0; j < 18; j++) {
          this.c.grid.graphics.drawRect(10 * i + 18.5, 10 * j + 10.5, 10, 10);
        }
      }
      this.c.stage.addChild(this.c.grid);
    }

    settings: {
      icon: {
        this.c.settingsIcon = new this.cj.Bitmap(settingsIcon);
        this.c.settingsIcon.alpha = 0.0;
        this.c.settingsIcon.scaleX = 0.1;
        this.c.settingsIcon.scaleY = 0.1;
        this.c.settingsIcon.x = 237;
        this.c.settingsIcon.y = 56;
        this.c.settingsIcon.regX = 128;
        this.c.settingsIcon.regY = 128;

        this.c.settingsIcon.shadow = new this.cj.Shadow(
          'rgba(0,0,0,.45)',
          3,
          3,
          5
        );

        this.c.stage.addChild(this.c.settingsIcon);
      }
      frame: {
        this.c.settingsFrame = new this.cj.Shape();
        this.c.settingsFrame.graphics
          .setStrokeStyle(1, 'round')
          .beginStroke('rgba(0,0,0,.95)');
        this.c.settingsFrame.rect = this.c.settingsFrame.graphics.drawRect(
          217,
          37,
          39,
          39
        ).command;
        this.c.settingsFrame.shadow = new this.cj.Shadow(
          'rgba(0,0,0,.85)',
          3,
          3,
          5
        );
        this.c.settingsFrame.alpha = 0.0;

        this.c.stage.addChild(this.c.settingsFrame);
      }
    }

    sensor: {
      circle: {
        this.c.sensorCircle = new this.cj.Shape();
        this.c.sensorCircle.graphics
          .setStrokeStyle(2, 'round')
          .beginStroke('rgba(100,100,100,1)')
          .drawCircle(0, 0, 60);
        this.c.sensorCircle.x = 350;
        this.c.sensorCircle.y = 100;
        this.c.sensorCircle.cache(-100, -100, 200, 200);
        this.c.stage.addChild(this.c.sensorCircle);
        this.c.stage.update();
      }
      sideCaption: {
        this.c.sideCaption = new this.cj.Text(
          '20',
          '300 35px Saira Condensed',
          'rgba(0,0,0,.8)'
        );
        this.c.sideCaption._size = 35;
        this.c.sideCaption._weight = 300;
        this.c.sideCaption.x = 280;
        this.c.sideCaption.y = 68;
        this.c.sideCaption.textAlign = 'center';
        this.c.sideCaption.textBaseline = 'alphabetic';
        this.c.stage.addChild(this.c.sideCaption);
      }
      topCaption: {
        this.c.topCaption = new this.cj.Text(
          'TT',
          '300 35px Saira Condensed',
          'rgba(0,0,0,.8)'
        );
        this.c.topCaption._size = 35;
        this.c.topCaption._weight = 300;
        this.c.topCaption.x = 350;
        this.c.topCaption.y = 83;
        this.c.topCaption.textAlign = 'center';
        this.c.topCaption.textBaseline = 'alphabetic';
        this.c.stage.addChild(this.c.topCaption);
      }
      bottomCaption: {
        this.c.bottomCaption = new this.cj.Text(
          '1062',
          '300 35px Saira Condensed',
          'rgba(0,0,0,.8)'
        );
        this.c.bottomCaption._size = 35;
        this.c.bottomCaption._weight = 300;
        this.c.bottomCaption.x = 350;
        this.c.bottomCaption.y = 138;
        this.c.bottomCaption.textAlign = 'center';
        this.c.bottomCaption.textBaseline = 'alphabetic';
        this.c.stage.addChild(this.c.bottomCaption);
      }
    }

    label: {
      this.c.label = new this.cj.Shape();
      this.c.label.graphics
        .setStrokeStyle(1, 'round')
        .beginStroke('rgba(255,0,0,.85)')
        .beginFill('rgba(255,0,0,.75)');
      this.c.label.rect = this.c.label.graphics.drawRect(
        310.5,
        87.5,
        80,
        20
      ).command;
      this.c.label.shadow = new this.cj.Shadow('rgba(150,0,0,.25)', 1, 1, 3);
      this.c.stage.addChild(this.c.label);
    }

    labelCaption: {
      this.c.labelCaption = new this.cj.Text(
        '50.04 °C',
        '700 12px Orbitron',
        'rgba(255,255,255,1)'
      );
      this.c.labelCaption._size = 12;
      this.c.labelCaption._weight = 700;
      this.c.labelCaption.x = 350;
      this.c.labelCaption.y = 102;
      this.c.labelCaption.textAlign = 'center';
      this.c.labelCaption.textBaseline = 'alphabetic';
      this.c.stage.addChild(this.c.labelCaption);
    }

    animation: {
      circle: {
        this.c.tween = this.cj.Tween.get(this.c.circle.shape, {
          loop: false,
          paused: true,
        })
          .wait(2000)
          .to({ radius: 72 }, 500, this.cj.Ease.getPowInOut(4));
      }

      rect: {
        this.c.tween1 = this.cj.Tween.get(this.c.rect.shape, {
          loop: false,
          paused: true,
        })
          .wait(2500)
          .to({ x: 42, w: 308 }, 1000, this.cj.Ease.getPowInOut(4));
      }

      labelRect: {
        labelCaption: {
          this.c.tween32 = this.cj.Tween.get(this.c.labelCaption, {
            loop: false,
            paused: true,
          })
            .to(
              { _size: 26, _weight: 700, x: 350, y: 107 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(2000)
            .to(
              { _size: 26, _weight: 700, x: 345, y: 102 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(0)
            .to(
              { _size: 26, _weight: 700, x: 345, y: 65 },
              500,
              this.cj.Ease.getPowInOut(2)
            )
            .to(
              { _size: 26, _weight: 700, x: 133, y: 65 },
              500,
              this.cj.Ease.getPowInOut(2)
            );
          this.c.tween32.on('change', (e) => {
            this.c.labelCaption.font =
              this.c.labelCaption._weight +
              ' ' +
              this.c.labelCaption._size +
              'px Orbitron';
          });
        }
        labelBG: {
          this.c.tween31 = this.cj.Tween.get(this.c.label.rect, {
            loop: false,
            paused: true,
          })
            .to(
              { x: 270.5, y: 77.5, w: 160, h: 40 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(2000);
        }
      }

      sensor: {
        topCaption: {
          this.c.tween6 = this.cj.Tween.get(this.c.topCaption, {
            loop: false,
            paused: true,
          })
            .to(
              { _size: 25, _weight: 300, x: 350, y: 70 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(2000)
            .to(
              { _size: 35, _weight: 300, x: 350, y: 83 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(2000);
          this.c.tween6.on('change', (e) => {
            this.c.topCaption.font =
              this.c.topCaption._weight +
              ' ' +
              this.c.topCaption._size +
              'px Saira Condensed';
          });
        }
        bottomCaption: {
          this.c.tween7 = this.cj.Tween.get(this.c.bottomCaption, {
            loop: false,
            paused: true,
          })
            .to(
              { _size: 25, _weight: 300, x: 350, y: 145 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(2000)
            .to(
              { _size: 35, _weight: 300, x: 350, y: 138 },
              250,
              this.cj.Ease.getPowInOut(2)
            )
            .wait(2000);
          this.c.tween7.on('change', (e) => {
            this.c.bottomCaption.font =
              this.c.bottomCaption._weight +
              ' ' +
              this.c.bottomCaption._size +
              'px Saira Condensed';
          });
        }
      }

      label: {
        this.c.tween3 = this.cj.Tween.get(this.c.label, {
          loop: false,
          paused: true,
        })
          .to({ x: 0, y: 0 }, 250, this.cj.Ease.getPowInOut(2))
          .wait(2000)
          .to({ x: -5, y: -5 }, 250, this.cj.Ease.getPowInOut(2))
          .wait(0)
          .to({ x: -5, y: -41 }, 500, this.cj.Ease.getPowInOut(2))
          .to({ x: -218, y: -41 }, 500, this.cj.Ease.getPowInOut(2));
      }

      shadow: {
        this.c.tween2 = this.cj.Tween.get(this.c.label.shadow, {
          loop: false,
          paused: true,
        })
          .to(
            { offsetX: 0, offsetY: 0, blur: 1 },
            250,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000)
          .to(
            { offsetX: 5, offsetY: 5, blur: 3 },
            250,
            this.cj.Ease.getPowInOut(2)
          )
          .wait(2000);
      }

      settings: {
        icon: {
          this.c.tween8 = this.cj.Tween.get(this.c.settingsIcon, {
            loop: false,
            paused: true,
          })
            .wait(3500)
            .to({ alpha: 0.35 }, 250, this.cj.Ease.getPowInOut(2))
            .to(
              { alpha: 0.65, rotation: 90 },
              500,
              this.cj.Ease.getPowInOut(2)
            );
          this.c.tween8.on('complete', () => {
            this.setState({ completed: true });
          });
        }

        frame: {
          this.c.tween9 = this.cj.Tween.get(this.c.settingsFrame, {
            loop: false,
            paused: true,
          })
            .wait(3500)
            .to({ alpha: 0.9 }, 500, this.cj.Ease.getPowInOut(2));
        }
      }

      this.cj.Ticker.framerate = 50;
      this.cj.Ticker.addEventListener('tick', this.c.stage);
    }
  }

  static startAnimation() {
    this.c.tween31.paused = false;
    this.c.tween32.paused = false;
    this.c.tween6.paused = false;
    this.c.tween7.paused = false;
    this.c.tween3.paused = false;
    this.c.tween2.paused = false;
    this.c.tween8.paused = false;
    this.c.tween9.paused = false;
    this.c.tween1.paused = false;
    this.c.tween.paused = false;
  }
}
