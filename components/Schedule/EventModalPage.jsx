import { getStrapiMedia } from '@/lib/media'
import {
Box,
Button,
Heading,
Img,
Input,
SimpleGrid,
Stack,
Text,
useColorModeValue as mode,
useToast,
Link
} from '@chakra-ui/react'
import * as React from 'react'
import ReactPlayer from 'react-player'
import SpeakerCard from '../SpeakerCard/App'

const EventModalPage = (props) => {
    const { event } = props
    const coverImage = event.cover_image.url
    const toast = useToast();


    return (
        <Box as="section" pb="24">
        <Box
            maxW={{
            base: 'xl',
            md: '6xl',
            }}
            mx="auto"
            px={{
            base: '6',
            md: '8',
            }}
        >
            <Stack
            direction={{
                base: 'column',
                lg: 'row',
            }}
            spacing={{
                base: '3rem',
                lg: '2rem',
            }}
            mt="8"
            justify="space-between"
            >
            <Box
                pos="relative"
                w={{
                base: 'full',
                lg: '560px',
                }}
            >
                {event.recordedUrl? 
                <ReactPlayer 
                controls={true}
                width='560px'
                url={event.recordedUrl} 
                />
                : 
                <Img
                w="full"
                pos="relative"
                zIndex="1"
                h={{
                    lg: '100%',
                }}
                objectFit="cover"
                src={coverImage}
                alt="cover image"
                />}
            </Box>

            <Box
                maxW={{
                lg: '520px',
                }}
            >
                <Heading
                as="h1"
                size="lg"
                >
                Location
                </Heading>
                <Link href={event.location? event.location : '#'} isExternal color={mode('gray.600', 'gray.400')} mt="4">
                {event.location? event.location : 'To be announced'}
                </Link>
                <Heading
                as="h1"
                size="lg"
                mt='2'
                >
                Descriptions
                </Heading>
                <Text color={mode('gray.600', 'gray.400')} mt="4">
                {event.descriptions}
                </Text>
            </Box>
            </Stack>
            <Box mt='8'>
                <Heading
                as="h1"
                size="lg"
                >
                Speakers
                </Heading>
                <SimpleGrid
                spacing='8'
                columns={{base:'1', lg:'2'}}
                >
                    {event.hosts.map((host, idx)=>(
                        <SpeakerCard host={host} key={idx} />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
        </Box>
    )
}
export default  EventModalPage;