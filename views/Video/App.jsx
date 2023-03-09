import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { Player, BigPlayButton, ControlBar, PosterImage } from 'video-react';

const Video = ({video}) => {
    const thumbnail = ''
    const uploadedVideo = ''
    return (
    <Box 
    as="section" 
    pos='relative'
    height='full'
    width='full'
    >
        <Player
        playsInline
        fluid={true}
        muted={true}
        poster={thumbnail}
        // src={uploadedVideo}
        >
        <BigPlayButton position="center" />
        <ControlBar autoHide={false} />
        </Player>
    </Box>
    )
}

export default Video;