import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import SpeakersSlider from '@/components/SpeakerSlider/App';


const Speakers = ({speakers}) => {
    return (
    <Box 
    as='section'
    pos='relative'
    mt='112px'
    maxW={{
        base: 'xl',
        md: '6xl',
    }}
    mx='auto'
    px={{
        base: '6',
        md: '8',
    }}
    >
        <Heading fontFamily='Space Mono' fontSize='48px'>Speakers</Heading>
        <SpeakersSlider speakers={speakers}/> 
    </Box>
    )
}

export default Speakers;