import { Box } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";


export default function Home() {
  const {user, logout} = useContext(AuthContext)
  return (
    <>
      <Sidebar active={'help-center'}/>
    </>
  )
}
