export default class Style {
  static classes() {
    return {
      корневой: {
        position: 'relative',
        display: 'inline-block',
        textAlign: 'left',
        // height: '100%',
        width: '100%',
        // margin: '20px 10px 0 40px',
        padding: '20px 10px 0 40px',
        verticalAlign: 'top',
        // backgroundColor: 'rgba(0,0,0,.15)',
        '& > p': {
          color: 'rgba(255,255,255,.9)',
          width: 160,
          fontFamily: 'Saira Condensed', //'Catamaran', //'Noto Sans SC', //'Questrial', //'Electrolize',
          fontSize: '18px',
          textShadow: '0 0 2px #000',
          margin: '10px 0 0 0',
          lineHeight: '23px',
        },
      },
      notabene: {
        display: 'inline-block',
        textShadow: '0 0 0 #000',
        fontFamily: 'Orbitron',
        backgroundColor: '#fff',
        fontWeight: 700,
        fontSize: '15px',
        paddingLeft: '5px',
        paddingRight: '0px',
        lineHeight: '15px',
        borderRadius: '1px',
        marginRight: '5px',
        boxShadow: '0 0 3px #000',
        height: 16,
        opacity: 0,
        transition: 'opacity .3s',
        '& .nota': {
          color: '#555',
          display: 'inline-block',
        },
        '& .bene': {
          color: '#555',
          display: 'inline-block',
          position: 'relative',
          left: -4,
        },
      },
    };
  }
}
