import { Box, Text, Heading, AvatarGroup, Avatar, Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Fade, ScaleFade, Slide, SlideFade, Collapse, Button, Flex, Stack
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { parseISO, isBefore, format, isAfter } from 'date-fns'
import { getStrapiMedia } from '@/lib/media';
import EventModalPage from '../Schedule/EventModalPage';


export default function ChallengeCard({ challenge }) {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow(!show)

    let typeBadge;
    let typeBadgeColor;
    switch (challenge.difficulty) {
        case 'easy': typeBadge='Easy'; typeBadgeColor='#76E094'; break;
        case 'medium': typeBadge='Medium'; typeBadgeColor='#FCCE44'; break;
        case 'hard': typeBadge='Hard'; typeBadgeColor='#C64F4B'; break;
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box marginBottom='24px' mr='8' cursor='pointer'>
             {/* <Modal isOpen={isOpen} onClose={onClose} size='6xl' scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>
                    <Heading
                    fontWeight='700'
                    margin='0'
                    lineHeight='1.4'
                    width='100%'
                    >
                    {event.title}
                    </Heading>
                    <Badge 
                    size='xs'
                    border={`1px solid ${typeBadgeColor}`}
                    bg={`${typeBadgeColor}30`}
                    color={typeBadgeColor}
                    >{typeBadge}</Badge>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <EventModalPage event={event}/>
                </ModalBody>
                </ModalContent>
          </Modal> */}
                <Box
                display='block'
                borderRadius='xl'
                minWidth='270px'
                maxWidth='270px'
                padding='1px'
                backgroundClip='content-box, border-box'
                border={`1px solid ${typeBadgeColor}`}
                _hover={{
                    transform:'translate(-5px, 4px)',
                    boxShadow:`-5px 4px 0px 1px ${typeBadgeColor}`
                }}
                boxShadow= {`-10px 8px 0px 1px ${typeBadgeColor}`}
                pos='relative'
                onClick={onOpen}
                >
                <Box p='2'>
                    <Flex>
                        <Heading
                        fontSize='14px'
                        fontWeight='700'
                        margin='0'
                        lineHeight='1.4'
                        width='100%'
                        >
                        {challenge.name}
                        </Heading>
                        <Badge>+ {challenge.experience_point}</Badge>
                    </Flex>
                    <Badge 
                    size='xs'
                    border={`1px solid ${typeBadgeColor}`}
                    bg={`${typeBadgeColor}30`}
                    color={typeBadgeColor}
                    >{typeBadge}</Badge>
                    <Collapse startingHeight={40} in={show}>
                        {challenge.descriptions}
                    </Collapse>

                    <Button width='full' size='xs' onClick={handleToggle} mt='2'>
                        Show {show ? "Less" : "More"}
                    </Button>
                    <Button width='full' onClick={handleToggle} mt='2'>
                        SUBMIT
                    </Button>
        
                    
                </Box>
                </Box>
        </Box>
    );
 }
 