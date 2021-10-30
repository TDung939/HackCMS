import { Box } from '@chakra-ui/react'
import * as React from 'react'
import TitlewithBoxes from '@/components/TitleswithBoxes';
import SpeakersSlider from '@/components/TeamWithCentredLayout/App';


const Speakers = ({speakers}) => {
    return (
    <Box pos='relative'
    px={{
        base: '6',
        md: '8',
    }}
    >
        <Box 
        as="section" 
        >
            <Box
            py="12"
            maxW={{
                base: 'xl',
                md: '7xl',
            }}
            mx='auto'
            px={{
                base: '6',
                md: '8',
            }}
            >
                <TitlewithBoxes text='Speakers' color='#ED5D43'/>
                <SpeakersSlider speakers={speakers}/>
            </Box>
           
        </Box>
    </Box>
    )
}

export default Speakers;