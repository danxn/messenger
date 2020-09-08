import Background from './bg_1_1440x900.jpg';

export default class Style {
  static classes(theme) {
    return {
      root: {
        flexGrow: 1,
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        padding: theme.spacing(2),
        height: '96vh',
        boxShadow: '0px 0px 500px rgba(0,0,0,1) inset',
      },
      topBlock: {
        paddingLeft: 40,
        // height: 350,
        opacity: 0,
        transition: 'opacity 1s',
      },
      para: {
        fontFamily: 'Electrolize',
        fontSize: 14,
        color: '#fff',
        paddingLeft: 40,
        marginBottom: 50,
      },
      para2: {
        paddingLeft: 40,
        fontFamily: 'Orbitron', //'Saira Condensed'
        fontSize: 38,
        color: '#fff',
        fontWeight: 700,
        textShadow: '1px 1px 5px #000',
        marginBottom: 0,
        marginTop: 0,
      },
      para3: {
        fontFamily: 'Saira Condensed', //'Orbitron',
        fontSize: 11,
        color: '#fff',
        fontWeight: 100,
        textShadow: '1px 1px 2px #000',
        paddingLeft: 40,
        marginBottom: 40,
        marginTop: -5,
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        textIndent: 0,
      },
      selection: {
        backgroundColor: '#f7f79d78',
        display: 'inline-block',
        paddingLeft: '8px',
        paddingRight: '8px',
        marginRight: '5px',
        fontWeight: 600,
        lineHeight: '34px',
      },
      selection2: {
        // backgroundColor: '#c4c47e73',
        display: 'inline-block',
        paddingLeft: '2px',
        marginRight: '5px',
        fontWeight: 600,
      },
    };
  }
}