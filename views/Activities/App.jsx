import {
    Box,
    SimpleGrid,
    Heading,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import TextBoxwithGlasses from '@/components/TextBoxwithGlasses';


const Activities = () => {
    return (
    <Box pos='relative'
    px={{
        base: '6',
        md: '8',
    }}
    maxW={{
        base: 'xl',
        md: '6xl',
    }}
    mx='auto'
    mt='112px'
    >
        <Heading fontFamily='Space Mono' fontSize='48px' fontWeight='bold' maxW='4xl'>Our one-week immersive event has five main pillars</Heading>
        <SimpleGrid mt='24px' columns={{base:1, lg:2}} spacing={14}>
            <TextBoxwithGlasses title='WORKSHOPS' content='Level up skills and experience points by attending workshops and completing challenges. The challenges will vary in difficulty and category, but all will take the students on a quest to learn something new! Students will earn prizes based on their overall experience points' imgSrc='/shapes/square.svg'/>
            <TextBoxwithGlasses title='TALK + PANEL' content='Interested Faculty will be invited to present their research so that students can decide who will be their mentor to  work with and consult for their project ideas in the Research Hackathon event. We invite inspired speakers to give talks on their favorite projects, share experience, or important skills on how to conduct a research topic.' imgSrc='/shapes/triangle.svg'/>
            <TextBoxwithGlasses title='MINI-EVENTS' content='Hosting a Mini-Event is an awesome way to give students a break, add a little excitement, and have some fun! Entertaining games aim to be team-building games to strengthen the connection among every member in each team.' imgSrc='/shapes/circle.svg'/>
            <TextBoxwithGlasses title='CHALLENGES' content='Level up skills and experience points by attending workshops and completing challenges. The challenges will vary in difficulty and category, but all will take the students on a quest to learn something new! Students will earn prizes based on their overall experience points' imgSrc='/shapes/x.svg'/>
        </SimpleGrid>
    </Box>
    )
}

export default Activities;