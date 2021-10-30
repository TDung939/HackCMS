import { Box, Flex, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { useState, useEffect } from 'react'

const show = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`


const NavBar = () => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const animation = prefersReducedMotion
      ? undefined
      : `${show} 1 0.3s ease-in-out`

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // just trigger this so that the initial state 
      // is updated as soon as the component is mounted
      // related: https://stackoverflow.com/a/63408216
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  return (
  <Box
  display={scrollY > 145 ? 'block' : 'none'}
  animation= {scrollY > 145 ? animation : null}
  >
    <Box as="header" height="20" position="relative" bg='white' border='1px solid rgba(0,0,0,0.1)'
    // style={{background:'hsla(0,0%,100%,0.8)', backdropFilter:'blur(8px)', border: '1px solid rgba(0,0,0,0.1)'}}
    >
      <Box
        height="100%"
        maxW="7xl"
        mx="auto"
        ps={{
          base: '6',
          md: '8',
        }}
        pe={{
          base: '5',
          md: '0',
        }}
        
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          height="100%"
          justify='space-between'
        >
          <Box>
            {/* <Img src='/glasses/green-glasses.svg' height='12' mr='8'/> */}
          </Box>
          <NavContent.Desktop
            display={{
              base: 'none',
              md: 'flex',
            }}
          />
          <NavContent.Mobile
            display={{
              base: 'flex',
              md: 'none',
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
)
}

export default NavBar