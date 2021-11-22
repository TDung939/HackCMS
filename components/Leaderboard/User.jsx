import { Box, Stack, Avatar } from '@chakra-ui/react'
import * as React from 'react'
import { getStrapiMedia } from '@/lib/media'

export const User = (props) => {
  console.log(props)
  const { profile_image, username, email } = props.data
  const profilePicture = profile_image? getStrapiMedia(profile_image) : ''
  return (
    <Stack direction="row" spacing="4" align="center">
      <Box flexShrink={0} h="10" w="10">
        <Avatar
          name={username}
          objectFit="cover"
          w="10"
          h="10"
          src={profilePicture}
        />
      </Box>
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {username}
        </Box>
        <Box fontSize="sm" color="gray.500">
          {email}
        </Box>
      </Box>
    </Stack>
  )
}