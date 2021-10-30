
import * as React from 'react'
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react'
import {AuthProvider} from '../context/AuthContext'
import { ParallaxProvider } from 'react-scroll-parallax';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextNprogress from 'nextjs-progressbar';
import "styles/video-react.css";
import "@fontsource/raleway"

export const newTheme = {
  ...theme,
  shadows: {...theme.shadows, outline:'0 !important'},
};


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={newTheme}>
      <CSSReset />
        <ParallaxProvider>
        <AuthProvider>
          <NextNprogress
            color="#76E094"
            startPosition={0.3}
            stopDelayMs={200}
            height={6}
            showOnShallow={true}
          />
          <Component {...pageProps} />
          </AuthProvider>
        </ParallaxProvider>
  </ChakraProvider>
  )
}

export default MyApp
