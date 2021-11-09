import { Box, Divider, Flex, Spacer, Stack, Img, Button, Icon, Text } from '@chakra-ui/react'
import * as React from 'react'
import {
  FaBook,
  FaRegBell,
  FaRegCalendar,
  FaRegHeart,
  FaRegLightbulb,
  FaRegQuestionCircle,
  FaUser,
} from 'react-icons/fa'
import Link from 'next/link'
import { NavLink } from './NavLink'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Sidebar = (props) => {
  const { logout } = useContext(AuthContext);
  const { active } = props;
  return (
    <Flex
      height="100vh"
      minWidth='xs'
      maxWidth='xs'
      direction="column"
      borderRightWidth="1px"
      px={6}
      py={8}
      pos='sticky'
      top='0'
    >
      <Link href='/' passHref>
        <Flex align='center' mb={8} 
        cursor='pointer'
        _hover={{
          color: '#2A5FFF'
        }}
        >
          <Icon as={ChevronLeftIcon}/>
          <Text>Landing Page</Text>
        </Flex>
      </Link>
      <Box mb={8}>
        <Img w='250px' src='/logo.svg' draggable={false}/>
      </Box>
      <Stack spacing={6}>
        <Stack>
          <NavLink href={'/dashboard'} label="Dashboard" icon={FaUser} isActive={active=='dashboard'? true : false}/>
          {/* <NavLink label="Favorites" icon={FaRegHeart} isActive={active=='dashboard'? true : false}/> */}
          <NavLink href={'/dashboard/schedule'} label="Schedule" icon={FaRegCalendar} isActive={active=='schedule'? true : false}/>
          <NavLink href={'/dashboard/challenges'} label="Challenges" icon={FaRegLightbulb} isActive={active=='challenges'? true : false}/>
          <NavLink href={'/dashboard/resources'} label="Resources" icon={FaBook} isActive={active=='resources'? true : false}/>
        </Stack>
        <Divider />
        <Stack>
          <NavLink href={'/dashboard/announcements'} label="Announcements" icon={FaRegBell} isActive={active=='announcements'? true : false}/>
          <NavLink href={'/dashboard/help-center'} label="Help Center" icon={FaRegQuestionCircle} isActive={active=='help-center'? true : false}/>
        </Stack>
      </Stack>
      <Spacer />
      <Button
      onClick={()=>logout()}
      >
        Sign out
      </Button>
    </Flex>
  )
}

export default Sidebar;
