import { Box, Text, Heading, Img, Stack, Flex, HStack, Center,
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalBody,
ModalCloseButton,
useDisclosure
} from '@chakra-ui/react'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import { useWindowSize } from '../../lib/window'
import Marquee from "react-fast-marquee";
import React from 'react'
import { SignInModal } from '@/components/SignInModal';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
// import Link from 'next/link';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Countdown from 'react-countdown';
import UserCard from '@/components/RankFrame';
import  Router  from 'next/router';
import Tilt from 'react-parallax-tilt';

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
    const {width, windowHeight} = useWindowSize();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user, logout} = useContext(AuthContext)

    let display;
    if (user) {
      display= (
      <Stack mt={{base: '4', lg: '8'}}  spacing='8' direction={{base:'column', lg:'row'}}>
        <PrimaryButton zIndex='2' onClick={() => Router.push('/dashboard')}>DASHBOARD</PrimaryButton>
        <SecondaryButton zIndex='2'  onClick={() => logout()}>SIGN OUT</SecondaryButton>
      </Stack>
      )
    } else {
      display= (
      <Stack mt={{base: '4', lg: '8'}}  spacing='8' direction={{base:'column', lg:'row'}}>
        <PrimaryButton zIndex='2' onClick={()=>Router.push(registerForm.registerUrl)}>REGISTER</PrimaryButton>
        <SecondaryButton zIndex='2' onClick={onOpen}>SIGN IN</SecondaryButton>
      </Stack>)
    }

    return (
    <Box
    mt='8'
    as="section"
    >
        <Box >
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sign in</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
               {user? null : <SignInModal />}
              </ModalBody>
            </ModalContent>
          </Modal>
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
                  <Link activeClass="active" to={'about'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>About</Text>
                  </Link>

                  <Link activeClass="active" to={'speakers'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>Speakers</Text>
                  </Link>

                  <Link activeClass="active" to={'schedule'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>Schedule</Text>
                  </Link>

                  <Link activeClass="active" to={'faq'} spy={true} smooth={true} offset={0} duration={500}>
                    <Text>FAQ</Text>
                  </Link>
                </HStack>
              </Flex>
              <Box
              mt='50px'
              pt='100px' 
              backgroundImage={'url(/Hero.svg)'}
              backgroundRepeat='no-repeat'
              backgroundSize='contain'
              backgroundPosition='right'
              >
                <Heading fontFamily='Space Mono' fontWeight='bold' fontSize='64px' maxW='962px'>VinUni Research Bootcamp: <span style={{color:'#76E094'}}>Kickstart</span></Heading>
                <Heading color='#FFCA27' my='25px' fontFamily='Raleway'>DECEMBER 5 - 12, 2021</Heading>
                <Box>
                {display}
                </Box>
              </Box>
             
              <HStack mt='8' justify='center' spacing='12'>
               <Img src='/logos/vinuni.png'/>
               <Img src='/logos/vinmaker.png'/>
               <Img src='/logos/vrc.png'/>
            </HStack>
            </Box>
            
        </Box>
    </Box>
    )
}

export default Hero;