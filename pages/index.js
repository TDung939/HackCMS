import NavBar from "@/components/Navbar/NavBar";
import About from "views/About/App";
import Hero from "views/Hero/App";
import Activities from "views/Activities/App";
import Video from "views/Video/App";
import Speakers from "views/Speakers/App";
import Faq from "views/FAQ/App";
import TrollCTA from "views/TrollCTA/App";
import { fetchAPI } from '@/lib/api';
import Footer from "views/Footer/App";
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import ScheduleComponent from "@/components/Schedule/Schedule";
import TitlewithBoxes from "@/components/TitleswithBoxes";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Home({speakers, faq, schedule, introVideo, registerForm}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <>
      <Box pos='sticky' top='0' zIndex='3'>
        <NavBar registerForm={registerForm}/>
      </Box>
      
      <Hero registerForm={registerForm}/>
      
      <Element name='about'>
        <About/>
        <Video video={introVideo}/>
      </Element>

      <Activities />

      <Element name='speakers'>
        <Speakers speakers={speakers} />
      </Element>
      

      <Element name='schedule'>
        <Box
        px={{
            base: '6',
            md: '8',
        }}
        py='8'
        pos='relative'
        maxW='7xl'
        mx='auto'
        >
          <TitlewithBoxes text='Week Schedule' color='#FCCE44'/>
          <ScheduleComponent schedule={schedule} />
        </Box>
      </Element>

      <Element name='faq'>
        <Faq faq={faq}/>
      </Element>

      <TrollCTA registerForm={registerForm}/>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const speakers = await fetchAPI("/volunteers?type=speaker")
  const faq = await fetchAPI("/faq")
  const schedule = await fetchAPI("/schedule")
  const introVideo = await fetchAPI("/introduction-video")
  const registerForm = await fetchAPI("/register-form")

  return { props: { speakers, faq, schedule, introVideo, registerForm }};
}