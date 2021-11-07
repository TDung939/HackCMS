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
      <Stack mt={{base: '4', lg: '8'}} mb='8' spacing='8' direction={{base:'column', lg:'row'}}>
        <PrimaryButton zIndex='2' onClick={() => Router.push('/dashboard')}>DASHBOARD</PrimaryButton>
        <SecondaryButton zIndex='2'  onClick={() => logout()}>SIGN OUT</SecondaryButton>
      </Stack>
      )
    } else {
      display= (
      <Stack mt={{base: '4', lg: '8'}} mb='8' spacing='8' direction={{base:'column', lg:'row'}}>
        <PrimaryButton zIndex='2' onClick={()=>Router.push(registerForm.registerUrl)}>REGISTER</PrimaryButton>
        <SecondaryButton zIndex='2' onClick={onOpen}>SIGN IN</SecondaryButton>
      </Stack>)
    }

    return (
    <Box>
        <Box as="section">
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
            py='4'
            pos='relative'
            >
              <Flex justify='space-between' align='center' display={{base:'none', lg:'flex'}}>
              {/* <Img src='/logo_black.svg' width={{base:'120px', lg:'240px'}}/> */}
              <HStack fontFamily='Raleway' fontWeight='bold' fontSize='2xl' spacing='12' cursor='pointer'>
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
              <Center pos='relative' width='120px' height='120px'>
                <Text align='center' fontFamily='Raleway' fontWeight='bold' fontSize='lg'>Register<br/>Now</Text>
                <Img src='/register-cta.svg' className='Register-cta' pos='absolute' top='0'  onClick={() => Router.push(registerForm.registerUrl)}/>
              </Center>
             
              </Flex>
              <Marquee speed={150} gradient={false}>
                <Heading  style={{fontWeight:'900'}}  fontSize={{base:'2xl',lg:'8xl'}} overflow='hidden'>
                  VINUNI <span style={{color:'#535ED2'}}>RESEARCH</span> BOOTCAMP <span style={{color:'#FFCA27'}}>2021</span> &nbsp;
                </Heading>
              </Marquee>
              <Box pos='relative'>
                <Img src='/kickstart.png' height='250px' draggable={false}/>
                <Box  pos='absolute' top='0' right='0' zIndex={-1}>
                <Tilt
                glareEnable={true}
                scale={1}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                trackOnWindow={true}
                >
                  <Img src='/hero_image.png' draggable={false}/>
                </Tilt>
                </Box>
              
                <Box>
                  <Countdown
                    zeroPadTime={2}
                    zeroPadDays={2}
                    date='2021-12-05'
                    renderer={renderer}
                  />
                  <Heading color='#FFCA27' fontFamily='Raleway'>DECEMBER 5 - 12, 2021</Heading>
                </Box>
              </Box>
              <Box>
              {display}
              </Box>
              <HStack mt='4' justify='center'>
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