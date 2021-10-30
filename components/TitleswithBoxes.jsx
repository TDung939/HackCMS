import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'

const TitlewithBoxes = (props) => {
    const {text, color} = props
    return (
    <Box
    width='fit-content'
    pos='relative'
    mb='16'
    >
        <Heading
        as="h1"
        fontSize={{base:'2xl', lg:'7xl'}}
        fontWeight="extrabold"
        lineHeight="1.2"
        >
        {text}
        </Heading>
        <Box pos='absolute' right='-2' bottom='-14' width='38px' height='38px' backgroundColor={color}/>
        <Box pos='absolute' right='-20' bottom='-2' width='38px' height='38px' backgroundColor={color}/>
    </Box>
    )
}

export default TitlewithBoxes;