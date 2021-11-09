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
import { Box, Heading, Img } from '@chakra-ui/react'
import ScheduleComponent from "@/components/Schedule/Schedule";
import { Element, animateScroll as scroll } from 'react-scroll'
import Marquee from "react-fast-marquee";

export default function Home({speakers, faq, schedule, introVideo, registerForm}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <>
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
        mt='112px'
        >
        <Marquee speed='120' >
          <Img mx='2' src='/swag/shirt_white.jpeg' height='320px' draggable={false}/>
          {/* <Img mx='2' src='/swag/shirt_black.jpeg' height='320px' draggable={false}/> */}
          <Img mx='2' src='/swag/notebook.jpeg' height='320px' draggable={false}/>
          <Img mx='2' src='/swag/pin_button.jpeg' height='320px' draggable={false}/>
          <Img mx='2' src='/swag/canvas_bag.jpeg' height='320px' draggable={false}/>
        </Marquee>
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
      >
        <Img src='/footer.svg' mx='auto'/>
      </Box>

    </>
  )
}

export async function getServerSideProps({context, req }) {
  const [speakers, faq, introVideo, registerForm] = await Promise.all([
    fetchAPI("/volunteers?type=speaker"),
    fetchAPI("/faq"),
    fetchAPI("/introduction-video"),
    fetchAPI("/register-form")
  ]);
  return { props: { speakers, faq, introVideo, registerForm }};
}