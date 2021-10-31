import { Box, Flex, Text } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";


export default function Home({resources}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <Flex>
      <Sidebar active={'resources'}/>
      <Box
      maxW='full'
      mx='auto'
      >
       {resources.content}
      </Box>
    </Flex>
  )
}

export async function getStaticProps() {
  const resources = await fetchAPI("/resources");

  return { props: { resources }};
}