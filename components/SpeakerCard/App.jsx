import {
  Avatar,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './Card'

const SpeakerCard = (props) => {
  const {host} = props;
  const profilePicture = host.profile_picture?.url
  return (
    <Card>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={{
          base: '3',
          md: '10',
        }}
        align="flex-start"
      >
        <Stack spacing="4">
          <Avatar
            size="2xl"
            src={profilePicture}
            name={host.name}
          />
        </Stack>
        <Box>
          <Stack
            spacing={{
              base: '1',
              md: '2',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Text as="h2" fontWeight="bold" fontSize="xl">
              {host.name}
            </Text>
          </Stack>

          <Text mt="2">{host.job_position} at {host.company}</Text>
          <Box fontSize="sm">
           {host.bio}
          </Box>
        </Box>
      </Stack>
    </Card>
)}

export default SpeakerCard