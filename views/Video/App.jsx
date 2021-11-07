import { getStrapiMedia } from '@/lib/media';
import {
    Box,
    Heading,
} from '@chakra-ui/react'
import * as React from 'react'
import { Player, BigPlayButton, ControlBar, PosterImage } from 'video-react';

const Video = ({video}) => {
    const thumbnail = video.thumbnail? getStrapiMedia(video.thumbnail) : ''
    const uploadedVideo = video.video? getStrapiMedia(video.video) : video?.videoUrl
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
            border='15px solid white'
            boxShadow=' -24px 21px 0px 1px #ED5D43'
            >
            <Player
            playsInline
            fluid={true}
            muted={true}
            poster={thumbnail}
            src={uploadedVideo}
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