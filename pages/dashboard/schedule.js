import { Box, Flex, HStack } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import ScheduleComponent from "@/components/Schedule/Schedule";
import Sidebar from "@/components/Sidebar/App";
import Seo from '@/components/Seo';


export default function Home({ schedule }) {
  const {user, logout} = useContext(AuthContext)
  return (
    <>
      <Seo title='Schedule - VinUni Research Bootcamp' content='VRW: Kickstart is your opportunity to spend a week focused on learning the researching skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events, challenges, panels, and more.'/>
      <Flex>
        <Sidebar active={'schedule'}/>
        <ScheduleComponent schedule={schedule}/>
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  const schedule = await fetchAPI("/schedule")

  return { props: { schedule }};
}