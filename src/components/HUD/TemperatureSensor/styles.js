export default class Style {
  static classes(theme) {
    return {
      корневой: {
        position: 'relative',
        display: 'block',
        textAlign: 'left',
        width: '100%',
        padding: '5px 10px 0 0',
        margin: '-2px 10px',
        verticalAlign: 'top',
        '& > p': {
          position: 'absolute',
          top: 60,
          left: 29,
          right: 25,
          bottom: 20,
          color: 'rgba(255,255,255,.9)',
          fontFamily: 'Saira Condensed',
          fontSize: '18px',
          textShadow: '0 0 2px #000',
          margin: '10px 0 0 0',
          lineHeight: '20px',
        },
      },
      superHeader: {
        position: 'absolute',
        top: '2px',
        left: '10px',
        right: '20px',
        fontFamily: 'Orbitron',
        fontSize: '10px',
        fontWeight: '700',
        color: '#fff',
        textShadow: '0 0 2px #000',
        letterSpacing: '3px',
        opacity: 0,
        textTransform: 'uppercase',
        textAlign: 'center',
      },
      header: {
        position: 'absolute',
        bottom: '-30px',
        left: '35px',
        fontFamily: 'Saira Condensed',
        fontSize: '23px',
        fontWeight: 500,
        color: '#fff',
        //textShadow: '0 0 2px #000',
        opacity: 1,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        '& .char': {
          opacity: 0,
        },
      },
    };
  }
}
