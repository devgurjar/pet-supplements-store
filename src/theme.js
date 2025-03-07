import { createTheme } from '@mui/material';

// Create base theme first
const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#1B4965', // Deep blue
      light: '#62B6CB', // Light blue
      dark: '#0C2233', // Dark blue
    },
    secondary: {
      main: '#FF6B6B', // Coral
      light: '#FFD93D', // Yellow
      dark: '#FF4949', // Dark coral
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#1B4965',
      secondary: '#5C6B73',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Then extend it with responsive styles
const theme = createTheme({
  ...baseTheme,
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: {
        fontSize: '1.5rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: {
            padding: '0 16px',
          },
        },
      },
    },
  },
});

export default theme; 