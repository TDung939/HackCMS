import { Box, Flex, Center } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";
import UserCard from '@/components/RankFrame';
import UserStat from '@/components/UserStat/App';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

export default function Home() {
  const { user } = useContext(AuthContext)
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user?.id}`, fetcher, { refreshInterval: 500 })
  return (
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
      </Box>
    </Flex>
  )
}

// export async function getStaticProps() {
//   const speakers = await fetchAPI("/volunteers?type=speaker")
//   const faq = await fetchAPI("/faq")
//   const schedule = await fetchAPI("/schedule")

//   return { props: { speakers, faq, schedule }};
// }