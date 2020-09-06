/*eslint no-extra-bind: "off"*/
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Animate from './animation.js';
import Style from './styles.js';
import UILogic from './uilogic.js';

const styles = (theme) => Style.classes();

class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      switching: true,
      closeHover: false,
      labelHover: false,
      titleWidth: 185,
    };

    this.r = {};

    this.createAnimation = Animate.createAnimation.bind(this);
    this.openWidget = Animate.openWidget.bind(this);
    this.closeWidget = Animate.closeWidget.bind(this);

    this.initUIElements = UILogic.init.bind(this);
  }

  async componentDidMount() {
    this.createAnimation();
    this.delay(1).then(() => this.initUIElements());
    this.delay(1000).then(() => this.initUIElements());
  }

  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  render() {
    const { classes } = this.props;

    const letters = this.props.title
      .toUpperCase()
      .split('')
      .map((char, index) => {
        return (
          <span key={index} className="символ">
            {char}
          </span>
        );
      });

    return (
      <div
        className={classes.корневой}
        ref={(div) => {
          this.r.корневой = div;
        }}
      >
        <svg
          className={classes.рамка}
          width="38"
          height="39"
          viewBox="0 0 38 39"
          ref={(svg) => {
            this.r.рамка = svg;
          }}
        >
          <path
            ref={(path) => {
              this.r.обводка = path;
            }}
            d="M1 1 H 37 V 38 H 1 V1"
            className={classes.обводка}
          />
          <svg
            className={classes.контейнерУглаОбводки}
            x="0"
            y="0.75"
            ref={(svg) => {
              this.r.уголОбводки1 = svg;
            }}
          >
            <path d="M1 19 V1 H17" className={classes.уголОбводки} />
          </svg>
          <svg
            className={classes.контейнерУглаОбводки}
            x="0"
            y="0.75"
            ref={(svg) => {
              this.r.уголОбводки2 = svg;
            }}
          >
            <path d="M19 1 H37 V19" className={classes.уголОбводки} />
          </svg>
          <svg
            className={classes.контейнерУглаОбводки}
            x="0"
            y="0"
            ref={(svg) => {
              this.r.уголОбводки3 = svg;
            }}
          >
            <path d="M37 19 V38 H18" className={classes.уголОбводки} />
          </svg>
          <svg
            className={classes.контейнерУглаОбводки}
            x="0"
            y="0"
            ref={(svg) => {
              this.r.уголОбводки4 = svg;
            }}
          >
            <path d="M17 38 H1 V19" className={classes.уголОбводки} />
          </svg>
          <rect
            className={classes.фонЗаголовка}
            ref={(rect) => {
              this.r.фонЗаголовка = rect;
            }}
            x="35"
            y="4"
            width="299"
            height="31"
          ></rect>
          <svg
            x="303"
            y="5"
            ref={(rect) => {
              this.r.контейнерПиктограммыЗакрытия = rect;
            }}
          >
            <path
              d="M6.5 6.5 L24 24 V6 L6.5 23.5"
              className={classes.пиктограммаЗакрытия}
            />
            <path
              d="M15 15 L24 24 V6 Z"
              className={classes.пиктограммаЗакрытияФон}
            />
          </svg>
          <rect
            className={
              this.state.closeHover
                ? classes.элементыУправленияЗаголовка_активные
                : classes.элементыУправленияЗаголовка
            }
            ref={(rect) => {
              this.r.элементыУправленияЗаголовка = rect;
            }}
            x="302"
            y="4"
            width="31"
            height="31"
          ></rect>
          <rect
            className={classes.фонСодержания}
            ref={(rect) => {
              this.r.фонСодержания = rect;
            }}
            x="3"
            y="34"
            width="332"
            height="312"
          ></rect>
        </svg>
        <svg
          className={classes.пиктограмма}
          width="32"
          height="33"
          viewBox="0 0 32 33"
          ref={(svg) => {
            this.r.пиктограмма = svg;
          }}
        >
          <path
            ref={(path) => {
              this.r.рамкаПиктограммы1 = path;
            }}
            style={{ opacity: 0 }}
            d="M1 1 H31 V32 H1 V1"
            className={
              this.state.active
                ? this.state.switching
                  ? classes.фонРазворачивающейсяПиктограммы
                  : classes.фонРазвернутойПиктограммы
                : classes.фонСвернутойПиктограммы
            }
          />
          <path
            ref={(path) => {
              this.r.рамкаПиктограммы2 = path;
            }}
            style={{ opacity: 1 }}
            d="M1 4 L 4 1 H 28 L 31 4 V 29 L 28 32 H 4 L 1 29 V4"
            className={
              this.state.active
                ? this.state.switching
                  ? classes.фонРазворачивающейсяПиктограммы
                  : classes.фонРазвернутойПиктограммы
                : classes.фонСвернутойПиктограммы
            }
          />
          <path
            d={this.props.icon}
            className={
              (this.state.active
                ? classes.глифРазвернутойПиктограммы
                : classes.глифСвернутойПиктограммы) +
              (this.state.labelHover ? ' hover' : '')
            }
          />
        </svg>
        <div
          className={classes.контейнерСодержания}
          ref={(div) => {
            this.r.контейнерСодержания = div;
          }}
        >
          <div
            className={classes.надзаголовок}
            ref={(div) => {
              this.r.надзаголовок = div;
            }}
          >
            <div className="маркер"></div>
            <div>
              <span className="тег">Rev. {this.props.revision}</span> 04.09.2020
            </div>
          </div>
          <div
            className={classes.заголовок}
            ref={(div) => {
              this.r.заголовок = div;
            }}
          >
            {letters}
          </div>
          <div
            className={classes.кнопкаЗакрытия}
            ref={(div) => {
              this.r.кнопкаЗакрытия = div;
            }}
            onClick={this.closeWidget}
          ></div>
          <div
            className={classes.содержание}
            ref={(div) => {
              this.r.содержание = div;
            }}
          >
            {this.props.children}
          </div>
          <div
            className={classes.подвал}
            ref={(div) => {
              this.r.подвал = div;
            }}
          >
            <div className="маркер"></div>
            <div>
              Demo HUD <span className="тег">v{this.props.version}</span>
            </div>
            <div className="подзаголовок">{this.props.title}</div>
          </div>
          <span
            className={classes.подпись}
            ref={(span) => {
              this.r.подпись = span;
            }}
            onClick={this.openWidget}
          >
            <span
              className={classes.текстПодписи}
              ref={(span) => {
                this.r.текстПодписи = span;
              }}
            >
              {this.props.title}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Widget);
