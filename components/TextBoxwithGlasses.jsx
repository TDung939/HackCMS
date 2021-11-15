import {
    Box,
    Heading,
    Img,
    Text,
} from '@chakra-ui/react'
import * as React from 'react'

const TextBoxwithGlasses = (props) => {
    const {title, content, imgSrc} = props
    return (
        <Box mt='4' pos='relative'>
        <Img src={imgSrc} pos='absolute' zIndex='-1' left={{base:'', lg:'132px'}} top='0'/>
        <Heading my='8'>{title}</Heading>
        <Text fontSize='2xl'>{content}</Text>
    </Box>
    )
}

export default TextBoxwithGlasses;