
import * as React from 'react'
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextNprogress from 'nextjs-progressbar';
import "styles/video-react.css";
import "styles/fonts.css";
import "styles/animation.css";

export const newTheme = {
  ...theme,
  shadows: {...theme.shadows, outline:'0 !important'},
};


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={newTheme}>
      <CSSReset />
        <ParallaxProvider>
          <NextNprogress
            color="#76E094"
            startPosition={0.3}
            stopDelayMs={200}
            height={6}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </ParallaxProvider>
  </ChakraProvider>
  )
}

export default MyApp
