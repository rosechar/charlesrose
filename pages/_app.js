import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from "@mui/material";
import React from 'react';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function CharlesRose({ Component, pageProps }) {
  return (
    <React.Fragment>
  <ThemeProvider theme={lightTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
  </React.Fragment>
  )
}

export default CharlesRose
