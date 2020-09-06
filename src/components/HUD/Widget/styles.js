export default class Style {
  static classes() {
    return {
      корневой: {
        position: 'relative',
        display: 'inline-block',
        textAlign: 'left',
        height: 50,
        width: 185,
        marginBottom: 30,
        verticalAlign: 'top',
        '& svg': {
          margin: '10px 10px 5px 0px',
        },
      },

      // Пиктограмма виджета
      пиктограмма: {
        position: 'absolute',
      },
      фонСвернутойПиктограммы: {
        stroke: '#777',
        strokeWidth: '1px',
      },
      глифСвернутойПиктограммы: {
        stroke: '#fff',
        strokeWidth: '1px',
        fill: '#333',
        '&.hover': {
          fill: '#737351',
        },
      },
      фонРазвернутойПиктограммы: {
        stroke: '#f6f68d',
        strokeWidth: '0px',
        fill: '#f6f68d',
      },
      фонРазворачивающейсяПиктограммы: {
        stroke: 'white',
        strokeWidth: '0px',
        fill: 'white',
      },
      глифРазвернутойПиктограммы: {
        stroke: '#555',
        strokeWidth: '2.5px',
        fill: 'transparent',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },

      // Рамка виджета
      рамка: {
        position: 'absolute',
        top: -3,
        left: -3,
      },
      обводка: {
        strokeDasharray: '0 2000',
        stroke: '#fff',
        strokeWidth: 1.5,
        opacity: 0,
        fill: 'transparent',
      },
      уголОбводки: {
        stroke: '#fff',
        strokeWidth: 0.75,
        fill: 'transparent',
        strokeLinecap: 'square',
        strokeLinejoin: 'square',
      },
      контейнерУглаОбводки: {
        opacity: 0,
      },
      фонЗаголовка: {
        fill: 'rgba(255,255,255,1)',
        opacity: 0,
      },
      элементыУправленияЗаголовка: {
        fill: 'rgba(0,0,0,.15)',
        cursor: 'pointer',
        '&:hover': {
          fill: 'rgba(0,0,0,.25)',
        },
      },
      элементыУправленияЗаголовка_активные: {
        fill: 'rgba(0,0,0,.25)',
      },
      пиктограммаЗакрытия: {
        fill: 'transparent',
        stroke: 'rgba(255,255,255,1)',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      пиктограммаЗакрытияФон: {
        fill: 'rgba(255,255,255,1)',
      },

      фонСодержания: {
        fill: 'rgba(255,255,255,1)',
        opacity: 0,
      },

      // Контейнер содержания
      контейнерСодержания: {
        position: 'absolute',
        top: 11,
        left: 0,
        width: 175, //330,
        height: 31, //340,
        backgroundColor: 'rgba(255,255,0,.0)', //backgroundColor: 'rgba(255,255,0,.5)',
        overflow: 'hidden',
      },

      // Заголовок виджета
      надзаголовок: {
        position: 'absolute',
        top: -13,
        right: 20,
        color: '#bbb',
        fontSize: 7,
        fontWeight: 700,
        fontFamily: 'Orbitron',
        opacity: 0,
        textShadow: '1px 1px 2px rgba(0,0,0,.75)',
        '& .тег': {
          display: 'inline-block',
          padding: '0 3px',
          color: 'rgba(255,255,255,1)',
          backgroundColor: 'rgba(196, 196, 126, 0.45)', //'rgba(255,255,255,.35)',
          textShadow: '0 0 0px rgba(0,0,0,.5)',
        },
        '& .маркер': {
          position: 'absolute',
          width: 3,
          height: 3,
          backgroundColor: 'rgba(255,255,255,.9)',
          right: -8,
          bottom: -2,
        },
      },
      заголовок: {
        position: 'absolute',
        top: 0,
        left: 40,
        right: 40,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        '& .символ': {
          color: '#000',
          fontSize: 19,
          lineHeight: '31px',
          fontWeight: 700,
          fontFamily: 'Orbitron',
          opacity: 0,
          textShadow: '1px 1px 2px rgba(0,0,0,.75)',
        },
      },
      кнопкаЗакрытия: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 32,
        height: 31,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        cursor: 'pointer',
        visibility: 'hidden',
      },

      // Содержание виджета
      содержание: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 255, 0, 0)', // backgroundColor: 'rgba(0, 255, 0, 0.5)',
        top: 32,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 1,
        overflow: 'hidden',
      },

      // Подвал виджета
      подвал: {
        position: 'absolute',
        bottom: -31,
        left: 20,
        color: 'rgba(255,255,255,.7)',
        fontSize: 10,
        fontWeight: 700,
        fontFamily: 'Orbitron',
        opacity: 0,
        textShadow: '1px 1px 2px rgba(0,0,0,.75)',
        '& .тег': {
          display: 'inline-block',
          padding: '0 5px',
          color: 'rgba(255,255,255,1)',
          backgroundColor: 'rgba(196, 196, 126, 0.45)', //'rgba(255,255,255,.35)',
          textShadow: '0 0 0px rgba(0,0,0,.5)',
        },
        '& .маркер': {
          position: 'absolute',
          width: 4,
          height: 4,
          backgroundColor: 'rgba(255,255,255,.7)',
          left: -9,
          top: -4,
        },
        '& .подзаголовок': {
          color: 'rgba(255,255,255,.9)',
        },
      },

      // Подпись пиктограммы
      подпись: {
        top: 0,
        left: 0,
        color: '#fff',
        cursor: 'pointer',
        position: 'absolute',
        fontSize: 20,
        fontFamily: 'Orbitron',
        lineHeight: '20px',
        display: 'inline-block',
        paddingTop: 5,
        paddingLeft: 40,
        paddingBottom: 5,
        whiteSpace: 'no-wrap',
      },
      текстПодписи: {
        '&:hover': {
          borderBottom: '1px solid #fff',
        },
      },
    };
  }
}