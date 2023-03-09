import { Box, Flex, keyframes, usePrefersReducedMotion, HStack, Text, Center, Img } from '@chakra-ui/react'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
const show = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`

const NavBar = ({registerForm}) => {
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
  display={scrollY > 250 ? 'block' : 'none'}
  animation= {scrollY > 250 ? animation : null}
  >
    <Box as="header" position="relative" bg='white' border='1px solid rgba(0,0,0,0.1)'
    >
      <Box
        height="100%"
        maxW="6xl"
        mx="auto"
        px={{
            base: '6',
            md: '8',
        }}
        py='4'
      >
        <Flex justify='space-between' align='center' display={{base:'none', lg:'flex'}} pos='sticky'>
              <Img src='/logo.svg' height='80px'/>
              <HStack fontFamily='Work Sans' align='center' fontWeight='semibold' fontSize='18px' spacing='12' cursor='pointer'>

              <Link activeClass="active" to={'schedule'} spy={true} smooth={true} offset={-120} duration={500}>
                  <Text>Schedule</Text>
                </Link>

              <Link activeClass="active" to={'speakers'} spy={true} smooth={true} offset={-120} duration={500}>
                  <Text>Speakers</Text>
                </Link>

                <Link activeClass="active" to={'about'} spy={true} smooth={true} offset={-120} duration={500}>
                  <Text>About</Text>
                </Link>
                <Link activeClass="active" to={'leaderboard'} spy={true} smooth={true} offset={-120} duration={500}>
                  <Text>Leaderboard</Text>
                </Link>
                <Link activeClass="active" to={'faq'} spy={true} smooth={true} offset={-120} duration={500}>
                  <Text>FAQ</Text>
                </Link>
              </HStack>
              {/* <Center pos='relative' width='120px' height='120px' bg='white' rounded='full'>
                <Text align='center' fontFamily='Raleway' fontWeight='bold' fontSize='lg'>Register<br/>Now</Text>
                <Img src='/register-cta.svg' className='Register-cta' pos='absolute' top='0' onClick={() => Router.push(registerForm.registerUrl)}/>
              </Center> */}
              </Flex>
      </Box>
    </Box>
  </Box>
)
}

export default NavBar