import {
    Box,
    Text,
    Center,
    Link,
} from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react';
import { useWindowSize } from '@/lib/window';
import ButtonCTA from '@/components/ButtonCTA';
import Router from 'next/router';

const TrollCTA = ({registerForm}) => {
    const [buttonText, setButtonText] = useState('APPLY NOW!')
    const [count, setCount] = useState(0)
    return (
    <Box pos='relative'
    px={{
        base: '6',
        md: '8',
    }}
    minH='320px'
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
            pos='relative'
            >
                <Center>
                <ButtonCTA
                onClick={() => Router.push(registerForm.registerUrl)}
                >
                {buttonText}
                </ButtonCTA>
                </Center>
                <Text mt='12' textAlign='center'>© VinUni Research Bootcamp 2021 — <Link as='marker'>Code of Conduct</Link></Text>
            </Box>
           
        </Box>
    </Box>
    )
}

export default TrollCTA;