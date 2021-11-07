import {
    Box,
    Text,
    Heading,
    Img
} from '@chakra-ui/react'
import { useState } from 'react';
import * as React from 'react'

const About = () => {
    return (
    <Box pos='relative' 
    as="section" 
    maxW='6xl'
    mx='auto'
    px={{
        base: '6',
        md: '8',
    }}
    borderBottomRadius='250px'
    >
        <Box 
        as="section" 
        >
            <Box
            maxW={{
                base: 'xl',
                md: '6xl',
            }}
            mx='auto'
            px={{
                base: '6',
                md: '8',
            }}
            pos='relative'
            >
            <Box mt='4'>
                <Img src='/program.png' mx='auto' draggable={false}/>
                <Text
                textAlign='center'
                mx='auto'
                 mt={{base:'0',lg:'12'}}
                 fontSize={{base:'md', lg:'2xl'}}
                >
               VRW: Kickstart is your opportunity to spend a week focused on learning the researching skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events, challenges, panels, and more.
                </Text>
            </Box>
            </Box>
            
        </Box>
    </Box>
    )
}

export default About;