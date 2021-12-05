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
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data)

const EventModalPage = (props) => {
    const { event } = props
    const coverImage = event.cover_image? getStrapiMedia(event.cover_image) : '/placeholder.png'
    const {user} = useContext(AuthContext)
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user?.id}`, fetcher, { refreshInterval: 500 })
    const [magicCode, setMagicCode] = useState('')
    const toast = useToast();

    const handleUpdatePoint= async () => {
        let array = [];
        for (const event_attended of data.events_attended) {
            array.push(event_attended.id);
        }
        console.log(array)
        if (!array.includes(event.id)) {
            if (magicCode == event.magicCode && !event.isMagicCodeExpired) {
                array.push(event.id);
                try {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${data.id}`, 
                {
                    experience_point: data?.experience_point + event.experience_point,
                    events_attended: array
                }
                );
                toast({
                    position: 'top',
                    title: `Congratualations!`,
                    description: `Amazing! Your experience points just increase by ${event.experience_point}`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                } catch (err) {
                console.log(err)
                }
            } else {
                toast({
                    position: 'top',
                    title: "Your magic code is incorrect or no longer available.",
                    description: "Please try again!",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        } else {
            toast({
                position: 'top',
                title: "You've already submited the code",
                description: "Again, thanks for attending the events!",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
        }
    }

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
                {user? <Stack
                direction={{
                    base: 'column',
                    md: 'row',
                }}
                spacing="4"
                mt="8"
                >
                    <Input
                    placeholder='Magic Code 🧙‍♂️'
                    type="text"  
                    value={magicCode}  
                    id="magicCode" 
                    onChange={(e) => setMagicCode(e.target.value)}
                    />
                    <Button
                    height="14"
                    px="8"
                    shadow="base"
                    onClick={handleUpdatePoint}
                    >
                    Submit
                    </Button>
                </Stack> : null}
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