import {
    Box,
    Text,
    Heading,
    Img,
    HStack,
    Flex
} from '@chakra-ui/react'
import { useState } from 'react';
import * as React from 'react'
import Video from 'views/Video/App';

const About = ({video}) => {
    return (
    <Box 
    pos='relative' 
    as="section" 
    maxW={{
        base: 'xl',
        md: '6xl',
    }}
    mx='auto'
    px={{
        base: '6',
        md: '8',
    }}
    mt='112px'
    borderBottomRadius='250px'
    >
        <HStack spacing='12'>
            <Box mt='4' maxW='xl'>
                <Heading fontFamily='Space Mono' fontSize='48px'>About the program</Heading>
                <Text
                fontFamily='Work Sans'
                mt='25px'
                fontSize='24px'
                >
                VRW: Kickstart is your opportunity to spend a week focused on learning the researching skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events, challenges, panels, and more.
                </Text>
            </Box>
            <Video video={video}/>
        </HStack>
    </Box>
    )
}

export default About;