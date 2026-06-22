import { createTheme } from '@mui/material/styles';

const sans = '"Noto Sans SC", "PingFang SC", "Helvetica Neue", Arial, sans-serif';
const serif = '"Noto Serif SC", "Songti SC", Georgia, serif';
const mono = '"JetBrains Mono", "SF Mono", Consolas, monospace';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FAF8F5',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#5C4B51',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#6B6B6B',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: sans,
    h4: {
      fontFamily: serif,
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontFamily: serif,
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontFamily: sans,
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: sans,
      lineHeight: 1.75,
    },
    caption: {
      fontFamily: mono,
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        },
      },
    },
  },
});

export { mono, sans, serif };
export default theme;
