import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      light: '#8a87f6',
      main: '#5d5fef',
      dark: '#4c4aaa',
      contrastText: '#fff'
    },
    secondary: {
      light: '#e9eaeb',
      main: '#c1c1c1',
      dark: '#e9eaeb',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      fontSize: '14px',
      fontWeight: '500'
    },
    body2: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '15px'
    }
  }
});
