export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    icon: "Linearicons, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    primary: '#2e5bff',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#F1F1F1',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    baseColorBlack2: '#69707f',
    baseColorBlue: '#2e5bff',
    baseColorGray: '#bfc5d2',
    baseColorBlack3: '#8798ad',
    baseColorWhite: '#ffffff',
    baseColorBlack: '#2e384d',
    baseColorGray2: '#f4f6fc',
    baseColorGray3: '#eef3f5',
    baseColorGreen: '#33ac2e',
    baseColorYellow: '#FFD836',
    baseColorTeal: '#00c1d4',
    baseColorRed: '#d63649',
    baseColorPurple: '#8c54ff',
    lightPeriwinkle: '#d6dfff',
    cloudyBlue: '#b0bac9',
    tomato: '#e74133',
    blueSide: '#1a4679',
    baseColorBlue20: 'rgba(46, 91, 255, 0.2)',
    color01: '#7fffff',
    divider: '#c8c9cc',
    baseColorRed10: 'rgba(214, 54, 73, 0.1)',
    baseColorGreen15: 'rgba(80, 173, 48, 0.15)',
    baseColorBlue10: 'rgba(46, 91, 255, 0.1)',
    baseColorYellow10: 'rgba(247, 193, 55, 0.1)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
