import { Box, Flex, Center } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";
import UserCard from '@/components/RankFrame';
import UserStat from '@/components/UserStat/App';
import useSWR from 'swr';
import axios from 'axios';
import Seo from '@/components/Seo';
import Leaderboard from '@/components/Leaderboard/Leaderboard';

const fetcher = url => axios.get(url).then(res => res.data)

export default function Home() {
  const { user } = useContext(AuthContext)
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user?.id}`, fetcher, { refreshInterval: 500 })
  return (
    <>
      <Seo title='Dashboard - VinUni Research Bootcamp' content='VRW: Kickstart is your opportunity to spend a week focused on learning the researching skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events, challenges, panels, and more.'/>
      <Flex>
        <Sidebar active={'dashboard'}/>
        <Box
        maxW='full'
        mx='auto'
        >
          <Center mx='auto'>
            <UserCard data={data} />
          </Center>
          <UserStat data={data} />
          <Leaderboard/>
        </Box>
      </Flex>
    </>
  )
}
