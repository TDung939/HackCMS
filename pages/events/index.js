import { Box } from '@chakra-ui/react'
import NavBar from "@/components/Navbar/NavBar";
import ScheduleComponent from "@/components/Schedule";
import TitlewithBoxes from "@/components/TitleswithBoxes";
import { fetchAPI } from "@/lib/api";
import Footer from "views/Footer/App";

export default function Schedule({schedule}) {
  return (
    <>
      <NavBar />
      <Box
      px={{
          base: '6',
          md: '8',
      }}
      py='8'
      pos='relative'
      >
        <TitlewithBoxes text='Week Schedule' color='#76E094'/>
      </Box>
      <ScheduleComponent schedule={schedule} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const schedule = await fetchAPI("/schedule")

  return { props: { schedule }};
}