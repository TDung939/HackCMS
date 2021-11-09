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
// import GitHubButton from 'react-github-btn'

const TrollCTA = ({registerForm}) => {
    const {windowWidth, windowHeight} = useWindowSize()
    const [posX, setPosX] = useState(windowWidth)
    const [posY, setPosY] = useState(windowHeight/2)
    const [buttonText, setButtonText] = useState('APPLY NOW!')
    const [count, setCount] = useState(0)
    function Move() {
        const newPosY = Math.floor(Math.random() * 100);
        const newPosX = Math.floor(Math.random() * 400);
        setCount(count+1)
        setPosX(newPosX)
        setPosY(newPosY)
        switch (count) {
            case 0: {setButtonText('Erm... Are you sure?'); break;}
            case 1: {setButtonText("It's not THAT fun..."); break;}
            case 2: {setButtonText("Did Dung talk you into this? Don't trust him"); break;}
            case 3: {setButtonText('Ok go ahead'); break;}
            case 4: {window.open('https://youtu.be/dQw4w9WgXcQ', "_blank"); break;}
            case 5: {setButtonText('Gotcha hahaha'); break;}
            case 6: {setButtonText('Wow you are very persistent'); break;}
            case 7: {setButtonText('I like you. Have fun then!'); break;}
            case 8: {window.open(registerForm.registerUrl, "_blank"); break;}
            case 9: {setButtonText('Erm... you still here?'); break;}
            case 10: {setButtonText('Go sign up...'); break;}
            case 11: {setButtonText('This is getting old...'); break;}
            case 12: {setButtonText("It's not fun anymore"); break;}
            case 13: {setButtonText("Stop it! Stop Clicking!"); break;}
            case 14: {setButtonText("..."); break;}
            case 15: {setButtonText("Ok... you got me..."); break;}
            case 16: {setButtonText("Here's the prize for being the most annoying person"); break;}
            case 17: {Router.push('https://youtu.be/dQw4w9WgXcQ'); break;}
        }
    }
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
                top={`${posY}px`}
                left={`${posX}px`}
                onClick={Move}
                >
                {buttonText}
                </ButtonCTA>
                </Center>
                <Text mt='12' textAlign='center'>© VinUni Research Week 2021 — <Link as='marker'>Code of Conduct</Link></Text>
                {/* <Text mt='2' textAlign='center'>Made with <Text as="marker" mr='2'>❤️</Text>by Trung Dung</Text> */}
                {/* <Center>
                    Website credit 
                    <GitHubButton href="https://github.com/TDung939/VinuniResearchWeek-site" data-size="large" aria-label="Star TDung939/VinuniResearchWeek-site on GitHub">Star</GitHubButton>
                </Center> */}
            </Box>
           
        </Box>
    </Box>
    )
}

export default TrollCTA;