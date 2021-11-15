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
            <TextBoxwithGlasses title='WORKSHOPS' content='During the research week, different workshops will be organized for you to be trained and prepared for your final research proposal. You can pick and choose the workshops you want attend, based on your research topic and interest.' imgSrc='/shapes/square.svg'/>
            <TextBoxwithGlasses title='TALK + PANEL' content='Interested Faculty will be invited to present their research so that you can decide who will be your mentor to work with and consult for your project ideas. We invite inspired speakers to give talks on their favorite projects, share experience, or important skills on how to conduct a research topic.' imgSrc='/shapes/triangle.svg'/>
            <TextBoxwithGlasses title='MINI-EVENTS' content='Hosting a Mini-Event is an awesome way to give students a break, add a little excitement, and have some fun! Entertaining games aim to be team-building games to strengthen the connection among every member in each team.' imgSrc='/shapes/circle.svg'/>
            <TextBoxwithGlasses title='CHALLENGES' content='Level up skills and experience points by attending workshops and completing challenges. The challenges will vary in difficulty and category, but all will take you on a quest to learn something new! You will earn prizes based on your overall experience points' imgSrc='/shapes/x.svg'/>
        </SimpleGrid>
        <Heading my='8'>PRESENTATION DAY</Heading>
        <Img src='groupShapes.svg'/>
        <Text fontSize='2xl' my='8'>
        At the beginning of the Research Bootcamp, each team will announce the research topic that they will be working on throughout the week.
        <br/>
        After the workshop series and training for necessary research skills, all the teams will submit:
        <Box ml='16'>
            <ul>
                <li> A written research proposal</li>
                <li> A PowerPoint slide deck (16:9) for live presentation</li>
            </ul>
        </Box>
        Each team will then present their proposals and presentations to the university committee, who will then evaluate and give awards, academic and financial support for future research and implementation.
        </Text>
    </Box>
    )
}

export default Activities;