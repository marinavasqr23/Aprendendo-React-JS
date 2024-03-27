import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
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
      paper: '#191970',
      default: '#1C1C1C',
    },
  },
});
