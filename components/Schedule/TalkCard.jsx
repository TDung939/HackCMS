import { Box, Text, Heading, AvatarGroup, Avatar, Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { parseISO, isBefore, format, isAfter } from 'date-fns'
import { getStrapiMedia } from '@/lib/media';
import EventModalPage from './EventModalPage';


const formatDate = (date) => {
    return format(parseISO(date), "h:mmaaaaa'm'");
};

export default function TalkCard({ event, showTime}) {
    const [isLive, setIsLive] = useState(false);
    const [startAndEndTime, setStartAndEndTime] = useState('');

    useEffect(() => {
        const now = Date.now();
        setIsLive(isAfter(now, parseISO(event.from)) && isBefore(now, parseISO(event.to)));
        setStartAndEndTime(`${formatDate(event.from)} – ${formatDate(event.to)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let typeBadge;
    let typeBadgeColor;
    switch (event.type) {
        case 'workshop': typeBadge='Workshop'; typeBadgeColor='#FCCE44'; break;
        case 'mini_event': typeBadge='Mini Event'; typeBadgeColor='#76E094'; break;
        case 'faculty_sharing': typeBadge='Faculty Sharing'; typeBadgeColor='#AFEBFC'; break;
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box marginBottom='24px' mr='8' cursor='pointer'>
             <Modal isOpen={isOpen} onClose={onClose} size='6xl' scrollBehavior='inside'>
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
          </Modal>
            <Text marginBottom='2px'>{startAndEndTime || <>&nbsp;</>}</Text>
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
                    <Badge display={isLive? 'block':'none'} pos='absolute' right='-2' top='-2'
                    bg='red' color='white'
                    >Live</Badge>
                    <Heading
                    fontSize='14px'
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
                    <Box
                    display='flex'
                    alignItems='center'
                    marginTop='4'
                    marginBottom='2'
                    >
                    <AvatarGroup size="sm" max={2}>
                        {event.hosts.map((host, idx)=>{
                        const profilePicture = host.profile_picture?.url
                        return (
                            <Avatar border='none' key={idx} name={host.name} src={profilePicture} />
                        )
                        })}
                    </AvatarGroup>
                    <Text ml='4'>
                        {event.hosts.length ==1? event.hosts[0].name : `${event.hosts.length} speakers`}
                    </Text>
                    </Box>
                </Box>
                </Box>
        </Box>
    );
 }
 