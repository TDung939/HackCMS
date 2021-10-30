import {
    Box,
    Heading,
} from '@chakra-ui/react'
import * as React from 'react'
import { Player, BigPlayButton, ControlBar, PosterImage } from 'video-react';

const Video = () => {
    return (
    <Box pos='relative' mb='12'>
        <Box 
        as="section" 
        pos='relative'
        >
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
            pos='relative'
            >
            <Box
            rounded='xl'
            border='15px solid #ED5D4350'
            boxShadow=' -24px 21px 0px 1px #ED5D43'
            >
            <Player
            playsInline
            fluid={true}
            muted={true}
            poster="https://images.unsplash.com/photo-1609931424192-b7cf25773e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
            src="https://zoox.com/wp-content/uploads/website-banner-1.mp4"
            >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false} style={{bg:'red'}} />
            </Player>
            </Box>
           
            </Box>
           
        </Box>
    </Box>
    )
}

const styles = () => {

}

export default Video;