import { Box, Img, Flex, Heading, Text, Icon, Progress, Center } from '@chakra-ui/react'
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import { getStrapiMedia, uploadStrapiMedia } from '@/lib/media';
import useSWR from 'swr';
import axios from 'axios';
import { FaShieldAlt } from 'react-icons/fa';
import { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';

const fetcher = url => axios.get(url).then(res => res.data)

const ChangePicZone = ({user}) => {
    
    const onDrop = useCallback(acceptedFiles => {
        uploadStrapiMedia(acceptedFiles[0],  user?.id, 'user', 'users-permissions','profile_image')
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Center width='120px' height='120px' textAlign='center' zIndex='1' bg='#00000050' alignItems='center' pos='absolute'
        color='white'
        opacity='0'
        _hover={{
            opacity:'1'
        }}
        cursor='pointer'
        px='4'
        >
            <Center w='full' h='full' {...getRootProps()}>
                <input {...getInputProps()} />
                <Text fontWeight='bold'>Change Avatar</Text>
            </Center>
        </Center>
    );
}
  

const RankFrame = ({data}) => {
    const { user } = useContext(AuthContext)

    // const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user?.id}`, fetcher, { refreshInterval: 500 })

    const profileImage = data?.profile_image? getStrapiMedia(data?.profile_image) : `https://avatars.dicebear.com/api/pixel-art/${data?.username}.svg`
    let frameColor;
    let frame; 
    if (data?.experience_point <= 400) {
        frame = 'bronze';
        frameColor = '#ED5D43';
    } else if (data?.experience_point > 400 && data?.experience_point <= 1000) {
        frame = 'silver';
        frameColor = '#B5C0C9';
    } else if (data?.experience_point > 1000 && data?.experience_point <= 3000) {
        frame = 'gold';
        frameColor = '#F7E436';
    } else if (data?.experience_point > 3000) {
        frame = 'diamond';
        frameColor = '#6679DC';
    }

    let maxPoint;
    let nextFrame;
    switch (frame) {
        case 'bronze': 
            maxPoint=400;
            nextFrame='silver';
            break;
        case 'silver': 
            maxPoint=1000;
            nextFrame='gold';
            break;
        case 'gold': 
            maxPoint=2000;
            nextFrame='diamond';
            break;
        case 'diamond': 
            maxPoint=2000
            nextFrame='max'
            break;
    }

    let progress = Math.floor((data?.experience_point/maxPoint)*100)

    return (
        <Flex my='12' align='center'>
            <Box maxWidth='lg' px='16' py='16' borderRadius='xl' pos='relative'>
                <Img src={`/frame/${frame}.png`} width='245px' pos='absolute' top='-2' left='0'/>
                <Box width='120px' height='120px'>
                    <ChangePicZone user={user} />
                    <Img src={profileImage} w='full' h='full' objectFit='cover'/>
                </Box>
            </Box>
            <Box ml='8' py='6' px='8' boxShadow='xl' borderRadius='xl'>
                <Heading fontSize='xl'>{data?.username}</Heading>
                <Text fontSize='sm'>{data?.vinuni_id}</Text>
                <Text mt='1' color={frameColor} textTransform='uppercase' fontWeight='bold' fontSize='md'>{frame}</Text>
                <Flex align='center' mt='1'>
                    <Icon color='#76E094' as={FaShieldAlt}/>
                    <Text ml='2' color='gray.400' textTransform='uppercase' fontWeight='bold' fontSize='md'>{data?.experience_point} / {maxPoint} EXP - {nextFrame}</Text>
                </Flex>
                <Progress hasStripe value={progress} isAnimated colorScheme='green' />
            </Box>
      </Flex>
    )
}
export default RankFrame

