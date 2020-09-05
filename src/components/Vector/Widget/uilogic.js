/*eslint no-extra-bind: "off"*/
/*eslint no-useless-constructor: "off"*/

export default class UILogic {
  constructor() {}

  static init() {
    const titleWidth = this.r.текстПодписи.offsetWidth;

    console.log(titleWidth);

    this.setState({ titleWidth: titleWidth + 60 }, () => {
      this.r.корневой.style.width = this.state.titleWidth + 'px';
      this.r.контейнерСодержания.style.width = this.state.titleWidth + 'px';
    });

    this.r.фонСодержания.setAttributeNS(
      null,
      'width',
      this.props.width * 1 + 31
    );

    this.r.фонЗаголовка.setAttributeNS(null, 'width', this.props.width * 1 + 0);

    this.r.фонСодержания.setAttributeNS(
      null,
      'height',
      this.props.height * 1 + 1
    );

    this.r.контейнерПиктограммыЗакрытия.setAttributeNS(
      null,
      'x',
      this.props.width * 1 + 4
    );

    this.r.элементыУправленияЗаголовка.setAttributeNS(
      null,
      'x',
      this.props.width * 1 + 4
    );

    this.r.кнопкаЗакрытия.onmouseover = (e) => {
      this.setState({ closeHover: true });
    };
    this.r.кнопкаЗакрытия.onmouseout = (e) => {
      this.setState({ closeHover: false });
    };
    this.r.подпись.onmouseover = (e) => {
      this.setState({ labelHover: true });
    };
    this.r.подпись.onmouseout = (e) => {
      this.setState({ labelHover: false });
    };
  }
}
