import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[900],
      light: purple[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#483D8B',
      dark: '#483D8B',
      light: '#483D8B',
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      default: '#B0C4DE', /* */
    },
  },
});
