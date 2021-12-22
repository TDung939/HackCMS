import { Box, Text, Heading, Img, Stack, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll } from 'react-scroll'
import  Router  from 'next/router';
import Banner from '@/components/BannerWithGradient/Banner';

const renderer = ({ days, hours, minutes}) => {
    return <HStack spacing='2' >
              <Flex justify='space-between' minW={{base:'0',lg:'132px'}}>
                <Heading fontFamily='Raleway' fontSize={{base:'2xl',lg:'6xl'}} fontWeight='normal'>{days}</Heading>
                <Text fontFamily='Raleway' transform='rotate(-90deg)'>DAYS</Text>
              </Flex>

              <Flex justify='space-between' minW={{base:'0',lg:'132px'}}>
                <Heading fontFamily='Raleway' fontSize={{base:'2xl',lg:'6xl'}}  fontWeight='normal'>{hours}</Heading>
                <Text fontFamily='Raleway' transform='rotate(-90deg)'>HRS</Text>
              </Flex>

              <Flex justify='space-between' minW={{base:'0',lg:'132px'}}>
                <Heading fontFamily='Raleway' fontSize={{base:'2xl',lg:'6xl'}}  fontWeight='normal'>{minutes}</Heading>
                <Text fontFamily='Raleway' transform='rotate(-90deg)'>MINS</Text>
              </Flex>
            </HStack>;
};

const Hero = ({registerForm}) => {
    return (
    <Box
    as="section"
    >
      <Banner/>
        <Box mt='8'>
            <Box
            maxW={{
                base: 'xl',
                md: '6xl',
            }}
            mx="auto"
            px={{
                base: '6',
                md: '8',
            }}
            pos='relative'
            >
              <Flex justify='space-between' align='center' display={{base:'none', lg:'flex'}}>
                <Img src='/logo.svg' height='80px'/>
                <HStack fontFamily='Work Sans' fontWeight='semibold' fontSize='18px' spacing='12' cursor='pointer'>

                <Link activeClass="active" to={'schedule'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>Schedule</Text>
                  </Link>
                <Link activeClass="active" to={'speakers'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>Speakers</Text>
                  </Link>
                  <Link activeClass="active" to={'about'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>About</Text>
                  </Link>
                  <Link activeClass="active" to={'leaderboard'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>Leaderboard</Text>
                  </Link>
                  <Link activeClass="active" to={'faq'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>FAQ</Text>
                  </Link>
                </HStack>
              </Flex>
              <Box
              mt='50px'
              pt={{base:'0', lg:'100px' }}
              backgroundImage={{base:'none', lg:'url(/Hero.svg)'}}
              backgroundRepeat='no-repeat'
              backgroundSize='contain'
              backgroundPosition='right'
              >
                
                <Img display={{base:'block', lg:'none'}} src='/HeroMobile.png'/>
                <Heading display={{base:'none', lg:'block'}} fontFamily='Space Mono' fontWeight='bold' fontSize={{base: '5xl', lg: '6xl'}} maxW='3xl'>VinUni Research Bootcamp: <span style={{color:'#76E094'}}>Kickstart</span></Heading>
                <Heading textAlign={{base:'center', lg:'left'}} color='#FFCA27' my='25px' fontFamily='Raleway'>DECEMBER 5 - 12, 2021</Heading>

                <Stack direction={["column", "row"]} mt='2' align='center' justify={{base:'center', lg:'left'}} spacing='12'>
                  <Img src='/logos/vinuni.png' height='56px'/>
                  <Img src='/logos/vinmaker.png' height='90px'/>
                  <Img src='/logos/vrc.png' height='56px'/>
                </Stack>
              </Box>
              
            </Box>
            
        </Box>
    </Box>
    )
}

export default Hero;