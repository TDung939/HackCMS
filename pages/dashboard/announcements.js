import { Box } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";


export default function Home({speakers, faq, schedule}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <>
      <Sidebar active={'announcements'}/>
    </>
  )
}

export async function getStaticProps() {
  const speakers = await fetchAPI("/volunteers?type=speaker")
  const faq = await fetchAPI("/faq")
  const schedule = await fetchAPI("/schedule")

  return { props: { speakers, faq, schedule }};
}