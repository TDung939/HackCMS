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
        <Img src={imgSrc} pos='absolute' zIndex='-1' right='12' top='10'/>
        <Heading my='8'>{title}</Heading>
        <Text fontSize='2xl'>{content}</Text>
    </Box>
    )
}

export default TextBoxwithGlasses;