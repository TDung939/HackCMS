import { Box, Flex } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";
import ChallengesComponent from '@/components/Challenges/Challenges';
import Seo from '@/components/Seo';


export default function Home() {
  const {user, logout} = useContext(AuthContext)
  return (
    <>
    <Seo title='Challenges - VinUni Research Bootcamp' content='VRW: Kickstart is your opportunity to spend a week focused on learning the researching skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events, challenges, panels, and more.'/>
    <Flex>
      <Sidebar active={'challenges'}/>
      <ChallengesComponent />
    </Flex>
    </>
  )
}
