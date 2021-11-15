import NavBar from "@/components/Navbar/NavBar";
import About from "views/About/App";
import Hero from "views/Hero/App";
import Activities from "views/Activities/App";
import Speakers from "views/Speakers/App";
import Faq from "views/FAQ/App";
import TrollCTA from "views/TrollCTA/App";
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
import ScheduleComponent from "@/components/Schedule/Schedule";
import { Element, animateScroll as scroll } from 'react-scroll'
import Marquee from "react-fast-marquee";
import Seo from "@/components/Seo";
import moment from "moment";

export default function Home({speakers, faq, schedule, introVideo, registerForm}) {
  return (
    <>
      <Seo title='VinUni Research Bootcamp' content='VRW: Kickstart is your opportunity to spend a week focused on learning the researching skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events, challenges, panels, and more.'/>
      <Box pos='sticky' top='0' zIndex='3'>
        <NavBar registerForm={registerForm}/>
      </Box>
      
      <Hero registerForm={registerForm}/>
      
      <Element name='about'>
        <About video={introVideo}/>
      </Element>

      <Activities />

      <Box
        as='section'
        py='8'
        pos='relative'
        mx='auto'
        maxW='7xl'
        mt='112px'
        >
          <Heading px='6' textAlign='center' textTransform='capitalize'>Did we mention these cool swags?</Heading>
          <Marquee speed='120' >

            <Box>
              <Img mx='2' src='/swag/stickers.jpeg' height='320px' draggable={false}/>
              <Text px='2' maxW='150px' mx='auto' align='center' fontFamily='Space Mono' fontWeight='bold' rounded='xl' bg='#76E094'>Stickers</Text>
            </Box>

            <Box>
              <Img mx='2' src='/swag/pin_button.jpeg' height='320px' draggable={false}/>
              <Text px='2' maxW='150px' mx='auto' align='center' fontFamily='Space Mono' fontWeight='bold' rounded='xl' bg='#76E094'>Pin Buttons</Text>
            </Box>
          
            <Box>
              <Img mx='2' src='/swag/canvas_bag.jpeg' height='320px' draggable={false}/>
              <Text px='2' maxW='150px' mx='auto' align='center' fontFamily='Space Mono' fontWeight='bold' rounded='xl' bg='#76E094'>Tote Bags</Text>
            </Box>

            <Box>
              <Img mx='2' src='/swag/notebook.jpeg' height='320px' draggable={false}/>
              <Text px='2' maxW='150px' mx='auto' align='center' fontFamily='Space Mono' fontWeight='bold' rounded='xl' bg='#76E094'>Notebooks</Text>
            </Box>

            <Box>
              <Img mx='2' src='/swag/shirt_white.jpeg' height='320px' draggable={false}/>
              <Text px='2' maxW='150px' mx='auto' align='center' fontFamily='Space Mono' fontWeight='bold' rounded='xl' bg='#76E094'>T-Shirts</Text>
            </Box>

            
          </Marquee>
          <Text textAlign='center' mt='16' fontFamily='Work Sans' fontStyle='italic'>*Pictures shown are for illustration purpose only. Actual product may vary.</Text>
      </Box>
    

      <Element name='speakers'>
        <Speakers speakers={speakers} />
      </Element>
      

      <Element name='schedule'>
        <Box
        as='section'
        px={{
            base: '6',
            md: '8',
        }}
        py='8'
        pos='relative'
        maxW='6xl'
        mx='auto'
        mt='112px'
        >
          <Heading fontFamily='Space Mono' fontSize='48px'>Week Schedule</Heading>
          <Text fontFamily='Work Sans' fontStyle='italic'>Subject to change</Text>
          <Text fontFamily='Work Sans' fontStyle='italic'>Last updated: {moment(schedule[0].updated_at).format('DD, MMMM, YYYY')}</Text>
          <ScheduleComponent />
        </Box>
      </Element>

      <Element name='faq'>
        <Faq faq={faq}/>
      </Element>

      <TrollCTA registerForm={registerForm}/>
      <Box
       as='section'
       pos='relative'
       maxW='6xl'
       mb='120px'
       mx='auto'
       px='6'
      >
        <Img src='/footer.svg' mx='auto'/>
      </Box>

    </>
  )
}

export async function getServerSideProps({context, req }) {
  const [speakers, schedule, faq, introVideo, registerForm] = await Promise.all([
    fetchAPI("/volunteers?type=speaker"),
    fetchAPI("/schedule"),
    fetchAPI("/faq"),
    fetchAPI("/introduction-video"),
    fetchAPI("/register-form")
  ]);
  return { props: { speakers, schedule, faq, introVideo, registerForm }};
}