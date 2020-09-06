/*eslint no-extra-bind: "off"*/
/*eslint no-useless-constructor: "off"*/

import openSound from '../kbryjr_ui-130.wav';
import openingSound from '../mk9frs_ui-140.wav';

export default class Animate {
  constructor() {}

  static createAnimation() {
    let setup = {
      repeat: 0,
      yoyo: false,
      repeatDelay: 2,
      delay: 2,
      paused: true,
      defaults: {
        duration: 1,
      },
    };

    this.openSoundAudio = new Audio(openSound);
    this.openSoundAudio.volume = '0.55';
    this.openingSoundAudio = new Audio(openingSound);
    this.openingSoundAudio.volume = '0.75';

    this.frameTimeline = window['gsap'].timeline({
      ...setup,
      delay: 0,
    });
    this.headerTimeline = window['gsap'].timeline({
      ...setup,
      delay: 0,
    });

    let Obj = {
      size: 0,
      o: 1,
      width: 0,
      height: 0,
      o1: 1,
      o2: 1,
      o3: 0,
      mr: 10,
    };
    let newSize = 100;
    let newWidth = this.props.width;
    let newHeight = this.props.height;
    let svgWidth = 38;
    let svgHeight = 39;

    this.frameTimeline.to(Obj, 0.5, {
      size: newSize,
      o: 0,
      onStart: function () {
        this.delay(50).then(() => this.openSoundAudio.play());
        this.setState({
          active: false,
          switching: false,
        });
        this.r.обводка.style.opacity = 1;
      }.bind(this),
      onReverseComplete: function () {
        this.setState({
          active: false,
          switching: false,
        });
        this.r.обводка.style.opacity = 0;
        if (this.props.onCloseComplete) this.props.onCloseComplete();
      }.bind(this),
      onUpdate: function () {
        if (
          (Obj.size > 0 && Obj.size < 5) ||
          (Obj.size > 10 && Obj.size < 15) ||
          (Obj.size > 25 && Obj.size < 30) ||
          (Obj.size > 35 && Obj.size < 40) ||
          (Obj.size > 45 && Obj.size < 50) ||
          (Obj.size > 55 && Obj.size < 60)
        ) {
          this.setState({
            active: false,
          });
        } else {
          this.setState({
            active: true,
          });
          if (Obj.size > 80) {
            this.setState({
              switching: false,
            });
          }
        }
        this.r.обводка.style.strokeDasharray = Obj.size * 1.5 + ' 2000';
        this.r.подпись.style.opacity = Obj.o;
      }.bind(this),
      onComplete: function () {
        this.r.текстПодписи.style.display = 'none';
      }.bind(this),
    });

    this.frameTimeline.to(Obj, 0.5, {
      width: newWidth,
      o1: 0.4,
      mr: 30,
      onStart: function () {
        this.r.обводка.style.opacity = '0';
        this.r.уголОбводки1.style.opacity = '1';
        this.r.уголОбводки2.style.opacity = '1';
        this.r.уголОбводки3.style.opacity = '1';
        this.r.уголОбводки4.style.opacity = '1';
        this.r.рамкаПиктограммы1.style.opacity = 1;
        this.r.рамкаПиктограммы2.style.opacity = 0;
        this.r.контейнерСодержания.style.overflow = 'visible';
        this.delay(150).then(() => this.openingSoundAudio.play());
      }.bind(this),
      onReverseComplete: function () {
        this.r.обводка.style.opacity = '1';
        this.r.уголОбводки1.style.opacity = '0';
        this.r.уголОбводки2.style.opacity = '0';
        this.r.уголОбводки3.style.opacity = '0';
        this.r.уголОбводки4.style.opacity = '0';
        this.r.фонЗаголовка.style.opacity = 0;
        this.r.рамкаПиктограммы1.style.opacity = 0;
        this.r.рамкаПиктограммы2.style.opacity = 1;
        this.r.контейнерСодержания.style.overflow = 'hidden';
        this.r.текстПодписи.style.display = 'inline-block';
        this.delay(250).then(() => this.openSoundAudio.play());
      }.bind(this),
      onUpdate: function () {
        this.r.рамка.setAttributeNS(null, 'width', svgWidth + Obj.width);
        this.r.рамка.setAttributeNS(
          null,
          'viewBox',
          '0 0 ' + (svgWidth + Obj.width) + ' ' + svgHeight
        );
        if (svgWidth + Obj.width > 38) {
          this.r.фонЗаголовка.style.opacity = 1;
        }
        this.r.уголОбводки2.setAttributeNS(null, 'x', Obj.width);
        this.r.уголОбводки3.setAttributeNS(null, 'x', Obj.width);
        this.r.фонЗаголовка.style.fill = 'rgba(255,255,255,' + Obj.o1 + ')';
        if (Obj.width + 50 > this.state.titleWidth) {
          this.r.корневой.style.width = Obj.width + 50 + 'px';
          this.r.контейнерСодержания.style.width = Obj.width + 30 + 'px';
        } else {
          this.r.корневой.style.width = this.state.titleWidth + 'px';
          this.r.контейнерСодержания.style.width = this.state.titleWidth + 'px';
        }
        // this.r.корневой.style.marginRight = Obj.mr + 'px';
      }.bind(this),
      onComplete: function () {
        this.r.кнопкаЗакрытия.style.visibility = 'visible';
        this.headerTimeline.play();
      }.bind(this),
    });

    this.frameTimeline.to(Obj, 0.5, {
      height: newHeight,
      o2: 0.1,
      o3: 1,
      onReverseComplete: function () {
        this.r.фонСодержания.style.opacity = 0;
        this.delay(150).then(() => this.openingSoundAudio.play());
        this.r.кнопкаЗакрытия.style.visibility = 'hidden';
        this.headerTimeline.reverse();
      }.bind(this),
      onUpdate: function () {
        this.r.рамка.setAttributeNS(null, 'height', svgHeight + Obj.height);
        this.r.рамка.setAttributeNS(
          null,
          'viewBox',
          '0 0 ' + (svgWidth + Obj.width) + ' ' + (svgHeight + Obj.height)
        );
        if (svgHeight + Obj.height > 38) {
          this.r.фонСодержания.style.opacity = 1;
        }
        this.r.уголОбводки3.setAttributeNS(null, 'y', Obj.height);
        this.r.уголОбводки4.setAttributeNS(null, 'y', Obj.height);
        this.r.фонСодержания.style.fill = 'rgba(255,255,255,' + Obj.o2 + ')';
        this.r.корневой.style.height = Obj.height + 50 + 'px';
        this.r.контейнерСодержания.style.height = Obj.height + 31 + 'px';
        this.r.подвал.style.opacity = Obj.o3;
        this.r.надзаголовок.style.opacity = Obj.o3;
      }.bind(this),
      onComplete: function () {
        this.r.содержание.style.opacity = '1';
        if (this.props.onOpenComplete) this.props.onOpenComplete();
      }.bind(this),
    });

    this.headerTimeline.to(this.r.заголовок.childNodes, 0.25, {
      opacity: 1,
      color: '#fff',
      fontSize: 19,
      yoyo: true,
      repeat: 0,
      ease: 'power1.inOut',
      delay: 0,
      stagger: {
        amount: 0.5,
        from: '0',
      },
    });
  }
  static openWidget() {
    if (!this.frameTimeline.isActive()) {
      this.frameTimeline.play();
    }
  }
  static closeWidget() {
    if (!this.frameTimeline.isActive()) {
      this.frameTimeline.reverse();
    }
  }
}
