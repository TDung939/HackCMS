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

const Hero = () => {
    const {width, windowHeight} = useWindowSize();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user, logout} = useContext(AuthContext)

    let display;
    if (user) {
      display= (
      <Stack mt={{base: '4', lg: '8'}} mb='8' spacing='20' direction={{base:'column', lg:'row'}}>
        <PrimaryButton zIndex='2' onClick={() => Router.push('/dashboard')}>DASHBOARD</PrimaryButton>
        <SecondaryButton zIndex='2'  onClick={() => logout()}>SIGN OUT</SecondaryButton>
      </Stack>
      )
    } else {
      display= (
      <Stack mt={{base: '4', lg: '8'}} mb='8' spacing='20' direction={{base:'column', lg:'row'}}>
        <PrimaryButton zIndex='2'>REGISTER</PrimaryButton>
        <SecondaryButton zIndex='2' onClick={onOpen}>SIGN IN</SecondaryButton>
      </Stack>)
    }

    return (
    <Box 
    background='linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://vinuni.edu.vn/wp-content/uploads/2021/05/159327239_892272394676771_7050421170327572645_n-1536x1025.jpg)'
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
    >
        <Box 
        as="section" 
        >
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
                md: '7xl',
            }}
            mx="auto"
            px={{
                base: '6',
                md: '8',
            }}
            py='8'
            pos='relative'
            >
              <Flex justify='space-between' align='start' display={{base:'none', lg:'flex'}}>
              <Img src='/logo_white.svg' width={{base:'120px', lg:'auto'}}/>
              <HStack color='white' fontFamily='Raleway' fontSize='lg' spacing='12' cursor='pointer'>
                <Link activeClass="active" to={'about'} spy={true} smooth={true} offset={0} duration={500}>
                  <Text>About</Text>
                </Link>
                <Link activeClass="active" to={'schedule'} spy={true} smooth={true} offset={0} duration={500}>
                  <Text>Schedule</Text>
                </Link>

                <Text>Challenges</Text>


                <Text>Resources</Text>

                <Link activeClass="active" to={'faq'} spy={true} smooth={true} offset={0} duration={500}>
                  <Text>FAQ</Text>
                </Link>
              </HStack>
              </Flex>
              <Box color='white' pos='relative' mt='12'>
                <Flex justify='space-between' align='center'
                direction={{base:'column', lg:'row'}}
                >
                <Heading fontSize={{base:'5xl',lg:'9xl'}} zIndex='2'>KICKSTART</Heading>
                <Heading zIndex='1' color='#76E094' fontSize={{base:'5xl',lg:'9xl'}} pos='absolute' top='-10px' left='10px'>KICKSTART</Heading>
                <Box>
                  <Countdown
                    zeroPadTime={2}
                    zeroPadDays={2}
                    date='2021-12-05'
                    renderer={renderer}
                  />
                  <Heading color='#FFCA27' fontFamily='Raleway'>DECEMBER 5 - 11, 2021</Heading>
                </Box>
                </Flex>
              </Box>
              <Marquee speed={150} gradient={false}>
                <Heading  style={{fontWeight:'900'}} color='white' fontSize={{base:'2xl',lg:'9xl'}} overflow='hidden'>
                  VINUNI <span style={{color:'#535ED2'}}>RESEARCH</span> WEEK <span style={{color:'#FFCA27'}}>2021</span> &nbsp;
                </Heading>
              </Marquee>
              <Box>
              {display}
              </Box>
            </Box>
        </Box>
        {/* <Img src='/eyes.svg'  
        mx='auto'
        style={{
        userDrag: 'none',
        webkitUserDrag: 'none',
        webkitUserSelect: 'none',
        mozUserSelect: 'none', 
        msUserSelect: 'none',
        userSelect: 'none'
        }}/> */}
    </Box>
    )
}

export default Hero;