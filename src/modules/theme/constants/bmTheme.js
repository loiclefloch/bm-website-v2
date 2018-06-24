import blue from '@material-ui/core/colors/blue'

const fontReadable = `"bm-content-serif-font", Georgia, Cambria, "Times New Roman", Times, serif`
const fontSansSerif = `"bm-content-sans-serif-font", Georgia, Cambria, "Times New Roman", Times, serif`

const palette = {
  primary: { main: blue[500] },
  secondary: { main: '#11cb5f' },
}

const bmTheme = {
  palette,
  app: {
    background: {
      dark: '#2F2F2F',
      // dark: '#000c',
    },
    header: {
      height: '50px',
    },
    sidebar: {
      width: 250,
      color: '#000c', //darkBlack,
    },
    appBar: {
      height: '50px',
    },
    readable: {
      fontSize: 21,
      lineHeight: '33.18px',
      fontWeight: 400,
      fontFamily: fontReadable,
      '-webkit-font-smoothing': 'antialiased',
    },
  },
  style: {
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
    },
    focusPrimary: {
      '&:focus': {
        backgroundColor: palette.primary.main,
        color: 'white',
      },
    },
  },
}

export default bmTheme
