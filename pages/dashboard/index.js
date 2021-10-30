import { Box, Flex, Center } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";
import UserCard from '@/components/RankFrame';


export default function Home({speakers, faq, schedule}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <Flex>
      <Sidebar active={'dashboard'}/>
      <Box
      maxW='full'
      mx='auto'
      >
        <Center mx='auto'>
          <UserCard />
        </Center>
      </Box>
    </Flex>
  )
}

export async function getStaticProps() {
  const speakers = await fetchAPI("/volunteers?type=speaker")
  const faq = await fetchAPI("/faq")
  const schedule = await fetchAPI("/schedule")

  return { props: { speakers, faq, schedule }};
}