import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import React from 'react';


const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

const lightThemeOptions = createTheme({
  palette: {
    mode: 'light',
  },
});

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const CharlesRose = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default CharlesRose
