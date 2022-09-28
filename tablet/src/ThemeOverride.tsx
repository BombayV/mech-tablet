import { props } from './types/props';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
    "fontFamily": `"Montserrat", sans-serif`,
    "fontSize": 12,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          fontWeight: 500,
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent',
        }
      }
    }
  }
});

const ThemeOverride = ({ children }: props) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
}

export default ThemeOverride;