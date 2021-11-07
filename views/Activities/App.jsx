import {
    Box,
    SimpleGrid,
    Heading,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import TitlewithBoxes from '@/components/TitleswithBoxes';
import TextBoxwithGlasses from '@/components/TextBoxwithGlasses';


const Activities = () => {
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
               {/* <TitlewithBoxes text='Activities' color='#76E094'/> */}
               <Heading fontFamily='Raleway' fontSize='5xl' fontWeight='bold' maxW='xl' mx='auto' textAlign='center'>Our one-week immersive event has five main pillars</Heading>
               <SimpleGrid columns={{base:1, lg:2}} spacing={14}>
                   <TextBoxwithGlasses title='WORKSHOPS' content='Level up skills and experience points by attending workshops and completing challenges. The challenges will vary in difficulty and category, but all will take the students on a quest to learn something new! Students will earn prizes based on their overall experience points' imgSrc='/letter/W.png'/>
                   <TextBoxwithGlasses title='TALK + PANEL' content='Interested Faculty will be invited to present their research so that students can decide who will be their mentor to  work with and consult for their project ideas in the Research Hackathon event. We invite inspired speakers to give talks on their favorite projects, share experience, or important skills on how to conduct a research topic.' imgSrc='/letter/T.png'/>
                   <TextBoxwithGlasses title='MINI-EVENTS' content='Hosting a Mini-Event is an awesome way to give students a break, add a little excitement, and have some fun! Entertaining games aim to be team-building games to strengthen the connection among every member in each team.' imgSrc='/letter/M.png'/>
                   <TextBoxwithGlasses title='CHALLENGES' content='Level up skills and experience points by attending workshops and completing challenges. The challenges will vary in difficulty and category, but all will take the students on a quest to learn something new! Students will earn prizes based on their overall experience points' imgSrc='/letter/C.png'/>
               </SimpleGrid>
            </Box>
           
        </Box>
    </Box>
    )
}

export default Activities;