import { Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './Stat'

const UserStat = ({data}) => {
  const eventsAttended = data?.events_attended
  return (
  <Stack
    as="section"
    maxW="6xl"
    mx="auto"
    px={{
      base: '6',
      md: '8',
    }}
    py='4'
    spacing="12"
  >
    <SimpleGrid
      mx="auto"
      spacing={{
        base: '10',
        md: '20',
      }}
      columns={{
        base: 1,
        md: 3,
      }}
    >
      <Stat
        title="Events"
        value={data?.events_attended?.length}
        accentColor={useColorModeValue('green.500', 'green.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </Stat>
      <Stat
        title="Challenges"
        value={data?.challenges_done?.length}
        accentColor={useColorModeValue('blue.500', 'blue.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </Stat>
      {/* <Stat
        title="No of Challenges"
        value="2"
        accentColor={useColorModeValue('pink.500', 'pink.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </Stat> */}
    </SimpleGrid>
  </Stack>
)}

export default UserStat;