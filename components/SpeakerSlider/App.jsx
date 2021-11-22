import { getStrapiMedia } from '@/lib/media'
import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './Member'

const SpeakersSlider = ({speakers}) => (
  <Box as="section">
    <Box
      mx="auto"
      py='12'
    >
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacingX="6"
        spacingY="16"
      >
        {speakers?.map((speaker, idx) => {
          const profilePicture = speaker.profile_picture? getStrapiMedia(speaker.profile_picture) : `https://avatars.dicebear.com/api/initials/${speaker.name}.svg`
          return (
          <Member
            key={idx}
            job_position={speaker.job_position}
            company={speaker.company}
            profile_picture={profilePicture}
            name={speaker.name}
          >
            {speaker.bio}
          </Member>
        )})}
      </SimpleGrid>
    </Box>
  </Box>
)

export default SpeakersSlider;