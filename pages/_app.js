import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";
import React from 'react';
import createEmotionCache from '../utility/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
const clientSideEmotionCache = createEmotionCache();

const CharlesRose = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
  <CssVarsProvider defaultMode='system'>
  <CssBaseline />
  <Component {...pageProps} />
  </CssVarsProvider>
  </CacheProvider>
  )
}

export default CharlesRose
